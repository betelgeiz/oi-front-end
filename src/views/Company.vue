<template>
  <div class="Company">
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>Данные успешно сохранены {{ dismissCountDown }} сек...</p>
      <b-progress variant="warning" :max="dismissSecs" :value="dismissCountDown" height="4px"></b-progress>
    </b-alert>
    <b-col cols="6">
      <b-form-group id="input-group-1" label="Имя компании:" label-for="input-1">
        <b-form-input id="input-1" v-model="content.name" placeholder="Имя компании"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Организационно-правовая форма:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="content.opforma"
          placeholder="Организационно-правовая форма"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Основной вид деятельности:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="content.activity"
          placeholder="Основной вид деятельности"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" label="Юридический и почтовый адрес:" label-for="input-4">
        <b-form-input id="input-4" v-model="content.address" placeholder="Адрес"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-5" label="Телефон:" label-for="input-5">
        <b-form-input id="input-5" v-model="content.phone" placeholder="Телефон"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-6" label="Факс:" label-for="input-6">
        <b-form-input id="input-6" v-model="content.fax" placeholder="Факс"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-8" label="E-mail:" label-for="input-8">
        <b-form-input id="input-8" v-model="content.email" placeholder="E-mail"></b-form-input>
      </b-form-group>
      
      <b-form-group id="input-group-10" label="Должность руководителя:" label-for="input-10">
        <b-form-input id="input-10" v-model="content.sepervisor.position" placeholder="Должность"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-10" label="ФИО руководителя:" label-for="input-10">
        <b-form-input id="input-10" v-model="content.sepervisor.dir" placeholder="ФИО"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-9" label="ФИО Главного бухгалтера:" label-for="input-9">
        <b-form-input id="input-9" v-model="content.sepervisor.buh" placeholder="ФИО"></b-form-input>
      </b-form-group>
      <b-button variant="success" @click="save" class="m-1">Сохранить</b-button>
    </b-col>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Company',
  created() {
    this.getCompanyInfo();
  },
  data() {
    return {
      dismissSecs: 5,
      dismissCountDown: 0
    };
  },
  metaInfo() {
    return {
      title: this.$title('Профиль компании')
    };
  },
  computed: {
    ...mapState({ content: store => store.company.info })
  },
  methods: {
    save() {
      this.dismissCountDown = this.dismissSecs;
      let name = this.content.name;
      let opforma = this.content.opforma;
      let activity = this.content.activity;
      let address = this.content.address;
      let phone = this.content.phone;
      let fax = this.content.fax;
      let email = this.content.email;
      let id = this.content.id;
      let supervisor = JSON.stringify(this.content.sepervisor);
      this.$store
        .dispatch('company/updateInfo', {
          name,
          opforma,
          activity,
          address,
          phone,
          fax,
          email,
          supervisor,
          id
        })
        .then(response => {
          this.$router.push('/reporting');
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    getCompanyInfo() {
      this.$store
        .dispatch('company/getInfo')
        .then(response => {})
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>