<template>
  <div class="anex-1">
    <template v-if="!EditReport">
      <div class="anex1-block"></div>
    </template>
    <div class="col-3 offset-9 text-right my-3 hide-print" style="z-index: 40;">
      <b-button class="print hide-print" onclick="window.print()">Печать</b-button>
    </div>
    <div class="col-5 offset-7 text-right my-3">
      <b-col sm="12">
        <h5 class="d-inline">Приложение 1</h5>
      </b-col>

      <br />
      <b-col sm="12">
        <p class="d-inline">к Положению о порядке</p>
      </b-col>
      <b-col sm="12">
        <p class="d-inline">представления отчетности</p>
      </b-col>
      <b-col sm="12">
        <p class="d-inline">(информации) и раскрытии</p>
      </b-col>
      <b-col sm="12">
        <p class="d-inline">информации субъектами</p>
      </b-col>
      <b-col sm="12">
        <p class="d-inline">финансового рынка</p>
      </b-col>
    </div>
    <b-col sm="12" class="d-print-none" v-show="EditReport">
      <h4>Выберите квартал и год:</h4>
      <b-form-select v-model="kvartal" class="mb-3 col-3 d-inline">
        <b-form-select-option value="1 квартал">Квартал 1</b-form-select-option>
        <b-form-select-option value="2 квартал">Квартал 2</b-form-select-option>
        <b-form-select-option value="3 квартал">Квартал 3</b-form-select-option>
        <b-form-select-option value="4 квартал">Квартал 4</b-form-select-option>
      </b-form-select>
      <b-form-select v-model="year" class="mb-3 offset-1 col-3 d-inline">
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

    <h4>1. Данные о регулируемом субъекте финансового рынка:</h4>
    <b-input-group
      prepend="полное и сокращенное наименование регулируемого субъекта финансового рынка"
      class="mt-3"
    >
      <template v-slot:append>
        <b-input-group-text class="hide-print">
          <strong class="text-danger">!</strong>
        </b-input-group-text>
      </template>
      <b-form-input name="inputs" style="background: #fff;" readonly v-model="info.name"></b-form-input>
    </b-input-group>
    <b-input-group prepend="организационно-правовая форма" class="mt-3">
      <template v-slot:append>
        <b-input-group-text class="hide-print">
          <strong class="text-danger">!</strong>
        </b-input-group-text>
      </template>
      <b-form-input name="inputs" style="background: #fff;" readonly v-model="info.opforma"></b-form-input>
    </b-input-group>
    <b-input-group prepend="юридический и почтовый адрес, номер телефона и телефакса" class="mt-3">
      <template v-slot:append>
        <b-input-group-text class="hide-print">
          <strong class="text-danger">!</strong>
        </b-input-group-text>
      </template>
      <b-form-input name="inputs" style="background: #fff;" readonly v-model="info.address"></b-form-input>
    </b-input-group>
    <b-input-group prepend="основной вид деятельности" class="mt-3">
      <template v-slot:append>
        <b-input-group-text class="hide-print">
          <strong class="text-danger">!</strong>
        </b-input-group-text>
      </template>
      <b-form-input name="inputs" style="background: #fff;" readonly v-model="info.activity"></b-form-input>
    </b-input-group>

    <h4>2.Список всех членов исполнительного органа регулируемого субъекта финансового рынка</h4>
    
    <b-table-simple hover bordered small stacked>
      <b-thead>
        <tr>
          <th rowspan="2">ФИО члена наблюдательного органа</th>
          <th colspan="2">Занимаемые должности в настоящее время</th>
          <th rowspan="2">Количество принадлежащих ему ценных бумаг</th>
          <th rowspan="2">Доля в уставном капитале регулируемого субъекта финансового рынка (в %)</th>
          <th
            rowspan="2"
          >Занимаемая должность вне органов управления регулируемого субъекта финансового рынка за последние 5 лет</th>
          <th rowspan="2">Ранее занимаемые руководящие должности в юридических лицах</th>
          <th rowspan="2">Размер участия в уставном капитале дочернего и зависимого общества</th>
          <th
            rowspan="2"
          >Список юридических лиц, в которых руководители владеют 5% и более уставного капитала</th>
          <th rowspan="2">Список аффилированных лиц</th>
        </tr>
        <tr>
          <th>в органах управления</th>
          <th>вне органов управления</th>
        </tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(item, index) in table_2_items" :key="index">
          <b-td v-for="(it, ix) in item" :key="ix">
            <b-input type="text" name="inputs" class="simpleCart_input" v-model="item[ix]"></b-input>
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>

    <div class="col-3 offset-9 text-right my-3 hide-print">
      <button @click="addItem2" class="btn btn-sm btn-secondary">Добавить</button>
    </div>
    <h4>3. Список всех членов совета директоров регулируемого субъекта финансового рынка</h4>
    <b-table-simple hover bordered small stacked>
      <b-thead>
        <tr>
          <th rowspan="2">ФИО члена наблюдательного органа</th>
          <th colspan="2">Занимаемые должности в настоящее время</th>
          <th rowspan="2">Количество принадлежащих ему ценных бумаг</th>
          <th
            rowspan="2"
          >Доля в уставном капитале регулируемого субъекта финансового рынка за последние 5 лет (в %)</th>
          <th
            rowspan="2"
          >Занимаемая должность вне органов управления регулируемого субъекта финансового рынка</th>
          <th rowspan="2">Ранее занимаемые руководящие должности в юридических лицах</th>
          <th rowspan="2">Размер участия в уставном капитале дочернего и зависимого общества</th>
          <th
            rowspan="2"
          >Список юридических лиц, в которых руководители владеют 5% и более уставного капитала</th>
          <th rowspan="2">Список аффилированных лиц</th>
        </tr>
        <tr>
          <th>в органах управления</th>
          <th>вне органов управления</th>
        </tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(item, index) in table_3_items" :key="index">
          <b-td v-for="(it, ix) in item" :key="ix">
            <b-input type="text" name="inputs" class="simpleCart_input" v-model="item[ix]"></b-input>
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>

    <div class="col-3 offset-9 text-right my-3 hide-print">
      <button @click="addItem3" class="btn btn-sm btn-secondary">Добавить</button>
    </div>
    <h4>4. Список всех членов ревизионного органа регулируемого субъекта финансового рынка</h4>
    <b-table-simple hover bordered small stacked>
      <b-thead>
        <tr>
          <th rowspan="2">ФИО члена наблюдательного органа</th>
          <th colspan="2">Занимаемые должности в настоящее время</th>
          <th rowspan="2">Количество принадлежащих ему ценных бумаг</th>
          <th rowspan="2">Доля в уставном капитале регулируемого субъекта финансового рынка (в %)</th>
          <th
            rowspan="2"
          >Занимаемая должность вне органов управления регулируемого субъекта финансового рынка за последние 5 лет</th>
          <th rowspan="2">Ранее занимаемые руководящие должности в юридических лицах</th>
          <th rowspan="2">Размер участия в уставном капитале дочернего и зависимого общества</th>
          <th
            rowspan="2"
          >Список юридических лиц, в которых руководители владеют 5% и более уставного капитала</th>
          <th rowspan="2">Список аффилированных лиц</th>
        </tr>
        <tr>
          <th>в органах управления</th>
          <th>вне органов управления</th>
        </tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(item, index) in table_4_items" :key="index">
          <b-td v-for="(it, ix) in item" :key="ix">
            <b-input type="text" name="inputs" class="simpleCart_input" v-model="item[ix]"></b-input>
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
    <div class="col-3 offset-9 text-right my-3 hide-print">
      <button @click="addItem4" class="btn btn-sm btn-secondary">Добавить</button>
    </div>
    <h4>5.Сведения о вознаграждении должностных лиц</h4>
    <!-- table_5 -->
    <b-table-simple bordered hover :fields="table_5_fields" head-variant="light">
      <b-thead>
        <b-tr>
          <b-th v-for="(item, index) in table_5_fields" :key="index">{{item}}</b-th>
        </b-tr>
      </b-thead>
      <tbody>
        <b-tr v-for="(item, index) in table_5_items" :key="index">
          <b-td v-for="(it, ix) in item" :key="ix">
            <b-input type="text" name="inputs" class="simpleCart_input" v-model="item[ix]"></b-input>
          </b-td>
        </b-tr>
      </tbody>
    </b-table-simple>
    <div class="col-3 offset-9 text-right my-3 hide-print">
      <button @click="addItem5" class="btn btn-sm btn-secondary">Добавить</button>
    </div>
    <h4>
      6. Сведения о привлечении руководящих лиц к ответственности за совершение нарушения, проступка и
      к уголовной ответственности. Сведения о привлечении руководящих лиц к уголовной ответственности за
      экономические преступления, проступки и нарушения, которые на конец отчетного периода не погашены.
    </h4>
    <!-- table_6 -->
    <b-table-simple bordered hover head-variant="light">
      <b-thead>
        <b-tr>
          <b-th v-for="(item, index) in table_6_fields" :key="index">{{item}}</b-th>
        </b-tr>
      </b-thead>
      <tbody>
        <b-tr v-for="(item, index) in table_6_items" :key="index">
          <b-td v-for="(it, ix) in item" :key="ix">
            <b-input type="text" name="inputs" class="simpleCart_input" v-model="item[ix]"></b-input>
          </b-td>
        </b-tr>
      </tbody>
    </b-table-simple>
    <div class="col-3 offset-9 text-right my-3 hide-print">
      <button @click="addItem6" class="btn btn-sm btn-secondary">Добавить</button>
    </div>
    <h4>7. Количество владельцев долей/ценных бумаг и работников общества</h4>
    <!-- table_7 -->
    <b-table-simple bordered hover head-variant="light">
      <b-thead>
        <b-tr>
          <b-th v-for="(item, index) in table_7_fields" :key="index">{{item}}</b-th>
        </b-tr>
      </b-thead>
      <tbody>
        <b-tr v-for="(item, index) in table_7_items" :key="index">
          <b-td v-for="(it, ix) in item" :key="ix">
            <b-input type="text" name="inputs" class="simpleCart_input" v-model="item[ix]"></b-input>
          </b-td>
        </b-tr>
      </tbody>
    </b-table-simple>
    <div class="col-3 offset-9 text-right my-3 hide-print">
      <button @click="addItem7" class="btn btn-sm btn-secondary">Добавить</button>
    </div>
    <h4>8. Список иностранных владельцев долей/ценных бумаг</h4>
    <!-- table_8 -->
    <b-table-simple bordered hover head-variant="light">
      <b-thead>
        <b-tr>
          <b-th v-for="(item, index) in table_8_fields" :key="index">{{item}}</b-th>
        </b-tr>
      </b-thead>
      <tbody>
        <b-tr>
          <b-td v-for="(item, index) in table_8_items" :key="index">
            <b-input
              type="text"
              name="inputs"
              class="simpleCart_input"
              v-model="table_8_items[index]"
            ></b-input>
          </b-td>
        </b-tr>
      </tbody>
    </b-table-simple>
    <h4>9. Сведения о депозитарии ипотечного покрытия</h4>
    <!-- table_9 -->
    <b-table-simple bordered hover head-variant="light">
      <b-thead>
        <b-tr>
          <b-th v-for="(item, index) in table_9_fields" :key="index">{{item}}</b-th>
        </b-tr>
      </b-thead>
      <tbody>
        <b-tr>
          <b-td v-for="(item, index) in table_9_items" :key="index">
            <b-input
              type="text"
              name="inputs"
              class="simpleCart_input"
              v-model="table_9_items[index]"
            ></b-input>
          </b-td>
        </b-tr>
      </tbody>
    </b-table-simple>
    <h4>10. Список всех владельцев долей/ценных бумаг регулируемого субъекта финансового рынка, которые владеют не менее 5 процентами от общего количества долей/ценных бумаг</h4>
    <!-- table_10 -->
    <b-table-simple bordered hover head-variant="light">
      <b-thead>
        <b-tr>
          <b-th v-for="(item, index) in table_10_fields" :key="index">{{item}}</b-th>
        </b-tr>
      </b-thead>
      <tbody>
        <b-tr v-for="(item, index) in table_10_items" :key="index">
          <b-td v-for="(it, ix) in item" :key="ix">
            <b-input type="text" name="inputs" class="simpleCart_input" v-model="item[ix]"></b-input>
          </b-td>
        </b-tr>
      </tbody>
    </b-table-simple>
    <div class="col-3 offset-9 text-right my-3 hide-print">
      <button @click="addItem10" class="btn btn-sm btn-secondary">Добавить</button>
    </div>
    <h4>11. Список аффилированных лиц регулируемого субъекта финансового рынка</h4>
    <!-- table_11 -->
    <b-table-simple bordered hover head-variant="light">
      <b-thead>
        <b-tr>
          <b-th v-for="(item, index) in table_11_fields" :key="index">{{item}}</b-th>
        </b-tr>
      </b-thead>
      <tbody>
        <b-tr v-for="(item, index) in table_11_items" :key="index">
          <b-td v-for="(it, ix) in item" :key="ix">
            <b-input type="text" name="inputs" class="simpleCart_input" v-model="item[ix]"></b-input>
          </b-td>
        </b-tr>
      </tbody>
    </b-table-simple>
    <div class="col-3 offset-9 text-right my-3 hide-print">
      <button @click="addItem11" class="btn btn-sm btn-secondary">Добавить</button>
    </div>
    <h4>12. Список юридических лиц, в которых данный регулируемый субъект финансового рынка владеет 5 процентами и более уставного капитала</h4>
    <!-- table_12 -->
    <b-table-simple bordered hover head-variant="light">
      <b-thead>
        <b-tr>
          <b-th v-for="(item, index) in table_12_fields" :key="index">{{item}}</b-th>
        </b-tr>
      </b-thead>
      <tbody>
        <b-tr v-for="(item, index) in table_12_items" :key="index">
          <b-td v-for="(it, ix) in item" :key="ix">
            <b-input type="text" name="inputs" class="simpleCart_input" v-model="item[ix]"></b-input>
          </b-td>
        </b-tr>
      </tbody>
    </b-table-simple>
    <div class="col-3 offset-9 text-right my-3 hide-print">
      <button @click="addItem12" class="btn btn-sm btn-secondary">Добавить</button>
    </div>
    <h4>13. Список филиалов и представительств регулируемого субъекта финансового рынка</h4>
    <!-- table_13 -->
    <b-table-simple bordered hover head-variant="light">
      <b-thead>
        <b-tr>
          <b-th v-for="(item, index) in table_13_fields" :key="index">{{item}}</b-th>
        </b-tr>
      </b-thead>
      <tbody>
        <b-tr>
          <b-td v-for="(item, index) in table_13_items" :key="index">
            <b-input
              type="text"
              name="inputs"
              class="simpleCart_input"
              v-model="table_13_items[index]"
            ></b-input>
          </b-td>
        </b-tr>
      </tbody>
    </b-table-simple>
    <h4>14. Сведения о реорганизации регулируемого субъекта финансового рынка, его дочерних и зависимых обществ</h4>
    <!-- table_14 -->
    <b-table-simple bordered hover head-variant="light">
      <b-thead>
        <b-tr>
          <b-th v-for="(item, index) in table_14_fields" :key="index">{{item}}</b-th>
        </b-tr>
      </b-thead>
      <tbody>
        <b-tr v-for="(item, index) in table_14_items" :key="index">
          <b-td v-for="(it, ix) in item" :key="ix">
            <b-input type="text" name="inputs" class="simpleCart_input" v-model="item[ix]"></b-input>
          </b-td>
        </b-tr>
      </tbody>
    </b-table-simple>
    <div class="col-3 offset-9 text-right my-3 hide-print">
      <button @click="addItem14" class="btn btn-sm btn-secondary">Добавить</button>
    </div>
    <h4>14-1. Информация об объектах недвижимого имущества</h4>
    <!-- table_14_1 -->
    <b-table-simple bordered hover head-variant="light">
      <b-thead>
        <b-tr>
          <b-th v-for="(item, index) in table_14_1_fields" :key="index">{{item}}</b-th>
        </b-tr>
      </b-thead>
      <tbody>
        <b-tr v-for="(item, index) in table_14_1_items" :key="index">
          <b-td v-for="(it, ix) in item" :key="ix">
            <b-input type="text" name="inputs" class="simpleCart_input" v-model="item[ix]"></b-input>
          </b-td>
        </b-tr>
      </tbody>
    </b-table-simple>
    <div class="col-3 offset-9 text-right my-3 hide-print">
      <button @click="addItem14_1" class="btn btn-sm btn-secondary">Добавить</button>
    </div>
    <h4>15. Данные о финансовом положении регулируемого субъекта финансового рынка.</h4>
    <p>1) Сведения об использовании прибыли общества, полученной в отчетном году</p>
    <!-- table_15_1 -->
    <b-table-simple bordered hover head-variant="light">
      <b-thead>
        <b-tr>
          <b-th v-for="(item, index) in table_15_1_fields" :key="index">{{item}}</b-th>
        </b-tr>
      </b-thead>
      <tbody>
        <b-tr>
          <b-td v-for="(item, index) in table_15_1_items" :key="index">
            <b-input
              type="text"
              name="inputs"
              class="simpleCart_input"
              v-model="table_15_1_items[index]"
            ></b-input>
          </b-td>
        </b-tr>
      </tbody>
    </b-table-simple>
    <p>2) Данные об использовании резервного и других специальных фондов регулируемым субъектом финансового рынка</p>
    <!-- table_15_2 -->
    <b-table-simple bordered hover head-variant="light">
      <b-thead>
        <b-tr>
          <b-th v-for="(item, index) in table_15_2_fields" :key="index">{{item}}</b-th>
        </b-tr>
      </b-thead>
      <tbody>
        <b-tr>
          <b-td v-for="(item, index) in table_15_2_items" :key="index">
            <b-input
              type="text"
              name="inputs"
              class="simpleCart_input"
              v-model="table_15_2_items[index]"
            ></b-input>
          </b-td>
        </b-tr>
      </tbody>
    </b-table-simple>
    <h4>16. К отчету прилагаются:</h4>
    <ul>
      <li>бухгалтерский баланс, отчет о прибылях и убытках, отчет о движении денежных средств, отчет об изменении в капитале, содержащие все строки плана счетов бухгалтерского учета финансово-хозяйственной деятельности субъектов предпринимательства, некоммерческих организаций (за исключением бюджетных учреждений), утвержденные постановлением Правительства Кыргызской Республики от 7 октября 2010 года № 231. Данные, указанные в настоящем абзаце, представляются по итогам каждого квартала, а также года;</li>
      <li>примечания, содержащие свод значительных элементов учетной политики и прочие пояснительные записки;</li>
      <li>аудиторское заключение о результатах проверки финансовой отчетности регулируемого субъекта финансового рынка в отчетном году для регулируемых субъектов, обязанных в соответствии с законодательством Кыргызской Республики осуществлять аудит;</li>
      <li>краткое описание практики корпоративного управления регулируемого субъекта финансового рынка, включая краткое описание практики, которая применялась или изменялась в течение отчетного периода.</li>
    </ul>

    <h4>17. Информация об общих собраниях владельцев ценных бумаг/участников регулируемого субъекта финансового рынка, проведенных в отчетном периоде:</h4>
    <p>1) Общие собрания акционеров, проведенные в отчетном году</p>
    <!-- table_17_2 -->
    <b-table-simple bordered hover head-variant="light">
      <b-thead>
        <b-tr>
          <b-th v-for="(item, index) in table_17_2_fields" :key="index">{{item}}</b-th>
        </b-tr>
      </b-thead>
      <tbody>
        <b-tr>
          <b-td v-for="(item, index) in table_17_2_items" :key="index">
            <template v-if="index == 'date'">
              <b-datepicker
                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                name="inputs"
                v-model="table_17_2_items[index]"
              ></b-datepicker>
            </template>
            <template v-else>
              <b-input
                type="text"
                name="inputs"
                class="simpleCart_input"
                v-model="table_17_2_items[index]"
              ></b-input>
            </template>
          </b-td>
        </b-tr>
      </tbody>
    </b-table-simple>
    <p>2) К отчету прилагаются все протоколы общих собраний владельцев ценных бумаг/участников в отчетном году и отчеты счетной комиссии этих собраний, а также копия публикации о созыве общего собрания, если они ранее не были представлены в уполномоченный государственный орган.</p>

  <b-button @click="save">Сохранить</b-button> 

  </div>
</template>

<script>
import Queries from '../services/report.service'; // axios запросы на бэк энд

export default {
  name: 'Anex_1',
  created() {
    this.getInfoCompany(), this.setinfo(), this.test();
  },
  // components: {
  //   Supervisor: () => import('../components/Supervisor.vue')
  // },
  data() {
    return {
      status: null,
      info: {
        name: '',
        opforma: '',
        address: '',
        activity: ''
      },
      kvartal: '',
      year: '',
      table_2_items: [
        {
          title1: '',
          title2: '',
          title3: '',
          title4: '',
          title5: '',
          title6: '',
          title7: '',
          title8: '',
          title9: '',
          title10: ''
        }
      ],
      table_3_items: [
        {
          title1: '',
          title2: '',
          title3: '',
          title4: '',
          title5: '',
          title6: '',
          title7: '',
          title8: '',
          title9: '',
          title10: ''
        }
      ],
      table_4_items: [
        {
          title1: '',
          title2: '',
          title3: '',
          title4: '',
          title5: '',
          title6: '',
          title7: '',
          title8: '',
          title9: '',
          title10: ''
        }
      ],
      table_5_fields: {
        title1: 'Должностные лица общества',
        title2: 'Размер выплачиваемого вознаграждения и компенсаций'
      },

      table_5_items: [{ title1: '', title2: '' }],

      table_6_fields: {
        title1: 'ФИО руководителя',
        date: 'Дата привлечения',
        title2: 'Статья, краткое описание'
      },

      table_6_items: [{ title1: '', date: '', title2: '' }],

      table_7_fields: {
        title1:
          'Количество владельцев долей/ценных бумаг по состоянию на конец отчетного года',
        title2:
          'Количество работников регулируемого субъекта финансового рынка на конец отчетного периода'
      },

      table_7_items: [{ title1: '', title2: '' }],

      table_8_fields: {
        title1:
          'Список иностранных инвесторов с указанием приобретенных видов ценных бумаг',
        title2: 'Страна, резидентом которой является инвестор',
        title3: 'Вид ценных бумаг',
        title4:
          'Доля/количество принадлежащих ценных бумаг регулируемого субъекта финансового рынка',
        title5:
          'Сумма, фактически оплаченная за приобретенные доли/ценные бумаги регулируемого субъекта финансового рынка',
        date: 'Дата приобретения доли/ценных бумаг',
        title6: 'Доля в уставном капитале (%)'
      },
      table_8_items: {
        title1: '',
        title2: '',
        title3: '',
        title4: '',
        title5: '',
        date: '',
        title6: ''
      },

      table_9_fields: {
        title1: 'Полное наименование, организационно-правовая форма',
        title2:
          'Местонахождение, почтовый адрес, телефон, факс, адрес электронной почты, код ОКПО',
        title3:
          'Данные о лицензии (номер, дата выдачи, орган, выдавший лицензию, срок действия) на осуществление соответствующей деятельности'
      },
      table_9_items: { title1: '', title2: '', title3: '' },

      table_10_fields: {
        date: 'Дата совершения сделки',
        title1:
          'Полное наименование регулируемого субъекта финансового рынка, государственный регистрационный номер выпуска ценных бумаг',
        title2:
          'Полное наименование владельцев долей/ценных бумаг юридического лица или ФИО владельцев долей/ценных бумаг физического лица, от которого отчуждаются доли/ценные бумаги',
        title3:
          'Полное наименование владельцев ценных бумаг юридического лица или ФИО владельцев ценных бумаг физического лица, которое приобретает (принимает) ценные бумаги',
        title4: 'Сумма номинальной стоимости сделки',
        title5: 'Количество ценных бумаг по сделке',
        title6:
          'Доля ценных бумаг по совершенной сделке, в уставном капитале (в %)',
        title7:
          'Основание: - сводный приказ на депонирование;- сделка на бирже;- сводное передаточное распоряжение и др.'
      },

      table_10_items: [
        {
          date: '',
          title1: '',
          title2: '',
          title3: '',
          title4: '',
          title5: '',
          title6: '',
          title7: ''
        }
      ],

      table_11_fields: {
        title1: 'Полное наименование, организационно-правовая форма',
        title2:
          'Местонахождение, почтовый адрес, телефон, факс, адрес электронной почты, код ОКПО'
      },

      table_11_items: [{ title1: '', title2: '' }],

      table_12_fields: {
        title1: 'Полное наименование, организационно-правовая форма',
        title2:
          'Местонахождение, почтовый адрес, телефон, факс, адрес электронной почты, код ОКПО',
        title3: 'Доля участия в уставном капитале (в %)'
      },
      table_12_items: [{ title1: '', title2: '', title3: '' }],

      table_13_fields: {
        title1: 'ФИО руководителя',
        title2: 'Полное наименование, организационно-правовая форма',
        title3:
          'Местонахождение, почтовый адрес, телефон, факс, адрес электронной почты'
      },

      table_13_items: { title1: '', title2: '', title3: '' },

      table_14_fields: {
        date:
          'Дата принятия решения о реорганизации регулируемого субъекта финансового рынка',
        title1: 'Вид реорганизации регулируемого субъекта финансового рынка',
        title2:
          'Орган, принявший решение о реорганизации регулируемого субъекта финансового рынка'
      },

      table_14_items: [{ name: '', title1: '', title2: '' }],

      table_14_1_fields: {
        title1: 'Наименование',
        title2: 'Местонахождение, почтовый адрес',
        title3: 'Основное предназначение',
        title4: 'Площадь (м2)',
        title5: 'Наличие либо отсутствие обременения'
      },

      table_14_1_items: [
        {
          title1: '',
          title2: '',
          title3: '',
          title4: '',
          title5: ''
        }
      ],

      table_15_1_fields: {
        title1: 'Уплаченные налоги',
        title2: 'Размер прибыли, направленной на формирование резервного фонда',
        title3:
          'Размер прибыли, распределяемой между владельцами ценных бумаг (дивиденд, доход)',
        title4: 'Размер дивиденда на одну простую и привилегированную акцию',
        title5:
          'Доходы регулируемого субъекта по ценным бумагам (кроме акций), начисленные в отчетном году по каждому виду ценных бумаг раздельно',
        title6: 'Прочие направления использования прибыли',
        title7:
          'Количество долей/акций регулируемого субъекта, выкупленных самим регулируемым субъектом финансового рынка'
      },

      table_15_1_items: {
        title1: '',
        title2: '',
        title3: '',
        title4: '',
        title5: '',
        title6: '',
        title7: ''
      },

      table_15_2_fields: {
        title1: 'Резервный фонд',
        title2: 'Другие специальные фонды',
        title3: 'Использование резервного и других специальных фондов'
      },

      table_15_2_items: { title1: '', title2: '', title3: '' },

      table_17_2_fields: {
        date: 'Дата проведения общего собрания владельцев ценных бумаг',
        title2: 'Кворум'
      },

      table_17_2_items: { date: '', title2: '' },

      arr: []
    };
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
  },

  methods: {
    test() {
      if (localStorage.getItem('role') == 'admin') {
          let $input = document.querySelectorAll('.simpleCart_input');
          for (let i = 0; i < $input.length; i++) {
            let $p = document.createElement('p');

            $p.innerHTML = $input[i].value;
            $p.classList.add("text-center")

            $input[i].parentNode.replaceChild($p, $input[i]);
          }
      }
    },
    addItem2() {
      this.table_2_items.push({
        title1: '',
        title2: '',
        title3: '',
        title4: '',
        title5: '',
        title6: '',
        title7: '',
        title8: '',
        title9: '',
        title10: ''
      });
    },
    addItem3() {
      this.table_3_items.push({
        title1: '',
        title2: '',
        title3: '',
        title4: '',
        title5: '',
        title6: '',
        title7: '',
        title8: '',
        title9: '',
        title10: ''
      });
    },
    addItem4() {
      this.table_4_items.push({
        title1: '',
        title2: '',
        title3: '',
        title4: '',
        title5: '',
        title6: '',
        title7: '',
        title8: '',
        title9: '',
        title10: ''
      });
    },
    addItem5() {
      this.table_5_items.push({ title1: '', title2: '' });
    },
    addItem6() {
      this.table_6_items.push({ title1: '', data: '', title2: '' });
    },
    addItem7() {
      this.table_7_items.push({ title1: '', title2: '' });
    },
    addItem10() {
      this.table_10_items.push({
        date: '',
        title1: '',
        title2: '',
        title3: '',
        title4: '',
        title5: '',
        title6: '',
        title7: ''
      });
    },
    addItem11() {
      this.table_11_items.push({ title1: '', title2: '' });
    },
    addItem12() {
      this.table_12_items.push({ title1: '', title2: '', title3: '' });
    },
    addItem14() {
      this.table_14_items.push({ name: '', title1: '', title2: '' });
    },
    addItem14_1() {
      this.table_14_1_items.push({
        title1: '',
        title2: '',
        title3: '',
        title4: '',
        title5: ''
      });
    },
    setinfo() {
      return Queries.getReportById(this.$route.params.idreport)
        .then(response => {
          (this.table_2_items = response.data.doc.table2),
            (this.table_3_items = response.data.doc.table3),
            (this.table_4_items = response.data.doc.table4),
            (this.table_5_items = response.data.doc.table5),
            (this.table_6_items = response.data.doc.table6),
            (this.table_7_items = response.data.doc.table7),
            (this.table_8_items = response.data.doc.table8),
            (this.table_9_items = response.data.doc.table9),
            (this.table_10_items = response.data.doc.table10),
            (this.table_11_items = response.data.doc.table11),
            (this.table_12_items = response.data.doc.table12),
            (this.table_13_items = response.data.doc.table13),
            (this.table_14_items = response.data.doc.table14),
            (this.table_14_1_items = response.data.doc.table14_1),
            (this.table_15_1_items = response.data.doc.table15_1),
            (this.table_15_2_items = response.data.doc.table15_2),
            (this.table_17_2_items = response.data.doc.table17_2);
          this.info = response.data.doc.info;
          let titleKvartal = response.data.kvartal.split(';');
          this.year = titleKvartal[0];
          this.kvartal = titleKvartal[1].slice(1);
          this.status = response.data.status;
          this.$nextTick(function () {
            this.test()
          })
          
        })
        .catch(function(error) {
          console.log(error);
        });
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
    save() {
      let table = {
        info: this.info,
        table2: this.table_2_items,
        table3: this.table_3_items,
        table4: this.table_4_items,
        table5: this.table_5_items,
        table6: this.table_6_items,
        table7: this.table_7_items,
        table8: this.table_8_items,
        table9: this.table_9_items,
        table10: this.table_10_items,
        table11: this.table_11_items,
        table12: this.table_12_items,
        table13: this.table_13_items,
        table14: this.table_14_items,
        table14_1: this.table_14_1_items,
        table15_1: this.table_15_1_items,
        table15_2: this.table_15_2_items,
        table17_2: this.table_17_2_items
      };

      let kvartal = this.year + '; ' + this.kvartal; //2020; 2 квартал
      let typedoc = 'anex-1';
      let xmldoc = JSON.stringify(table);
      let sender = this.$store.state.company.info.kod;
      let status = 1;
      this.$store
        .dispatch('report/insert', { typedoc, xmldoc, sender, status, kvartal })
        .then(response => {
          this.$router.push('/reporting');
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
.anex-1 {
  position: relative;
}

.anex1-block {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 20;
  top: 0;
}
@media print {
  @page {
    size: landscape;
  }
}
</style>