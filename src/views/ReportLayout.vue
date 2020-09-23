<template>
  <div class="ReportLayout col-md-12">

    <div class="form1">
      <h4><b>Общие сведения
          об акционерах и участниках торгов фондовой биржи
      </b></h4>
      <b-table-simple hover bordered small stacked>
        <thead>
          <tr>
            <th
              v-for="(item, index) in form1.head"
              :key="index"
              :rowspan="item.rowspan"
              :colspan="item.colspan"
            >{{item.text}}</th>
          </tr>
          <tr>
            <th v-for="(item, index) in form1.head2" :key="index">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="n in form1.body.count" :key="n">
              <input type="text" class="input"/>
            </td>
          </tr>
        </tbody>
      </b-table-simple>
    </div>

    <div class="form2">
      <h4><b>Перечень
        ценных бумаг, включенных в листинг фондовой биржи
        </b></h4>
      <b-table-simple hover bordered small stacked>
        <thead>
          <tr>
            <th
              v-for="(item, index) in form2.head"
              :key="index"
              :rowspan="item.rowspan"
            >{{item.text}}</th>
          </tr>
          <tr>
            <th v-for="(item, index) in form2.head2" :key="index">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="n in form2.body.count" :key="n">
              <input type="text" class="input"/>
            </td>
          </tr>
        </tbody>
      </b-table-simple>
    </div>

     <div class="form3">
       <h4><b>Перечень
        ценных бумаг, исключенных из листинга фондовой биржи
        </b></h4>
      <b-table-simple hover bordered small stacked>
        <thead>
          <tr>
            <th
              v-for="(item, index) in form3.head"
              :key="index"
              :rowspan="item.rowspan"
            >{{item.text}}</th>
          </tr>
          <tr>
            <th v-for="(item, index) in form3.head2" :key="index">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="n in form3.body.count" :key="n">
              <input type="text" class="input"/>
            </td>
          </tr>
        </tbody>
      </b-table-simple>
    </div>

     <div class="form4">
       <h4><b>Реестр
        участников торгов и уполномоченных трейдеров
        </b></h4>
      <b-table-simple hover bordered small stacked>
        <thead>
          <tr>
            <th
              v-for="(item, index) in form4.head"
              :key="index"
              :rowspan="item.rowspan"
              :colspan="item.colspan"
            >{{item.text}}</th>
          </tr>
          <tr>
            <th v-for="(item, index) in form4.head2" :key="index">{{item}}</th>
            <th v-for="(item, index) in form4.head3" :key="index">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="n in form4.body.count" :key="n">
              <input type="text" class="input"/>
            </td>
          </tr>
        </tbody>
      </b-table-simple>
    </div>

     <div class="form5">
       <h4><b>Сведения
        о 5 участниках торгов, имеющих наибольшую сумму совершенных сделок в сомах с ценными бумагами, 
        допущенными к обращению через торговую систему фондовой биржи (данные представляются по каждому рабочему дню недели) за период с
        <input type="text">
        </b></h4>
      <b-table-simple hover bordered small stacked>
        <thead>
          <tr>
            <th
              v-for="(item, index) in form5.head"
              :key="index"
              :rowspan="item.rowspan"
              :colspan="item.colspan"
            >{{item.text}}</th>
          </tr>
          <tr>
            <th v-for="(item, index) in form5.head2" :key="index">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="n in form5.body.count" :key="n">
              <input type="text" class="input"/>
            </td>
          </tr>
        </tbody>
      </b-table-simple>
    </div>

     <div class="form6">
       <h4><b>Отчет
          о сделках
        </b></h4>
      <b-table-simple hover bordered small stacked>
        <thead>
          <tr>
            <th
              v-for="(item, index) in form6.head"
              :key="index"
              :rowspan="item.rowspan"
              :colspan="item.colspan"
            >{{item.text}}</th>
          </tr>
          <tr>
            <th v-for="(item, index) in form6.head1" :key="index">{{item}}</th>
            <th v-for="(item, index) in form6.head2" :key="index">{{item}}</th>
            <th v-for="(item, index) in form6.head3" :key="index">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="n in form6.body.count" :key="n">
              <input type="text" class="input"/>
            </td>
          </tr>
        </tbody>
      </b-table-simple>
    </div>

     <div class="form7">
       <h4><b>Отчет
        о сделках по брокерским и дилерским фирмам
        <b-input-group prepend="Брокерская фирма" class="mt-3">
        <b-form-input id="input-1"></b-form-input>
      </b-input-group></b>
      </h4>
      <b-table-simple hover bordered small stacked>
        <thead>
          <tr>
            <th
              v-for="(item, index) in form7.head"
              :key="index"
              :rowspan="item.rowspan"
              :colspan="item.colspan"
            >{{item.text}}</th>
          </tr>
          <tr>
            <th v-for="(item, index) in form7.head2" :key="index">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="n in form7.body.count" :key="n">
              <input type="text" class="input"/>
            </td>
          </tr>
        </tbody>
      </b-table-simple>
    </div>

     <div class="form8">
       <h4><b>
         Список
        ценных бумаг, допущенных к обращению через торговую систему фондовой биржи
       </b></h4>
      <b-table-simple hover bordered small stacked>
        <thead>
          <tr>
            <th
              v-for="(item, index) in form8.head"
              :key="index"
              :rowspan="item.rowspan"
              :colspan="item.colspan"
            >{{item.text}}</th>
          </tr>
          <tr>
            <th v-for="(item, index) in items" :key="index">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="n in form8.body.count" :key="n">
              <input type="text" class="input"/>
            </td>
          </tr>
        </tbody>
      </b-table-simple>
    </div>

     <div class="form9">
       <h4><b>Информация о торгах</b></h4>
      <b-table-simple hover bordered small stacked>
        <thead>
          <tr>
            <th
              v-for="(item, index) in form9.head"
              :key="index"
              :rowspan="item.rowspan"
              :colspan="item.colspan"
            >{{item.text}}</th>
          </tr>
          <tr>
            <th v-for="(item, index) in items" :key="index">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="n in form9.body.count" :key="n">
              <input type="text" class="input"/>
            </td>
          </tr>
        </tbody>
      </b-table-simple>
    </div>

     <div class="form10">
       <h4><b>Значение индекса за торговый день</b></h4>
      <b-table-simple hover bordered small stacked>
        <thead>
          <tr>
            <th
              v-for="(item, index) in form10.head"
              :key="index"
              :rowspan="item.rowspan"
              :colspan="item.colspan"
            >{{item.text}}</th>
          </tr>
          <tr>
            <th v-for="(item, index) in items" :key="index">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="n in form10.body.count" :key="n">
              <input type="text" class="input"/>
            </td>
          </tr>
        </tbody>
      </b-table-simple>
    </div>

    <div class="form11">
      <h4><b>Показатели, характеризующие финансовое состояние организации</b></h4>
      <b-table-simple hover small stacked>
          <b-tbody>
            <b-th v-for="(item, index) in form11.head"
              :key="index"><h5>{{item.text}}</h5> </b-th>
            <b-tr v-for="(item, index) in form11.head1" :key="index">
              <template v-if="item.type == 'header'">
                <b-td colspan="4" class='text'><b-input style="display: none" type="text" name="inputs" :data-option="index"></b-input></b-td>
              </template>
              
              <template v-else>
                <b-td width="40%">{{item}}</b-td>
                <b-td>
                  <b-form-input id="textarea-rows" rows="2" name="inputs"></b-form-input>
                </b-td>
              </template>
            </b-tr>
          </b-tbody>
        </b-table-simple>
    </div>

    <div class="form12">
       <h4><b>Расчет
        нормативов достаточности собственных средств
        </b></h4>
      <b-table-simple hover bordered small stacked>
        <thead>
          <tr>
            <th
              v-for="(item, index) in form12.head"
              :key="index"
              :rowspan="item.rowspan"
            >{{item.text}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <b-td>Уставный капитал</b-td>
              <b-td>15000-250000 расчетных показателей</b-td>
          </tr>
          <tr>
              <b-td>Коэффициент текущей ликвидности</b-td>
              <b-td>не менее 0,5</b-td>
          </tr>
          <tr>
              <b-td>Коэффициент достаточности собственных средств</b-td>
              <b-td>не менее 1</b-td>
          </tr>
        </tbody>
      </b-table-simple>
    </div>
    {{arr}}
    <button class="btn btn-primary btn-block hide-print" @click="save">
        <span>Сохранить1</span>
      </button>
  </div>
</template>

<script>

export default {
  name: 'ReportLayout',
  data() {
    return {
      arr : []
    };
  },
  methods: {
    save() {
      let inputs = document.getElementsByClassName('input');

      this.arr = [];

      for (let i = 0; i < inputs.length; i++) {
        this.arr.push(inputs[i].value);
      }
    }
  }
};
</script>

<style>
.table-div {
  overflow: auto;
    position: absolute;
    width: 100%;
}
.ReportLayout {
  position: relative;
}
h4{
  text-align: center;
  padding: 10px;
}
</style>
