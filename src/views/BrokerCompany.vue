<template>
 <div class="formaBroker">
      <div class="forma3bd1">
            <h4>
            Форма 3 БД-1
            </h4>
            <b-table
            bordered
            hover
            :items="forma3BD1"
            :fields="tblforma3BD1fields"
            head-variant="light"
            >
            <template #cell(title)="row">
                <input type="text" v-model="row.item.title" />
            </template>
            <template #cell(title22)="row">
                <input type="text" v-model="row.item.title22" />
            </template>
            <template #cell(title3)="row">
                <input type="text" v-model="row.item.title3" />
            </template>
            <template #cell(title4)="row">
                <input type="text" v-model="row.item.title4" />
            </template>
            <template #cell(title5)="row">
                <input type="text" v-model="row.item.title5" />
            </template>
            <template #cell(title6)="row">
                <input type="text" v-model="row.item.title6" />
            </template>
            <template #cell(title7)="row">
                <input type="text" v-model="row.item.title7" />
            </template>
            <template #cell(title8)="row">
                <input type="text" v-model="row.item.title8" />
            </template>
            </b-table>
        </div>

        <div class="forma4">
            <h4><b>Структура
                финансовых вложений
      </b></h4>
      <b-table-simple hover bordered small stacked>
        <thead>
          <tr>
            <th
              v-for="(item, index) in form4BD2.head"
              :key="index"
              :rowspan="item.rowspan"
              :colspan="item.colspan"
            >{{item.text}}</th>
          </tr>
          <tr>
            <th v-for="(item, index) in form4BD2.head2" :key="index">{{item}}</th>
            <th v-for="(item, index) in form4BD2.head3" :key="index">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <b-td>
              Акции акционерных обществ, допущенные к торгам через организаторов торговли на рынке ценных бумаг              
            </b-td>
             <td v-for="n in form4BD2.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
          <tr>
            <td>1.1</td>
            <b-td>
              Итого по разделу 1
            </b-td>
            <td v-for="n in form4BD2.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
          <tr>
            <td>2</td>
            <b-td>
              Государственные ценные бумаги, ценные бумаги субъектов Кыргызской Республики и муниципальных образований, а также приравненные к ним ценные бумаги
            </b-td>
            <td v-for="n in form4BD2.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
          <tr>
            <td>2.1</td>
            <b-td>
              Итого по разделу 2
            </b-td>
            <td v-for="n in form4BD2.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
          <tr>
            <td>3</td>
            <b-td>
              Эмиссионные ценные бумаги, не допущенные к торгам через организаторов торговли на рынке ценных бумаг
            </b-td>
            <td v-for="n in form4BD2.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
          <tr>
            <td>3.1</td>
            <b-td>
              Итого по разделу 3
            </b-td>
            <td v-for="n in form4BD2.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
          <tr>
            <td>4</td>
            <b-td>
              Не эмиссионные ценные бумаги
            </b-td>
            <td v-for="n in form4BD2.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
          <tr>
            <td>4.1</td>
            <b-td>
              Итого по разделу 4
            </b-td>
            <td v-for="n in form4BD2.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
          <tr>
            <td>5</td>
            <b-td>
              Прочие финансовые вложения (указывается вид финансового вложения) 
            </b-td>
            <td v-for="n in form4BD2.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
          <tr>
            <td>5.1</td>
            <b-td>
              Итого по разделу 5 
            </b-td>
            <td v-for="n in form4BD2.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
          <tr>
            <td></td>
            <b-td>
              Итого по разделам 1, 2, 3, 4, 5 
            </b-td>
            <td v-for="n in form4BD2.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
        </tbody>
      </b-table-simple>
        </div>

        <div class="forma5">
            <h4><b>Сведения
                о сделках с ценными бумагами
      </b></h4>
      <b-table-simple hover bordered small stacked>
        <thead>
          <tr>
            <th
              v-for="(item, index) in form5BD3.head"
              :key="index"
              :rowspan="item.rowspan"
              :colspan="item.colspan"
            >{{item.text}}</th>
          </tr>
          <tr>
            <th v-for="(item, index) in form5BD3.head2" :key="index">{{item}}</th>
            <th v-for="(item, index) in form5BD3.head3" :key="index">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <b-td>
              Совершенные сделки всего:              
            </b-td>
             <td v-for="n in form5BD3.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
          <tr>
            <td></td>
            <b-td>
              в том числе по месту совершения сделок
            </b-td>
            <td v-for="n in form5BD3.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
          <tr>
            <td>2</td>
            <b-td>
              Сделки с акциями акционерных обществ, допущенными к торгам через организаторов торговли на рынке ценных бумаг всего:
            </b-td>
            <td v-for="n in form5BD3.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
          <tr>
            <td></td>
            <b-td>
              в том числе с нерезидентами
            </b-td>
            <td v-for="n in form5BD3.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
          <tr>
            <td>3</td>
            <b-td>
              Прочие сделки в том числе по видам договоров
            </b-td>
            <td v-for="n in form5BD3.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
          <tr>
            <td>4</td>
            <b-td>
              Сделки, совершенные от своего имени и за свой счет
            </b-td>
            <td v-for="n in form5BD3.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
          <tr>
            <td>5</td>
            <b-td>
              Сделки, совершенные во исполнение договора на брокерское обслуживание на рынке ценных бумаг
            </b-td>
            <td v-for="n in form5BD3.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
          <tr>
            <td>6</td>
            <b-td>
              Сделки, заключенные по прочим договорам, в том числе по видам ценных бумаг
            </b-td>
            <td v-for="n in form5BD3.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
          <tr>
            <td>7</td>
            <b-td>
              Сделки с государственными ценными бумагами Кыргызской Республики всего: 
            </b-td>
            <td v-for="n in form5BD3.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
          <tr>
            <td></td>
            <b-td>
              в том числе с нерезидентами 
            </b-td>
            <td v-for="n in form5BD3.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
          <tr>
            <td>8</td>
            <b-td>
              Сделки с ценными бумагами субъектов Кыргызской Республики и муниципальных образований всего:
            </b-td>
            <td v-for="n in form5BD3.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
          <tr>
            <td></td>
            <b-td>
              в том числе с нерезидентами
            </b-td>
            <td v-for="n in form5BD3.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
          <tr>
            <td>9</td>
            <b-td>
              Сделки с прочими ценными бумагами всего:
            </b-td>
            <td v-for="n in form5BD3.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
          <tr>
            <td></td>
            <b-td>
              в том числе с нерезидентами
            </b-td>
            <td v-for="n in form5BD3.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
        </tbody>
      </b-table-simple>
        </div>

      <div class="forma6">
        <h4><b>Сведения
          об осуществлении брокерской деятельности
        </b></h4>
      <b-table-simple hover bordered small stacked>
        <thead>
          <tr>
            <th
              v-for="(item, index) in form6B1.head"
              :key="index"
              :rowspan="item.rowspan"
            >{{item.text}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <b-td>
              Количество открытых аналитических счетов в системе внутреннего учета всего, в том числе:              
            </b-td>
             <td v-for="n in form6B1.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
          <tr>
            <td>1</td>
              <b-td>- физическим лицам</b-td>
                <td v-for="n in form6B1.body.count" :key="n">
                  <input type="text" class="input"/>
                </td>
          </tr>
          <tr>  
            <td>2</td>
              <b-td>- юридическим лицам</b-td>
                <td v-for="n in form6B1.body.count" :key="n">
                  <input type="text" class="input"/>
                </td>
          </tr>
          <tr>
            <td>3</td>
              <b-td>- резидентам</b-td>
                <td v-for="n in form6B1.body.count" :key="n">
                  <input type="text" class="input"/>
                </td>
          </tr>
          <tr>
            <td>4</td>
              <b-td>- нерезидентам</b-td>
                <td v-for="n in form6B1.body.count" :key="n">
                  <input type="text" class="input"/>
                </td>
          </tr>
        </tbody>
      </b-table-simple>
      </div>

      <div class="forma7">
        <h4><b>Сведения
            об осуществлении деятельности по доверительному управлению инвестиционными активами
        </b></h4>
      <b-table-simple hover bordered small stacked>
        <thead>
          <tr>
            <th
              v-for="(item, index) in form7DU1.head"
              :key="index"
              :rowspan="item.rowspan"
            >{{item.text}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <b-td>
              Количество договоров на управление ценными бумагами - всего:              
            </b-td>
             <td v-for="n in form7DU1.body.count" :key="n">
              <input type="text" class="input"/>
            </td> 
          </tr>
          <tr>
            <td>1</td>
              <b-td>- с физическими лицами</b-td>
                <td v-for="n in form7DU1.body.count" :key="n">
                  <input type="text" class="input"/>
                </td>
          </tr>
          <tr>  
            <td>2</td>
              <b-td>- с юридическими лицами</b-td>
                <td v-for="n in form7DU1.body.count" :key="n">
                  <input type="text" class="input"/>
                </td>
          </tr>
          <tr>
            <td>3</td>
              <b-td>- с резидентами</b-td>
                <td v-for="n in form7DU1.body.count" :key="n">
                  <input type="text" class="input"/>
                </td>
          </tr>
          <tr>
            <td>4</td>
              <b-td>- с нерезидентами</b-td>
                <td v-for="n in form7DU1.body.count" :key="n">
                  <input type="text" class="input"/>
                </td>
          </tr>
        </tbody>
      </b-table-simple>
      </div>

      <div class="forma8">
        <h4><b>Показатели, характеризующие финансовое состояние организации
        </b></h4>
      <b-table-simple hover bordered small stacked>
        <thead>
          <tr>
            <th
              v-for="(item, index) in form12PD4.head"
              :key="index"
              :rowspan="item.rowspan"
            >{{item.text}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
              <b-td>К1 (собственный капитал)</b-td>
                <td v-for="n in form12PD4.body.count" :key="n">
                  <input type="text" class="input"/>
                </td>
          </tr>
          <tr>  
            <td>2</td>
              <b-td>К2 (отношение привлеченных средств к собственному капиталу)</b-td>
                <td v-for="n in form12PD4.body.count" :key="n">
                  <input type="text" class="input"/>
                </td>
          </tr>
          <tr>
            <td>3</td>
              <b-td>К3 (эффективность деятельности организации)</b-td>
                <td v-for="n in form12PD4.body.count" :key="n">
                  <input type="text" class="input"/>
                </td>
          </tr>
          <tr>
            <td>4</td>
              <b-td>К5 (совокупные обязательства)</b-td>
                <td v-for="n in form12PD4.body.count" :key="n">
                  <input type="text" class="input"/>
                </td>
          </tr>
        </tbody>
      </b-table-simple>
      </div>

      <div class="forma9">
        <h4><b>Расчет
              нормативов достаточности собственных средств
        </b></h4>
      <b-table-simple hover bordered small stacked>
        <thead>
          <tr>
            <th
              v-for="(item, index) in form12PD4.head"
              :key="index"
              :rowspan="item.rowspan"
            >{{item.text}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
              <b-td>Уставный капитал</b-td>
              <b-td>15000-250000 расчетных показателей</b-td>
          </tr>
          <tr>  
            <td>2</td>
              <b-td>Коэффициент текущей ликвидности</b-td>
              <b-td>не менее 0,5</b-td>
          </tr>
          <tr>
            <td>3</td>
              <b-td>Коэффициент достаточности собственных средств</b-td>
              <b-td>не менее 1</b-td>
          </tr>
        </tbody>
      </b-table-simple>
      </div>

      <div class="forma10">
        <h4><b>Информация
            о совершении операции с 5% и более с одним видом ценных бумаг одного эмитента
        </b></h4>
      <b-table-simple hover bordered small stacked>
        <thead>
          <tr>
            <!-- <th v-for="(item, index) in form13PD5.head" :key="index"></th> -->
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
              <b-td>Наименование эмитента</b-td>
              <td v-for="n in form13PD5.body.count" :key="n">
                <input type="text" class="input">
              </td>
          </tr>
          <tr>  
            <td>2</td>
              <b-td>Дата исполнения операции</b-td>
              <td v-for="n in form13PD5.body.count" :key="n">
                <input type="text" class="input">
              </td>
          </tr>
          <tr>
            <td>3</td>
              <b-td>Тип операции</b-td>
              <td v-for="n in form13PD5.body.count" :key="n">
                <input type="text" class="input">
              </td>
          </tr>
          <tr>
            <td>4</td>
              <b-td>Вид ценных бумаг</b-td>
              <td v-for="n in form13PD5.body.count" :key="n">
                <input type="text" class="input">
              </td>
          </tr>
          <tr>
            <td>5</td>
              <b-td>Государственный регистрационный номер ценных бумаг</b-td>
              <td v-for="n in form13PD5.body.count" :key="n">
                <input type="text" class="input">
              </td>
          </tr>
          <tr>
            <td>6</td>
              <b-td>Количество ценных бумаг</b-td>
              <td v-for="n in form13PD5.body.count" :key="n">
                <input type="text" class="input">
              </td>
          </tr>
          <tr>
            <td>7</td>
              <b-td>Лицо, передающее ценные бумаги</b-td>
              <td v-for="n in form13PD5.body.count" :key="n">
                <input type="text" class="input">
              </td>
          </tr>
          <tr>
            <td>8</td>
              <b-td>Лицо, принимающее ценные бумаги</b-td>
              <td v-for="n in form13PD5.body.count" :key="n">
                <input type="text" class="input">
              </td>
          </tr>
          <tr>
            <td>9</td>
              <b-td>Стоимость 1 ценной бумаги/общая стоимость (сом.)</b-td>
              <td v-for="n in form13PD5.body.count" :key="n">
                <input type="text" class="input">
              </td>
          </tr>
          <tr>
            <td>10</td>
              <b-td>Доля операции в уставном капитале (%)</b-td>
              <td v-for="n in form13PD5.body.count" :key="n">
                <input type="text" class="input">
              </td>
          </tr>
        </tbody>
      </b-table-simple>
      </div>
      {{arr}}
    <button class="btn btn-primary btn-block hide-print" @click="save">
        <span>Сохранить</span>
      </button>
    </div>
</template>  

<script>
import brokercompany from '../mixins/brokercompany';
export default {
  name: 'BrokerCompany.vue',
  mixins: [brokercompany],
  data() {
    return {
        forma3BD1: [
        {title1: '1', title2: 'Дебиторская задолженность всего:', title3: '', title4: '', title5: '', title6: '', title7: '', title8: ''},
        {title1: '2', title2: 'в том числе:- пролонгированная', title3: '', title4: '', title5: '', title6: '', title7: '', title8: ''},
        {title1: '3', title2: 'просроченная', title3: '', title4: '', title5: '', title6: '', title7: '', title8: ''},
        {title1: '4', title2: 'Дебиторская задолженность контрагентов по договорам купли-продажи ценных бумаг, заключенным организацией от своего имени и за свой счет', title3: '', title4: '', title5: '', title6: '', title7: '', title8: ''},
        {title1: '5', title2: 'Дебиторская задолженность клиентов всего::', title3: '', title4: '', title5: '', title6: '', title7: '', title8: ''},
        {title1: '6', title2: 'в том числе по договорам с физическими лицами', title3: '', title4: '', title5: '', title6: '', title7: '', title8: ''},
        {title1: '7', title2: 'Кредиторская задолженность всего:', title3: '', title4: '', title5: '', title6: '', title7: '', title8: ''},
        {title1: '8', title2: 'в том числе:- пролонгированная;', title3: '', title4: '', title5: '', title6: '', title7: '', title8: ''},
        {title1: '9', title2: 'просроченная', title3: '', title4: '', title5: '', title6: '', title7: '', title8: ''},
        {title1: '10', title2: 'Кредиторская задолженность перед контрагентами по договорам купли-продажи ценных бумаг, заключенным организацией от своего имени и за свой счет', title3: '', title4: '', title5: '', title6: '', title7: '', title8: ''},
        {title1: '11', title2: 'Кредиторская задолженность перед клиентами', title3: '', title4: '', title5: '', title6: '', title7: '', title8: ''},
        {title1: '12', title2: 'в том числе по договорам с физическими лицами', title3: '', title4: '', title5: '', title6: '', title7: '', title8: ''},
      ],
    }
  },
};
</script>
<style>
h4 {
  text-align: center;
  padding: 10px;
}
</style>   