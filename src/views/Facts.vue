<template>
  <div class="facts">
    <h3>
      Выберите <b-badge>существенный факт</b-badge>
    </h3>
    <b-form-group v-if="show">
      <b-radio-group
        class="radio-fact"
        id="btn-radios-3"
        v-model="selected"
        :options="options"
        buttons
        stacked
        button-variant="outline-primary"
        size="lg"
        name="radio-btn-outline"
      ></b-radio-group>
    </b-form-group>
    <template v-else>
      <b-button @click="back" variant="outline-primary">Назад</b-button><br><br>
      
      <b-alert variant="success" show>{{facts[selected].crib}}</b-alert> <br>
        <b-table-simple hover small stacked>
          <b-tbody>
            <b-tr v-for="(item, index) in content.titles" :key="index">
              
              <template v-if="item.type == 'header'">
                <b-td colspan="2" class='text'><h5>{{item.text}}</h5><b-input style="display: none" type="text" name="inputs" :data-option="index"></b-input></b-td>
              </template>
              
              <template v-else>
                <b-td width="40%">{{item}}</b-td>
                <b-td>
                  <b-form-textarea id="textarea-rows" rows="2" name="inputs"></b-form-textarea>
                </b-td>
              </template>
            </b-tr>
          </b-tbody>
        </b-table-simple>
        {{arr}}
      
      <b-button @click="save">Сохранить</b-button>
    </template>
  </div>
</template>

<script>
import facts from '../mixins/facts.js';

export default {
  name: 'Facts',
   metaInfo() {
    return {
      title: this.$title('Существенные факты')
    }
  },
  mixins: [facts],
  data() {
    return {
      content: {},
      selected: '',
      text: '',
      options: [
        {
          text: '1 (a).	Изменение в составе Исполнительного органа',
          value: 'fact1'
        },
        {
          text: '1 (б).	Изменение в составе Совета директоров',
          value: 'fact1_1'
        },
        {
          text:
            '2 (а). Изменение размера участия члена Исполнительного органа в уставном капитале компаний',
          value: 'fact2'
        },
        {
          text:
            '2 (б). Изменение размера участия члена Совета директоров в уставном капитале компаний',
          value: 'fact2_1'
        },
        {
          text: '3 (а). Изменение в списке владельцев ценных бумаг (физических лиц)',
          value: 'fact3'
        },
        {
          text: '3 (б). Изменение в списке владельцев ценных бумаг (юридических лиц)',
          value: 'fact3_1'
        },
        {
          text:
            '4 (а). Изменения в списке юридических лиц, в которых эмитент владеет 20 и более процентами уставного капитала',
          value: 'fact4'
        },
        {
          text:
            '5 (а). Появление в реестре лица, владеющего более чем 5 процентами ценных бумаг',
          value: 'fact5'
        },
        {
          text:
            '5 (б). Появление в реестре лица, владеющего более чем 5 процентами ценных бумаг',
          value: 'fact5_1'
        },
        {
          text:
            '6 (а). Разовые сделки эмитента, размер которых, либо стоимость имущества по которым составляет 10 и более процентов от активов эмитента на дату сделки',
          value: 'fact6'
        },
        {
          text:
            '6 (б). Факт заключения договора или иного документа и/или факт государственной регистрации такого договора, предметом которого является приобретение, получение или передача во временное пользование сроком свыше одного года, либо отчуждение недвижимого имущества, независимо от площади недвижимого имущества.',
          value: 'fact6_1'
        },
        {
          text:
            '7 (а). Факт, повлекший разовое увеличение стоимости активов более чем на 10 процентов',
          value: 'fact7'
        },
        {
          text:
            '7 (б). Факт, повлекший разовое уменьшение стоимости активов более чем на 10 процентов',
          value: 'fact7_1'
        },
        {
          text:
            '8 (а). Факт, повлекший разовое увеличение чистой прибыли более чем на 10 процентов',
          value: 'fact8'
        },
        {
          text:
            '8 (б). Факт, повлекший разовое увеличение чистых убытков более чем на 10 процентов',
          value: 'fact8_1'
        },
        {
          text: '9 (а). Реорганизация эмитента, его дочерних и зависимых обществ',
          value: 'fact9'
        },
        {
          text: '10 (а). Начисленные доходы по ценным бумагам (дивиденды)',
          value: 'fact10'
        },
        {
          text: '10 (б). Выплаченные доходы по ценным бумагам (дивиденды)',
          value: 'fact10_1'
        },
        { text: '10 (в). Начисленные доходы по облигациям', value: 'fact10_2' },
        { text: '10 (г). Выплаченные доходы по облигациям', value: 'fact10_3' },
        { text: '11 (а). Решение общего собрания акционеров', value: 'fact11' },
        { text: '12 (а). Погашение ценных бумаг эмитента', value: 'fact12' },
        { text: '13 (а). Выход эмитента из статуса публичной компании', value: 'fact13' },
        { text: '13 (б). Добровольная ликвидация', value: 'fact13_1' }
      ],
      arr: []
    };
  },
 
  computed: {
    show() {
      if (this.selected == '') return true;
      return this.viewFactBody();
    }
  },
  methods: {
    viewFactBody() {
      this.content = this.facts[this.selected]
    },
    back() {
      this.selected = '';
    },
    save() {
      let inputs = document.getElementsByName('inputs');

      this.arr = []

      for (let i = 0; i < inputs.length; i++) {
        this.arr.push(inputs[i].value)
      }

      let typedoc = this.selected;
      let xmldoc = JSON.stringify(this.arr);
      let sender = this.$store.state.company.info.kod;
      let status = 1;
      let kvartal = '2020; 2 квартал'
      this.$store
        .dispatch('report/insert', { typedoc, xmldoc, sender, status, kvartal })
        .then(response => {
          this.selected = '';
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
.radio-fact label {
  line-height: 2;
  font-size: 17px;
  color: #506780;
  border-color: #506780;
  text-align: left;
  margin: 10px 0 !important;
}
</style>

