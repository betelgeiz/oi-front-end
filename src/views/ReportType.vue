<template>
  <div>
    <h3>
      Выберите
      <b-badge>вид отчета</b-badge>
    </h3>

    <!-- <b-button stacked variant="outline-primary" size="lg">
      <router-link to="/anex-1">Приложение 1</router-link>
    </b-button>
    <br />
    <br />
    <b-button stacked variant="outline-primary" size="lg">
      <router-link to="/anex-2">Приложение 2</router-link>
    </b-button> -->
    <br />
    <br />
    <b-button stacked variant="outline-primary" size="lg">
      <router-link to="/report?type=report">Приложение 2-1</router-link>
    </b-button> <br><br><br>
    <b-button stacked variant="outline-primary" size="lg">
      <router-link to="/report?type=report">Листинг</router-link>
    </b-button> <br><br>
    <b-button stacked variant="outline-primary" size="lg">
      <router-link to="/report?type=kse">Отчеты для фондовой биржи</router-link>
    </b-button> <br><br>
    <b-button stacked variant="outline-primary" size="lg">
      <router-link to="/report?type=broker">Отчеты для брокерских компаний</router-link>
    </b-button>
    
  </div>
</template>

<script>
export default {
  name: 'ReportType'
  
};
</script>


<style lang="scss">
button:hover {
  a {
    color: #ffffff !important;
  }
}
</style>