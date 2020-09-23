<template>
 <div class="ReportLayout"> 
    <h3>
      Выберите
      <b-badge>существенный факт</b-badge>
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
      <b-button @click="back" variant="outline-primary">Назад</b-button>
      <br />
      <br />
      <div class="table-div" id="table-content">
        <b-table-simple hover bordered small stacked>
          <thead>
            <tr>
              <th
                v-for="(item, index) in content.head"
                :key="index"
                :rowspan="item.rowspan"
                :colspan="item.colspan"
              >{{item.text}}</th>
            </tr>
            <tr>
              <th v-for="(item, index) in content.head2" :key="index">{{item}}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td v-for="n in content.body.count" :key="n">
                <input type="text" class="input" />
              </td>
            </tr>
          </tbody>
        </b-table-simple>
      </div>
    </template>
 </div> 
</template>


<script>
import forms from '../mixins/forms.js';
export default {
  name: 'FromKSE',
  mixins: [forms],
  data() {
    return {
      content: {},
      selected: '',
      text: '',
      options: [
        {
          text:
            '1. Изменения в списке лиц, входящих в органы управления эмитента',
          value: 'form1',
        },
        {
          text: '2. ны управления эмитента',
          value: 'form2',
        },
      ],
      arr: [],
    };
  },
  computed: {
    show() {
      if (this.selected == '') return true;
      return this.viewFactBody() ;
      
    },
  },
  methods: {
    viewFactBody() {
      this.content = this.forms[this.selected];
      let h = document.getElementById('table-content');
      console.log(h)
      this.$router.push({path: 'report', query: {type: 'kse', btn: '1' } })
      //?=kse&btn=0
    },
    back() {
      this.selected = '';
      this.$router.push({path: 'report', query: {type: 'kse', btn: '0' } })
    },    
  },
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

.table-div {
  overflow: auto;
  position: absolute;
  width: 100%;
}
.ReportLayout {
  position: relative;
}
</style>
