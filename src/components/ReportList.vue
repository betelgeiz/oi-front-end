<template>
  <div>
    <!-- Сортировка таблицы -->
    <b-row>
      <b-col lg="6" class="my-1" v-show="isadmin">
        <b-form-group
          label="Поиск"
          label-cols-sm="2"
          label-align-sm="left"
          label-size="sm"
          label-for="filterInput"
          class="mb-3"
        >
          <b-input-group size="sm">
            <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Текст"></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Очистить</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col lg="6" class="my-1">
        <b-form-group
          label="Сортировка"
          label-cols-sm="3"
          label-align-sm="left"
          label-size="sm"
          label-for="sortBySelect"
          class="mb-3"
        >
          <b-input-group size="sm">
            <b-form-select
              v-model="selected"
              id="sortBySelect"
              :options="options"
              @change="getReportList"
            >
              <template v-slot:first>
                <option value>-- Все --</option>
              </template>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Список отчетов -->
    <b-table
      :fields="reportList"
      bordered
      hover
      :items="addKvartal"
      :filter="filter"
      :filterIncludedFields="filterRow"
      class="reportList"
      head-variant="light"
    >
      <!-- Номер документа или имя компании -->
      <template #cell(id)="row">
        <p v-if="isadmin">{{row.item.name}}</p>
        <p v-else>
          <template>{{row.index + 1}}</template>
        </p>
      </template>

      <template #cell(createdate)="row">
        <!-- Дата регистрации -->
        <p v-if="isadmin">
          {{getDate(row.item.datesend) }}
          <!-- Дата отправки для админа -->
        </p>
        <p v-else>
          <!-- Дата регистрации для компании -->
          <span>{{getDate(row.item.createdate)}}</span>
          <br />
          
        </p>
        <b-button
            size="sm"
            @click="row.toggleDetails"
            class="mr-2"
            v-if="row.item.datesend || row.item.updatedate"
          >{{ row.detailsShowing ? 'Скрыть' : 'Показать'}} Детали</b-button>
      </template>
      <!-- Статус документа -->
      <template #cell(status)="row">
        <span v-if="row.item.status == 0">Редактирование</span>
        <span v-else-if="row.item.status == 1">Готов к отправке</span>
        <span v-else-if="row.item.status == 2">Отправлен</span>
        <span v-else-if="row.item.status == 3">Принят</span>
        <span v-else-if="row.item.status == 4">Отклонен</span>
      </template>

      <!-- Тип документа -->

      <template #cell(typedoc)="row">
        <template v-if="row.item.title">
          <!-- Номер(Разделитель) квартала  -->
          <h5>{{row.item.title}}</h5>
        </template>
        <template v-else>
          <router-link
            :to="`/anex-1/${row.item.id}`"
            v-if="row.item.typedoc == 'anex-1'"
            class="nav-link"
          >Приложение 1</router-link>
          <router-link
            :to="`/anex-2/${row.item.id}`"
            v-else-if="row.item.typedoc == 'anex-2'"
            class="nav-link"
          >Приложение 2</router-link>
          <router-link
            v-else-if="row.item.typedoc == 'fin'"
            class="nav-link"
            :to="`fin/${row.item.id}/anex1/${row.item.doc.anex1}`"
          >Отчет</router-link>
          <router-link
            v-else
            :to="`/report/${row.item.id}?type=${row.item.typedoc}`"
            class="nav-link"
          >
            <span v-if="row.item.typedoc == 'RKV01'">
              Квартальный отчет
              <br />(Приложение 2-1)
            </span>
            <span v-else-if="row.item.typedoc == 'RKV02'">
              Годовой отчет
              <br />(Приложение 2-1)
            </span>
            <span v-else-if="row.item.typedoc[0] == 'f'">
              Существенный факт
              <br />
              ( {{factNames[row.item.typedoc]}} )
            </span>
          </router-link>
        </template>
      </template>

      <!-- Подтвердить -->
      <template #cell(refer)="row">
        <p v-if="isadmin">
          <span v-if="row.item.typedoc !== 'KVIT01' && row.item.typedoc">
            <b-button
              variant="success"
              v-if="row.item.refer == null"
              @click="confirm(row.item.id, row.item.sender, row.item.doc, row.item.name, row.item.typedoc, row.item.kvartal)"
            >Подтвердить</b-button>
            <b-button variant="outline-primary" v-else>Подтверждено</b-button> <br>
            <b-button variant="outline-primary" @click="deleteReport(row.item.id, row.item.typedoc, row.item.linkkse)">Удалить</b-button>
          </span>
        </p>
        <p v-else>
          <template v-if="row.item.typedoc[0] != 'a'">
            <b-button
              v-if="row.item.status == 1 || row.item.status == 4"
              @click="sendReport(row.item.id, row.item.typedoc)"
              variant="primary"
            >Отправить</b-button>
            <b-button
              v-if="row.item.status == 2"
              @click="backReport(row.item.id)"
              variant="warning"
            >Отменить отправку</b-button>
            <b-button
              @click="modal(row.item.typedoc, row.item.confirmdate, row.item.name, row.item.linkkse)"
              v-b-modal.modal-center
              v-else-if="row.item.status == 3"
              variant="success"
            >Квитанция</b-button>
          </template>
          <template v-if="row.item.title">
            <b-button
              v-b-modal.modal-form
              @click="kvartalBtn(addKvartal[row.index + 1].kvartal)"
              variant="outline-dark"
            >Сформировать</b-button>
          </template>
        </p>
      </template>

      <!-- Детали -->
      <template v-slot:row-details="row">
        <b-card v-if="!isadmin">
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right" v-if="row.item.updatedate">
              <b>Дата последнего изменения:</b>
            </b-col>
            <b-col>{{ getDate(row.item.updatedate) }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right" v-if="row.item.datesend">
              <b>Дата отправки:</b>
            </b-col>
            <b-col>{{ getDate(row.item.datesend) }}</b-col>
          </b-row>

          <b-col sm="3" class="text-sm-right">
            <b-button size="sm" sm="3" @click="row.toggleDetails">Скрыть</b-button>
          </b-col>
        </b-card>
        <b-card v-else>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right">
              <b>Ссылка:</b>
            </b-col>
            <b-col>
                <a
                  v-if="row.item.typedoc[0] == 'R'"
                  :href="'http://www.kse.kg/files/BusinessReports/' + row.item.linkkse"
                  target="_blank"
                >Перейти</a>
                <a
                  v-else
                  :href="'http://www.kse.kg/ru/RussianAllNewsBlog/' + row.item.linkkse"
                  target="_blank"
                >Перейти</a>
            </b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right">
              <b>Квартал:</b>
            </b-col>
            <b-col>
                {{row.item.kvartal}}
            </b-col>
          </b-row>
        </b-card>
      </template>
    </b-table>

    <!-- Модальное окно квитанции -->
    <b-modal id="modal-center" ref="my-modal" size="lg" centered title="Квитанция" hide-footer>
      <img src="../assets/head.png" v-if="doctype != 'fin'" alt />
      <img style="width: 100%" src="../assets/head_fin.jpg" v-else alt />

      <p class="my-4 bold">{{companyname}}</p>
      <p class="my-4 bold">
        Основание документа:
        <span v-if="doctype == 'RKV01'">Квартальный отчет</span>
        <span v-else-if="doctype == 'RKV02'">Годовой отчет</span>
        <span v-else-if="doctype == 'fin'">Отчет</span>
        <span v-else>{{this.factNames[this.doctype]}}</span>
      </p>
      <p class="my-4 bold">Дата: {{getDate(date)}}</p>
      <p class="my-4" v-if="doctype != 'fin'">
        Опубликовано на официальном сайте
        <template v-if="link == 0">
          <a href="https://www.kse.kg" target="_blank">ЗАО "Кыргызская Фондовая Биржа"</a>
        </template>
        <template v-else>
          <a
            v-if="doctype[0] == 'R'"
            :href="'http://www.kse.kg/files/BusinessReports/' + link"
            target="_blank"
          >ЗАО "Кыргызская Фондовая Биржа"</a>
          <a
            v-else
            :href="'http://www.kse.kg/ru/RussianAllNewsBlog/' + link"
            target="_blank"
          >ЗАО "Кыргызская Фондовая Биржа"</a>
        </template>
      </p>
      <b-button class="print" onclick="window.print()">Печать</b-button>
        <p class="kvitancia">
          <table>
            <p>ЖАК "Кыргыз Фондулук Биржасы"</p>
            <p>ЗАО "Кыргызская Фондовая Биржа"</p>
            <p>"Kyrgyz Stock Exchange" CJSC</p>
            <p class="otchet for">ДЛЯ ОТЧЁТОВ</p>
            <p class="otchet INN">ИНН 02908199410061</p>
            <p class="otchet str">г.БИШКЕК, ул.Московская, 172</p>
          </table>
        </p>
      <b-button class="mt-3 print" block @click="hideModal">Закрыть</b-button>
    </b-modal>

    <!-- Модальное окно для финнадзора -->
    <b-modal id="modal-form" size="lg" centered title="Сформировать отчет" @ok="finnadzor">
      <b-form-group label="Приложение 1:">
        <b-form-radio-group id="anex1" name="anex1" v-for="(item, index) in items" :key="index">
          <template v-if="item.typedoc == 'anex-1' && item.kvartal == selectedKvartal">
            <b-form-radio :value="item.id">
              <b>Дата регистрации</b>
              {{getDate(item.createdate)}}
            </b-form-radio>
          </template>
        </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Приложение 2:">
        <b-form-radio-group id="anex2" name="anex2" v-for="(item, index) in items" :key="index">
          <template v-if="item.typedoc == 'anex-2' && item.kvartal == selectedKvartal">
            <b-form-radio :value="item.id">
              <b>Дата регистрации</b>
              {{getDate(item.createdate)}}
            </b-form-radio>
          </template>
        </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Приложение 2-1:">
        <b-form-radio-group id="rkv01" name="rkv01" v-for="(item, index) in items" :key="index">
          <template v-if="item.typedoc == 'RKV01' && item.kvartal == selectedKvartal">
            <b-form-radio :value="item.id">
              <b>Дата регистрации</b>
              {{getDate(item.createdate)}}
            </b-form-radio>
          </template>
        </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Существенные факты:">
        <b-form-checkbox-group id="facts" name="facts" v-for="(item, index) in items" :key="index">
          <template v-if="item.typedoc[0] == 'f' && item.kvartal == selectedKvartal">
            <b-form-checkbox :value="item.id">
              <b>Дата регистрации</b>
              {{getDate(item.createdate)}}
            </b-form-checkbox>
          </template>
        </b-form-checkbox-group>
      </b-form-group>
    </b-modal>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Queries from '../services/report.service';
import facts from '../mixins/facts.js';
export default {
  name: 'ReportList',
  created() {
    this.getReportList();
  },
  mixins: [facts],
  data() {
    return {
      filter: null,
      filterRow: ['name'],
      selectedKvartal: 'sss', // Для модального окна формирования отчета финнадзору
      link: 0, // Возврат ссылки подтвержденного отчета
      date: '', // Модальное окно квитанции
      doctype: '', // Модальное окно квитанции
      selected: '', // Модальное окно квитанции
      options: [
        // Выбор типа документа для сортировки списка отчетов
        //{ value: '', text: 'Все' },
        { value: 'RKV01', text: 'Квартальный отчет' },
        { value: 'RKV02', text: 'Годовой отчет' },
        { value: 'fact', text: 'Существенные факты' }
      ],
      companyname: '', // Модальное окно квитанции
      result: [],
      reportList: [
        {
          key: 'id',
          headerTitle: '№',
          label: '№'
        },
        {
          key: 'status',
          headerTitle: 'Статус документа',
          label: 'Статус документа'
        },
        {
          key: 'createdate',
          headerTitle: 'Дата регистрации',
          label: 'Дата регистрации'
        },
        {
          key: 'typedoc',
          headerTitle: 'Тип документа',
          label: 'Тип документа'
        },
        { key: 'refer', headerTitle: 'Подтвердить', label: 'Подтвердить' }
      ]
    };
  },
  computed: {
    ...mapState({ items: store => store.report.list }), // Список отчетов
    isadmin() {
      if (localStorage.getItem('role') === 'admin') {
        return true;
      }
      return false;
    },
    addKvartal() {
      // Разделение списка отчетов по кварталам
      let kvartal = '';
      let arr = [];
      if (localStorage.getItem('role') != 'admin') {
        this.items.forEach(item => {
          if (item.kvartal != kvartal) {
            // Если текущий квартал не равен переменной
            let titleKvartal = item.kvartal.split(';');
            arr.push({
              // Добавляеться разделитель т.е номер текущего квартала
              title: titleKvartal[1] + ' ' + titleKvartal[0],
              typedoc: '',
              _rowVariant: 'info'
            });
            kvartal = item.kvartal; // Перезаписываем переменную для следующей проверки
          }
          arr.push(item);
        });
      } else {
        arr = this.items;
        arr.sort(function(a, b) {
          let dateA = new Date(a.datesend),
            dateB = new Date(b.datesend);
          return dateB - dateA; //сортировка по убывающей дате
        });
      }

      return arr;
    }
  },

  methods: {
    hideModal() {
      this.$refs['my-modal'].hide();
    },
    finnadzor() {
      // Отправка сформированного отчета в финнадзор
      let anex1 = document.querySelector('input[name="anex1"]:checked').value;
      let anex2 = document.querySelector('input[name="anex2"]:checked').value;
      let anex2_1 = document.querySelector('input[name="rkv01"]:checked').value;
      let facts = document.querySelectorAll('input[name="facts"]:checked')
        ? document.querySelectorAll('input[name="facts"]:checked')
        : '';
      let factsObj = {};
      if (facts != '') {
        for (let i = 0; i < facts.length; i++) {
          factsObj[i] = facts[i].value;
        }
      }

      let arr = { anex1, anex2, anex2_1, factsObj };

      let kvartal = this.selectedKvartal; //2020; 2 квартал
      let typedoc = 'fin';
      let xmldoc = JSON.stringify(arr);
      let sender = this.$store.state.company.info.kod;
      let status = 1;

      console.log(factsObj);

      this.$store
        .dispatch('report/insert', { typedoc, xmldoc, sender, status, kvartal })
        .then(response => {
          this.getReportList();
        })
        .catch(function(error) {
          console.log(error);
          alert('Отчет не отправлен');
        });
    },
    kvartalBtn(kvartal) {
      // Для сортировки в модальном окне выбранного квартала
      this.selectedKvartal = kvartal;
    },
    confirm(id, interrefer, mEntryText, mEntryCompany, type, kvartal) {
      // Подтверждение отчета в админке
      if (type.indexOf('fact') >= 0) {
        // Если тип отчета существенный факт
        let name = mEntryCompany + ' : ' + this.factNames[type];
        let titles = this.facts[type];
        this.sendToKSE(mEntryText, name, mEntryCompany, titles, id); // Отправка существенного факта в kse.kg
      } else if (type.indexOf('RKV') >= 0) {
        // если тип отчета квартальный или годовой
        this.sendReportKse(mEntryText, id, kvartal); // отправка отчета в kse.kg
      }

      this.$store
        .dispatch('report/confirm', { id, interrefer })
        .then(response => {
          this.getReportList();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    sendReport(id, type) {
      // Отправка отчета на проверку (в админку)
      this.$store
        .dispatch('report/sendReport', { id, type })
        .then(response => {
          this.getReportList(); // Обновить список отчетов
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    modal(type, date, name, link = 0) {
      // Модальное окно квитанций
      this.date = date;
      this.doctype = type;
      this.companyname = name;
      this.link = link;
    },
    backReport(id) {
      // Отменить отправку
      this.$store
        .dispatch('report/backReport', id)
        .then(response => {
          this.getReportList();
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    deleteReport(id, type, kseId) {
      let isBoss = confirm("Вы действительно хотите удалить отчет?");
      if(isBoss == true) {
        this.$store
        .dispatch('report/deleteReport', id)
        .then(response => {
          this.deleteReportInKSE(kseId, type)
          this.getReportList();
        })
        .catch(function(error) {
          console.log(error);
        });
        
      }
    },

    getReportList() {
      // Список отчетов
      const type = this.selected;

      this.$store
        .dispatch('report/getList', type)
        .then(response => {})
        .catch(function(error) {
          console.log(error);
        });
      
    },

    sendToKSE(mEntryText, mEntryName, mEntryCompany, title, idfact) {
      // Отправка существенного факта в kse.kg
      let doAddEntry = 'test';
      let BlogId = '3';
      return Queries.test({
        doAddEntry,
        BlogId,
        mEntryText,
        mEntryName,
        mEntryCompany,
        title
      })
        .then(response => {
          let link = response.data;
          this.$store
            .dispatch('report/addLink', { idfact, link })
            .then(response => {})
            .catch(function(error) {
              console.log(error);
            });
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    sendReportKse(doc, idfact, kvartal) {
      // Отправка квартального/годового отчета в kse.kg
      return Queries.addReportInKSE(doc, kvartal).then(response => {
        console.log(response);
        let link = response.data;
        this.$store
          .dispatch('report/addLink', { idfact, link })
          .then(response => {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      });
    },

    getDate(date) {
      // Форматирование даты в формат d.m.Y
      if (date != undefined) {
        var options = {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric'
        };

        let newDate = new Date(date);
        return newDate.toLocaleString('ru', options);
      }
    },

    deleteReportInKSE(id, type) {
      // Удаление квартального/годового отчета в kse.kg
      return Queries.deleteReportInKSE({id, type}).then(response => {
        console.log(response);
      });
    }
  }
};
</script>

<style>
table button {
  width: 100%;
}


@media print {
  
  @page {
    orientation: portrait;
  }
  .modal,
  .modal-dialog {
    height: auto !important;
    min-height: auto !important;
    align-items: end;
  }
  .modal-dialog {
    margin: 0;
    max-width: 100%;
  }
  .modal-body {
    padding-left: 8%;
    font-size: 18px;
  }
  .modal-content {
    border: none;
  }
  .report-list,
  select,
  .modal-footer,
  .close,
  .print,
  .modal-title,
  .reportList {
    display: none;
  }

  .my-4 {
    font-size: 18px;
    font-weight: 400;
  }

  .bold {
    font-weight: 700;
  }  
}
.kvitancia{
     float: right; 
    /* margin-left: 400px; */
    color: blue;
    border: 2px solid blue;
    line-height: 0.3;
    padding-top: 10px;
    width: 260px;
    padding-left: 5px;
    font-size: 15px;
  }
  .otchet{
    text-align: center;
  }
  .for{
    font-size: 25px;
  }
</style>