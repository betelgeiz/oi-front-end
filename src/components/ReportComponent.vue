<template>
  <div class="reportcomponent">

    <div class="col-5 text-left my-3 hide-print" v-if="$route.params.idreport" style="z-index: 40">
      <router-link to="/report?type=report">Экспортировать в новый отчет</router-link>
      <br />
    </div>

    <div class="col-5 offset-7 text-right my-3">
      <b-col sm="12">
        <h5 class="d-inline">Приложение 2-1</h5>
      </b-col>
      <br />
      <b-col sm="12">
        <p class="d-inline">к Положению о порядке представления</p>
      </b-col>
      <b-col sm="12">
        <p class="d-inline">отчетности (информации) и раскрытии</p>
      </b-col>
      <b-col sm="12">
        <p class="d-inline">информации субъектами финансового рынка</p>
      </b-col>
    </div>
    <h2>
      Данные, включаемые в краткий годовой и ежеквартальный отчет
      для публикации в средствах массовой информации
    </h2>
    <h3 class="hide-print" v-show="EditReport">
      Выберите вид
      <b-badge>ОТЧЕТА</b-badge>
    </h3>
    <br />
    <template v-if="!EditReport">
      <div class="active"></div>
    </template>
    <b-form-group class="hide-print" v-show="EditReport">
      <b-form-radio-group
        id="btn-radios-2"
        v-model="selected"
        :options="options"
        buttons
        button-variant="outline-primary"
        size="lg"
        @click="sendData"
        name="radio-btn-outline"
      ></b-form-radio-group>
    </b-form-group>
    <b-col sm="12" class="hide-print" v-show="EditReport">
      <h4>Выберите квартал и год:</h4>
      <b-form-select v-model="kvartal" @change="sendData" class="mb-3 col-3 d-inline">
        <b-form-select-option value="1 квартал">Квартал 1</b-form-select-option>
        <b-form-select-option value="2 квартал">Квартал 2</b-form-select-option>
        <b-form-select-option value="3 квартал">Квартал 3</b-form-select-option>
        <b-form-select-option value="4 квартал">Квартал 4</b-form-select-option>
      </b-form-select>
      <b-form-select v-model="year" @change="sendData" class="mb-3 offset-1 col-3 d-inline">
        <b-form-select-option value="2010">2010</b-form-select-option>
        <b-form-select-option value="2011">2011</b-form-select-option>
        <b-form-select-option value="2012">2012</b-form-select-option>
        <b-form-select-option value="2013">2013</b-form-select-option>
        <b-form-select-option value="2014">2014</b-form-select-option>
        <b-form-select-option value="2015">2015</b-form-select-option>
        <b-form-select-option value="2016">2016</b-form-select-option>
        <b-form-select-option value="2017">2017</b-form-select-option>
        <b-form-select-option value="2018">2018</b-form-select-option>
        <b-form-select-option value="2019">2019</b-form-select-option>
        <b-form-select-option value="2020">2020</b-form-select-option>
      </b-form-select>
    </b-col>
    <h4 class="text-center">{{kvartal + ' ' + year}}</h4>
    <h4>1. Данные об эмитенте:</h4>
    <b-input-group prepend="полное и сокращенное наименование эмитента" class="mt-3">
      <b-form-input style="background: #fff;" readonly v-model="info.name"></b-form-input>
    </b-input-group>
    <b-input-group prepend="организационно-правовая форма" class="mt-3">
      <b-form-input style="background: #fff;" readonly v-model="info.opforma"></b-form-input>
    </b-input-group>
    <b-input-group
      prepend="юридический и почтовый адрес эмитента, номер телефона и факса"
      class="mt-3"
    >
      <b-form-input style="background: #fff;" readonly v-model="info.address"></b-form-input>
    </b-input-group>
    <b-input-group prepend="основной вид деятельности эмитента" class="mt-3">
      <b-form-textarea
        id="textarea-auto-height"
        placeholder="Auto height textarea"
        v-model="info.activity"
        style="margin: 0;"
      ></b-form-textarea>
      <!-- <b-form-input style="background: #fff;" readonly v-model="info.activity"></b-form-input> -->
    </b-input-group>

    <h4>2. Количество владельцев ценных бумах и работников эмитента.</h4>
    <b-row>
      <b-col cols="8">
        <b-input-group prepend="Количество владельцев" class="mt-3">
          <template v-slot:append>
            <b-input-group-text class="hide-print">
              <strong class="text-danger">!</strong>
            </b-input-group-text>
          </template>
          <b-form-input @blur="sendData" required v-model="info.owners"></b-form-input>
        </b-input-group>
        <b-input-group prepend="Количество работников" class="mt-3">
          <template v-slot:append>
            <b-input-group-text class="hide-print">
              <strong class="text-danger">!</strong>
            </b-input-group-text>
          </template>
          <b-form-input @blur="sendData" v-model="info.workers"></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>

    <h4>3. Список юридических лиц, в которых данный эмитент владеет 5 процентами и более уставного капитала.</h4>

    <table class="table table-bordered mt-4">
      <thead class="thead-light">
        <tr>
          <th width="5%">#</th>
          <th width="10%">Наименование юридического лица</th>
          <th width="10%">Организационно-правовая форма</th>
          <th
            width="10%"
          >Местонахождение, почтовый адрес,телефон,факс,адрес электронной почты и код ОКПО</th>
          <th width="10%">Доля участия в уставном капитале</th>
          <th width="15%" class="hide-print"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ index + 1 }}</td>
          <td>
            <span v-if="editIndex !== index">{{ item.code }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" @blur="sendData" v-model="item.code" />
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ item.name }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" @blur="sendData" v-model="item.name" />
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ item.description }}</span>
            <span v-if="editIndex === index">
              <input
                class="form-control form-control-sm"
                @blur="sendData"
                v-model="item.description"
              />
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ item.qty }}</span>
            <span v-if="editIndex === index">
              <input
                class="form-control form-control-sm"
                @blur="sendData"
                type="text"
                v-model="item.qty"
              />
            </span>
          </td>

          <td class="hide-print">
            <span v-if="editIndex !== index">
              <button
                @click="edit(item, index)"
                class="btn btn-sm btn-outline-secondary mr-2"
              >Изменить</button>
              <button
                @click="remove(item, index)"
                class="btn btn-sm btn-outline-secondary mr-2"
              >Удалить</button>
            </span>
            <span v-else>
              <button class="btn btn-sm btn-outline-secondary mr-2" @click="cancel(item)">Отменить</button>
              <button class="btn btn-sm btn-outline-secondary mr-2" @click="save(item)">Сохранить</button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="col-3 offset-9 text-right my-3 hide-print">
      <button v-show="!editIndex" @click="add" class="btn btn-sm btn-secondary">Добавить</button>
    </div>
    <h4>4. Информация о существенных фактах (далее - факт), затрагивающих деятельность эмитента ценных бумаг в отчетном периоде.</h4>

    <b-table-simple class="table table-bordered mt-4">
      <b-thead class="thead-light">
        <b-th>Наименование факта</b-th>
        <b-th>Дата появления факта</b-th>
        <b-th>Влиянии факта на деятельность</b-th>
        <b-th>Дата и форма раскрытия</b-th>
        <b-th class="hide-print"></b-th>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(item, index) in tblfactitems" :key="index">
          <b-td>
            <input class="text simpleCart_input"  type="text" @blur="sendData" v-model="tblfactitems[index].Name" />
          </b-td>
          <b-td>
            
            <input
              class="text simpleCart_input"
              type="text"
              @blur="sendData"
              v-model="tblfactitems[index].DateCreate"
            />
          </b-td>
          <b-td>
            <input
              class="text simpleCart_input"
              type="text"
              @blur="sendData"
              v-model="tblfactitems[index].Influence"
            />
          </b-td>
          <b-td>
            <input
              class="text simpleCart_input"
              type="text"
              @blur="sendData"
              v-model="tblfactitems[index].DateDisclosure"
            />
          </b-td>
          <b-td class="hide-print">
            <button
              @click="removeInFact(item, index)"
              class="btn btn-sm btn-outline-secondary mr-2"
            >Удалить</button>
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
    <div class="col-3 offset-9 text-right my-3 hide-print">
      <button @click="addFact" class="btn btn-sm btn-secondary">Добавить</button>
    </div>
    <h4>5. Финансовая отчетность эмитента за отчетный квартал</h4>

    <p>1) Сведения, включаемые в бухгалтерский баланс</p>
    <b-table
      bordered
      hover
      :items="tblbalanceitems"
      :fields="tblbalancefields"
      head-variant="light"
    >
      <template #cell(Start)="row">
        <span>
          <template v-if="row.item.Code==='050'">
            <input type="text" class="simpleCart_input" step="0.01" placeholder="0,00" readonly v-model="assets_Start" />
          </template>
          <template v-else-if="row.item.Code===''"></template>
          <template v-else-if="row.item.Code === '080'">
            <input type="text" class="simpleCart_input" step="0.01" placeholder="0,00" readonly v-model="liabilities_Start" />
          </template>
          <template v-else-if="row.item.Code === '100'">
            <input
              type="text"
              step="0.01"
              placeholder="0,00"
              readonly
              v-model="totaltblbalance_Start"
              class="simpleCart_input"
            />
          </template>
          <template v-else>
            <input
              type="text"
              step="0.01"
              placeholder="0,00"
              name="input"
              @blur="sendData"
              class="simpleCart_input"
              :value="row.item.Start"
              :id="'blncStart' + row.index"
              @change="sum('blncStart' + row.index, 'tblbalanceitems', row.index, 'Start')"
            />
          </template>
        </span>
      </template>
      <template #cell(End)="row">
        <span>
          <template v-if="row.item.Code==='050'">
            <input type="text" class="simpleCart_input" step="0.01" placeholder="0,00" readonly v-model="assets_End" />
          </template>

          <template v-else-if="row.item.Code===''"></template>
          <template v-else-if="row.item.Code === '080'">
            <input type="text" class="simpleCart_input" step="0.01" placeholder="0,00" readonly v-model="liabilities_End" />
          </template>
          <template v-else-if="row.item.Code === '100'">
            <input
              type="text"
              step="0.01"
              placeholder="0,00"
              readonly
              v-model="totaltblbalance_End"
              class="simpleCart_input"
            />
          </template>
          <template v-else>
            <input
              type="text"
              step="0.01"
              placeholder="0,00"
              @blur="sendData"
              :value="row.item.End"
              :id="'blncEnd' + row.index"
              class="simpleCart_input"
              @change="sum('blncEnd' + row.index, 'tblbalanceitems', row.index, 'End')"
            />
          </template>
        </span>
      </template>
    </b-table>

    <p>2) Сведения, включаемые в отчет о прибылях и убытках</p>
    <b-table bordered hover :items="tblprofititems" :fields="tblprofitfields" head-variant="light">
      <template #cell(Start)="row">
        <span>
          <template v-if="row.item.Code==='040'">
            <input
              type="text"
              step="0.01"
              placeholder="0,00"
              readonly
              v-model="operatingActivities_Start"
              class="simpleCart_input"
            />
          </template>
          <template v-else-if="row.item.Code==='060'">
            <input type="text" step="0.01" placeholder="0,00" class="simpleCart_input" readonly v-model="beforeTax_Start" />
          </template>
          <template v-else-if="row.item.Code==='080'">
            <input type="text" step="0.01" placeholder="0,00" class="simpleCart_input" readonly v-model="activities_Start" />
          </template>
          <template v-else-if="row.item.Code==='100'">
            <input type="text" step="0.01" placeholder="0,00" class="simpleCart_input" readonly v-model="netprofit_Start" />
          </template>
          <template v-else>
            <input
              type="text"
              step="0.01"
              placeholder="0,00"
              @blur="sendData"
              :value="row.item.Start"
              :id="'profitStart' + row.index"
              class="simpleCart_input"
              @change="sum('profitStart' + row.index, 'tblprofititems', row.index, 'Start')"
            />
          </template>
        </span>
      </template>
      <template #cell(End)="row">
        <span>
          <template v-if="row.item.Code==='040'">
            <input
              type="text"
              step="0.01"
              placeholder="0,00"
              readonly
              class="simpleCart_input"
              v-model="operatingActivities_End"
            />
          </template>
          <template v-else-if="row.item.Code==='060'">
            <input type="text" step="0.01" placeholder="0,00" class="simpleCart_input" readonly v-model="beforeTax_End" />
          </template>
          <template v-else-if="row.item.Code==='080'">
            <input type="text" step="0.01" placeholder="0,00" class="simpleCart_input" readonly v-model="activities_End" />
          </template>
          <template v-else-if="row.item.Code==='100'">
            <input type="text" step="0.01" placeholder="0,00" class="simpleCart_input" readonly v-model="netprofit_End" />
          </template>
          <template v-else>
            <input
              type="text"
              step="0.01"
              placeholder="0,00"
              @blur="sendData"
              :value="row.item.End"
              :id="'profitEnd' + row.index"
              class="simpleCart_input"
              @change="sum('profitEnd' + row.index, 'tblprofititems', row.index, 'End')"
            />
          </template>
        </span>
      </template>
    </b-table>

    <p>3) Сведения, включаемые в отчет об изменениях в капитале</p>
    <b-table
      bordered
      hover
      :items="tblcapitalitems"
      :fields="tblcapitalfields"
      head-variant="light"
    >
      <template #cell(TItle)="row">
        <template v-if="row.item.Code==='100' || row.item.Code==='010'">
          <label>Сальдо на</label>
          
           <input
              type="text"
              @blur="sendData"
              v-model="row.item.TItle"
              class="simpleCart_input saldo_na"
            />
        </template>
        <template v-else>
          <span>{{row.item.TItle}}</span>
        </template>
      </template>
      <template #cell(Start)="row">
        <span>
          <input
            type="text"
            step="0.01"
            placeholder="0,00"
            @blur="sendData"
            :value="row.item.Start"
            :id="'capitalStart' + row.index"
            class="simpleCart_input"
            @change="sum('capitalStart' + row.index, 'tblcapitalitems', row.index, 'Start')"
          />
        </span>
      </template>
      <template #cell(End)="row">
        <span>
          <input
            type="text"
            step="0.01"
            placeholder="0,00"
            @blur="sendData"
            :value="row.item.End"
            :id="'capitalEnd' + row.index"
            class="simpleCart_input"
            @change="sum('capitalEnd' + row.index, 'tblcapitalitems', row.index, 'End')"
          />
        </span>
      </template>
    </b-table>

    <b-row>
      <b-col sm="12">
        <p>6. Сведения о направлении средств, привлеченных эмитентом в результате размещения эмиссионных ценных бумаг, которые включают в себя: общий объем привлеченных средств, сведения о привлеченных средствах, использованных по каждому из направлений, и о направлениях использования привлеченных средств.</p>
        <b-form-textarea id="textarea-rows" class="simpleCart_text" rows="2" v-model="textareas.placement" @blur="sendData"></b-form-textarea>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12">
        <p>7. Заемные средства, полученные эмитентом и его дочерними обществами в отчетном квартале. Данный пункт отражает заемные средства, полученные эмитентом в отчетном квартале, и заемные средства, полученные дочерними обществами в отчетном квартале.</p>
        <b-form-textarea id="textarea-rows" class="simpleCart_text" rows="2" v-model="textareas.funds" @blur="sendData"></b-form-textarea>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12">
        <p>8. Сведения о долгосрочных и краткосрочных финансовых вложениях эмитента за отчетный квартал.</p>
        <b-form-textarea
          id="textarea-rows"
          rows="2"
          v-model="textareas.investment"
          @blur="sendData"
          class="simpleCart_text"
        ></b-form-textarea>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12">
        <p>9. Доходы по ценным бумагам эмитента. Эта информация представляется при начислении доходов по ценным бумагам эмитента в отчетном квартале или в квартале, предшествующем отчетному кварталу, и включает: вид ценной бумаги, размер доходов, начисленных на одну ценную бумагу,и общую сумму доходов, начисленных по ценным бумагам данного вида.</p>
        <b-form-textarea id="textarea-rows" class="simpleCart_text" rows="2" v-model="textareas.income" @blur="sendData"></b-form-textarea>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12">
        <p>10. Информация об условиях и характере сделки, совершенной лицами, заинтересованными в совершении обществом сделки, включает: дату совершения сделки, информацию о влиянии сделки на деятельность эмитента (финансовый результат, дополнительные инвестиции и т.д.), информацию об условиях и характере заключенной сделки (предмет, условия, цена сделки и т.д.), степень имеющейся заинтересованности (лица, заинтересованного в сделке), дату опубликования информации о сделке в средствах массовой информации (прилагается копия опубликованного сообщения), а также дату направления уведомления с информацией о сделке в уполномоченный орган по регулированию рынка ценных бумаг.</p>
        <b-form-textarea id="textarea-rows" class="simpleCart_text" rows="2" v-model="textareas.deal" @blur="sendData"></b-form-textarea>
      </b-col>
    </b-row>
    <b-row v-if="auditView">
      <b-col sm="12">
        <p>11. Аудиторское заключение</p>
        <b-form-textarea id="textarea-rows" class="simpleCart_text" rows="2" v-model="textareas.audit" @blur="sendData"></b-form-textarea>
      </b-col>
    </b-row>
    <Supervisor />
  </div>
</template>


<script>
import Queries from '../services/report.service'; // axios запросы на бэк энд
import tables from '../mixins/tables.js';
export default {
  name: 'ReportComponent',
  mixins: [tables],
  created() {
    this.getInfoCompany(), this.setinfo(), this.Text();
  },
  data() {
    return {
      result: [],
      status: null,
      props: ['input']
    };
  },
  components: {
    Supervisor: () => import('../components/Supervisor.vue')
  },
  methods: {
    test() {
      if (/*localStorage.getItem('role') == 'admin' || */this.status == 2 || this.status == 3) {
          let $input = document.querySelectorAll('.simpleCart_input');
          let textarea = document.querySelectorAll('.simpleCart_text')
          for (let i = 0; i < $input.length; i++) {
            let $p = document.createElement('p');
            //let $p = document.createElement('plaintext');
            //$input[i].value = $input[i].value.replace(/\n/g, '<br>');
            $p.innerHTML = $input[i].value;
            $p.classList.add("text-center")

            $input[i].parentNode.replaceChild($p, $input[i]);
          }

          for (let i = 0; i < textarea.length; i++) {
            let $p = document.createElement('p');
            $p.innerHTML = textarea[i].value;

            textarea[i].parentNode.replaceChild($p, textarea[i]);
          }
      }
    },
    getInfoCompany() {
      return Queries.getInfoCompanyById()
        .then(response => {
          this.info = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    sendData() {
      this.$emit('input', {
        typedoc: this.selected,
        reportHead: this.info,
        tblOwners: this.items,
        tblfact: this.tblfactitems,
        tblBalance: this.tblbalanceitems,
        tblProfit: this.tblprofititems,
        tblCapital: this.tblcapitalitems,
        reportFooter: this.textareas,
        kvartal: this.year + '; ' + this.kvartal
      });
    },
    setinfo() {
      return Queries.getReportById(this.$route.params.idreport)
        .then(response => {
          //let xmldoc = JSON.parse(response.data.xmldoc)
          this.tblfactitems = response.data.doc.tblfact;
          this.result = response.data.doc;
          this.info = response.data.doc.reportHead;
          this.items = response.data.doc.tblOwners;
          this.tblbalanceitems = response.data.doc.tblBalance;
          this.tblprofititems = response.data.doc.tblProfit;
          this.tblcapitalitems = response.data.doc.tblCapital;
          this.textareas = response.data.doc.reportFooter;
          this.status = response.data.status;
          this.selected = response.data.typedoc;
          let titleKvartal = response.data.kvartal.split(';');
          this.year = titleKvartal[0];
          this.kvartal = titleKvartal[1].slice(1);
          this.$nextTick(function () {
            this.test()
          })
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    sum(num, item, index, elem) {
      let input = document.getElementById(num);
      let sum = input.value.replace(/\s/g, '');
      let val = Number(sum.replace(/,/, '.')).toLocaleString('ru');
      //console.log(this.item)
      if (item == 'tblbalanceitems') this.tblbalanceitems[index][elem] = val;
      else if (item == 'tblprofititems') this.tblprofititems[index][elem] = val;
      else this.tblcapitalitems[index][elem] = val;
      return (input.value = val);
    },

    Text() {
      if (this.status != 0) {
        
        let input = document.querySelectorAll('.text');
          for (let i = 0; i < input.length; i++) {
            let span = document.createElement('span');
            span.innerHTML = input[i].value;
            input[i].parentNode.replaceChild(span, input[i]);
            
            console.log(input[i].value)
          }
          console.log('sdsd',input)
        }
    }
  },
  computed: {
    EditReport() {
      if (
        this.status == 2 ||
        this.status == 3 ||
        localStorage.getItem('role') == 'admin'
      ) {
        
        return false;
      }
      
      return true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

h4 {
  margin: 30px 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
textarea {
  margin: 10px 0;
  font-size: 1.03rem;
}
table input {
  text-align: center;
}
table {
  text-align: center;
}

.reportcomponent {
  position: relative;
}

.active {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 20;
  top: 0;
}
.saldo_na{
  margin-left: 10px;
}
</style>

<style >
.table-transparent {
  width: 40% !important;
}
@media print {
  #app {
    display: block !important;
  }

  input {
    border: none;
  }

  .hide-print {
    display: none;
  }
}
</style>