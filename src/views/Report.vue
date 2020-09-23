<template>
  <div class="report">
    <div class="col-3 offset-9 text-right my-3 hide-print" style="z-index: 40;">
      <b-button class="print hide-print" onclick="window.print()">Печать</b-button>
    </div>
    <component :is="isReportView" v-model="report"></component>
    <template v-if="isadmin">
      <b-button class="btn btn-block hide-print" variant="success">Подтвердить</b-button>
      <b-button class="btn btn-block hide-print" @click="rejectReport" variant="danger">Отклонить</b-button>
    </template>
    <template v-else>
      <button class="btn btn-primary btn-block hide-print" v-if="!$route.params.idreport" v-show="btnView" @click="submit">
        <span>Сохранить</span>
      </button>
      <button v-else class="btn btn-primary btn-block hide-print"  @click="update">Обновить</button> 
    </template>
  </div>
</template>

<script>
export default {
  name: 'Report',

  data() {
    return {
      report: [],
      content: []
    };
  },
  metaInfo() {
    return {
      title: this.$title('Отчет')
    };
  },
  components: {
    ReportComponent: () => import('../components/ReportComponent.vue'),
    FactComponent: () => import('../components/FactComponent.vue'),
    FromKSEComponent: () => import('../components/FromKSE.vue'),
    BrokerReports: () => import('../components/BrokerReports.vue')
  },
  computed: {
    isadmin() {
      if (localStorage.getItem('role') === 'admin') {
        return true;
      }
      return false;
    },
    isReportView() {
      if (this.$route.query.type.indexOf('fact') >= 0) {
        return 'FactComponent';
      }
      else if (this.$route.query.type.indexOf('kse') >= 0) {
        return 'FromKSEComponent'
      }

      else if (this.$route.query.type.indexOf('broker') >= 0) {
        return 'BrokerReports'
      }

      return 'ReportComponent';
    },
    btnView() {
      if (this.$route.query.btn != 0) {
        console.log('показать')
        return true
      }
      console.log('скрыть')
      return false
      
    },
  },
  methods: {
    submit() {
      //this.report.typedoc, JSON.stringify(this.report), this.report.reportHead.kod, 'KSE00000'
      let typedoc = this.report.typedoc;
      let xmldoc = JSON.stringify(this.report);
      let sender = this.report.reportHead.kod;

      let status = 1; // Статус 1 - можно отправить на сервер

      if (typedoc[0] == 'R') {
        // Для квартального и годового отчетов
        let textareas = this.report.reportFooter;
        if (
          textareas.placement == '' ||
          textareas.funds == '' ||
          textareas.investment == '' ||
          textareas.income == '' ||
          textareas.deal == ''
        )
          status = 0; // Статус "0" - нельзя отправить отчет, т.е в общем списке отчетов у этого отчета не будет кнопки отправить
      }

      let kvartal = this.report.kvartal;
      this.$store
        .dispatch('report/insert', { typedoc, xmldoc, sender, status, kvartal })
        .then(response => {
          this.$router.push('/reporting');
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    update() {
      let id = this.$route.params.idreport;
      let doc = JSON.stringify(this.report);
      let status = 1;

      if (this.$route.query.type.indexOf('RKV') >= 0) {
        let textareas = this.report.reportFooter;
        if (
          textareas.placement == '' ||
          textareas.funds == '' ||
          textareas.investment == '' ||
          textareas.income == '' ||
          textareas.deal == ''
        ) 
          status = 0;
      }

      if (doc.length != 0) {
        this.$store
          .dispatch('report/updateReport', { id, doc, status })
          .then(response => {
            this.$router.push('/reporting');
          })
          .catch(function(error) {
            console.log(error);
          });
        console.log(doc)
      }
      else {
        this.$router.push('/reporting')
      }
    },
    rejectReport() {
      let id = this.$route.params.idreport;
      this.$store
        .dispatch('report/rejectReport', id)
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
@media print {
  .hide-print {
    display: none;
  }
}
</style>