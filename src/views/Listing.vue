<template>
  <div class="Listing">
    <div class="write">
      <div class="col-5 offset-7 text-right my-3">
        <b-col sm="12">
          <h5 class="d-inline">Приложение 2-1</h5>
        </b-col>
        <b-col sm="12">
          <p class="d-inline">
            к Правилам листинга ценных бумаг
            <br />ЗАО «Кыргызская фондовая биржа»
          </p>
        </b-col>
      </div>
      <h5 class="text-center">Листинговый проспект</h5>
      <b-input-group prepend="Наименование Эмитента" class="mt-3">
        <b-form-input id="input-1"></b-form-input>
      </b-input-group>
      <b-input-group prepend="Период раскрытия" class="mt-3">
        <b-form-input id="input-1"></b-form-input>
      </b-input-group>
      <b-input-group prepend="Дата составления" class="mt-3">
        <b-form-input id="input-1"></b-form-input>
      </b-input-group>
      <div class="EmitentInfo">
        <h4>1. Общие сведения об Эмитенте</h4>
        <div class="DataEmitent">
          <b-input-group prepend="1.1. Юридический и почтовые адреса Эмитента" class="mt-3">
            <b-form-input id="input-1"></b-form-input>
          </b-input-group>
          <b-input-group
            prepend="1.2. Контактное лицо Эмитента, должность, контактный телефон"
            class="mt-3"
          >
            <b-form-input id="input-1"></b-form-input>
          </b-input-group>
          <b-input-group
            prepend="1.3. Описание вида деятельности (с указанием номера и даты лицензии) и основного вида
                              выпускаемой продукции или оказываемых услуг"
            class="mt-3"
          >
            <b-form-input id="input-1"></b-form-input>
          </b-input-group>
          <b-input-group prepend="1.4. Аудитор Эмитента" class="mt-3">
            <b-form-input id="input-1"></b-form-input>
          </b-input-group>
          <b-input-group prepend="1.5. Реестродержатель Эмитента" class="mt-3">
            <b-form-input id="input-1"></b-form-input>
          </b-input-group>
          <b-input-group
            prepend="1.6. Дата и номер государственной регистрации Эмитента в качестве юридического лица"
            class="mt-3"
          >
            <b-form-input id="input-1"></b-form-input>
          </b-input-group>
          <b-input-group
            prepend="Дата последней государственной перерегистрации Эмитента"
            class="mt-3"
          >
            <b-form-input id="input-1"></b-form-input>
          </b-input-group>
        </div>
        <h5>
          1.7. Сведения о филиалах и представительствах Эмитента, а также юридических лицах, в
          которых Эмитент владеет более чем 5% от их капитала, в том числе в виде акций, долей, паев:
        </h5>
        <div class="container">
          <b-table
            bordered
            hover
            :items="filial"
            :fields="tblfilialfields"
            class="table table-bordered"
            head-variant="light"
          >
            <template #cell(Name)="row">
              <input type="text" v-model="row.item.Name" />
            </template>
            <template #cell(Addres)="row">
              <input type="text" v-model="row.item.Addres" />
            </template>
            <template #cell(Vid)="row">
              <input type="text" v-model="row.item.Vid" />
            </template>
            <template #cell(FIODirector)="row">
              <input type="text" v-model="row.item.FIODirector" />
            </template>
            <template #cell(RazmerKapital)="row">
              <input type="text" v-model="row.item.RazmerKapital" />
            </template>
          </b-table>
        </div>
        <b-input-group
          prepend="1.8. Общее число сотрудников, работающих в компании по состоянию на конец отчетного
                    периода"
          class="oneeight"
        >
          <b-form-input id="input-1"></b-form-input>
        </b-input-group>
        <div class="UchastieEmitent">
          <h5>1.9. Сведения об участии Эмитента в некоммерческих организациях:</h5>
          <b-table
            bordered
            hover
            :items="UchastieEmitent"
            :fields="tblEmitentfields"
            head-variant="light"
          >
            <template #cell(TitleFirst)="row">
              <input type="text" v-model="row.item.TitleFirst" />
            </template>
            <template #cell(TitleSecond)="row">
              <input type="text" v-model="row.item.TitleSecond" />
            </template>
            <template #cell(TitleThird)="row">
              <input type="text" v-model="row.item.TitleThird" />
            </template>
          </b-table>
        </div>
      </div>
    </div>
    <div id="EmitentUpravlenie">
      <h4>2. Корпоративное управление Эмитента.</h4>
      <h5>
        2.1. Информация об Общих собраниях акционеров, проведенных Эмитентом за последний
        год (последним годом считается период с 1-го числа аналогичного квартала прошлого календарного
        года до последнего числа отчетного квартала):
      </h5>
      <b-table
        bordered
        hover
        :items="EmitentUpravlenie"
        :fields="tblEmitentUpravleniefields"
        head-variant="light"
      >
        <template #cell(date)="row">
          <input type="text" v-model="row.item.date" />
        </template>
        <template #cell(povestka)="row">
          <input type="text" v-model="row.item.povestka" />
        </template>
      </b-table>
      <div class="NachistDohoda">
        <h5>2.2.Сведения о начисленных доходах на 1 ценную бумагу (каждого вида) за последние три года:</h5>
        <b-table
          bordered
          hover
          :items="NachistDohoda"
          :fields="tblDataDohodfields"
          head-variant="light"
        >
          <template #cell(VidCB)="row">
            <input type="text" v-model="row.item.VidCB" />
          </template>
          <template #cell(Period)="row">
            <input type="text" v-model="row.item.Period" />
          </template>
          <template #cell(Razmer)="row">
            <input type="text" v-model="row.item.Razmer" />
          </template>
          <template #cell(Svedenie)="row">
            <input type="text" v-model="row.item.Svedenie" />
          </template>
        </b-table>
      </div>

      <div class="EmitentAkcia">
        <h5>2.3. Акционеры (учредители) Эмитента, владеющие более чем 5% капитала компании суказанием их доли.</h5>
        <b-table
          bordered
          hover
          :items="EmitentAkcia"
          :fields="tblEmitentAkciafields"
          head-variant="light"
        >
          <template #cell(name)="row">
            <input type="text" v-model="row.item.name" />
          </template>
          <template #cell(name1)="row">
            <input type="text" v-model="row.item.name1" />
          </template>
          <template #cell(name2)="row">
            <input type="text" v-model="row.item.name2" />
          </template>
          <template #cell(name3)="row">
            <input type="text" v-model="row.item.name3" />
          </template>
        </b-table>
      </div>

      <div class="Owners">
        <h5>2.4. Лица, владеющие более чем 5 % иных, чем акции, ценных бумаг, выпущенных Эмитентом:</h5>
        <b-table bordered hover :items="Owners" :fields="tblOwnersfields" head-variant="light">
          <template #cell(title)="row">
            <input type="text" v-model="row.item.title" />
          </template>
          <template #cell(title1)="row">
            <input type="text" v-model="row.item.title1" />
          </template>
          <template #cell(title2)="row">
            <input type="text" v-model="row.item.title2" />
          </template>
          <template #cell(title3)="row">
            <input type="text" v-model="row.item.title3" />
          </template>
          <template #cell(title4)="row">
            <input type="text" v-model="row.item.title4" />
          </template>
        </b-table>
      </div>

      <div class="StructuraEmitent">
        <h5>
          2.5. Структура акционеров Эмитента и общее число акционеров эмитента по состоянию на
          конец отчетного периода.
        </h5>
        <b-table
          bordered
          hover
          :items="StructuraEmitent"
          :fields="tblStructuraEmintentfields"
          head-variant="light"
        >
          <template #cell(title)="row">
            <input type="text" v-model="row.item.title" />
          </template>
          <template #cell(Kolichestvo)="row">
            <input type="text" v-model="row.item.Kolichestvo" />
          </template>
          <template #cell(Kapital)="row">
            <input type="text" v-model="row.item.Kapital" />
          </template>
        </b-table>
      </div>

      <div class="PersonalSostav">
        <h5>
          2.6. Персональный состав исполнительного, наблюдательного и контрольного органов
          Эмитента, с указанием количества акций, которыми владеет каждый из них и доли в уставном
          капитале Эмитента:
        </h5>
        <b-table
          bordered
          hover
          :items="PersonalSostav"
          :fields="tblPersonalSostavfields"
          head-variant="light"
        >
          <template #cell(FIO)="row">
            <input type="text" v-model="row.item.FIO" />
          </template>
          <template #cell(Doljnost)="row">
            <input type="text" v-model="row.item.Doljnost" />
          </template>
          <template #cell(Dolya)="row">
            <input type="text" v-model="row.item.Dolya" />
          </template>
          <template #cell(KolichestvoAkciy)="row">
            <input type="text" v-model="row.item.KolichestvoAkciy" />
          </template>
          <template #cell(MestoRaboty)="row">
            <input type="text" v-model="row.item.MestoRaboty" />
          </template>
        </b-table>
      </div>

      <div class="ZasedaniyeEmitent">
        <h5>
          2.6. Персональный состав исполнительного, наблюдательного и контрольного органов
          Эмитента, с указанием количества акций, которыми владеет каждый из них и доли в уставном
          капитале Эмитента:
        </h5>
        <b-table
          bordered
          hover
          :items="ZasedaniyeEmitent"
          :fields="tblZasedaniyeEmitentfields"
          head-variant="light"
        >
          <template #cell(DataZasedaniye)="row">
            <input type="text" v-model="row.item.DataZasedaniye" />
          </template>
          <template #cell(Povestka)="row">
            <input type="text" v-model="row.item.Povestka" />
          </template>
        </b-table>
      </div>

      <div class="AdminSank">
        <h5>
          2.8. Сведения об административных санкциях, которые налагались на эмитента и его
          должностных лиц за отчетный квартал::
        </h5>
        <b-table
          bordered
          hover
          :items="AdminSank"
          :fields="tblAdminSankfields"
          head-variant="light"
        >
          <template #cell(Sank)="row">
            <input type="text" v-model="row.item.Sank" />
          </template>
          <template #cell(Nalojena)="row">
            <input type="text" v-model="row.item.Nalojena" />
          </template>
          <template #cell(Osnovnoi)="row">
            <input type="text" v-model="row.item.Osnovnoi" />
          </template>
          <template #cell(Ispolneniye)="row">
            <input type="text" v-model="row.item.Ispolneniye" />
          </template>
        </b-table>
      </div>

      <div class="TwoDotNine">
        <h5>
          2.9. Сведения о существенных (затрагивающих суммы размером более 5% от балансовой
          стоимости активов) судебных исках, возбужденных Эмитентом или находящихся в производстве
          против него, в истекшем отчетном периоде, либо в отношении судебных исков к его должностным
          лицам:
        </h5>
        <b-table
          bordered
          hover
          :items="TwoDotNine"
          :fields="tblTwoDotNinefields"
          head-variant="light"
        >
          <template #cell(title)="row">
            <input type="text" v-model="row.item.title" />
          </template>
          <template #cell(title1)="row">
            <input type="text" v-model="row.item.title1" />
          </template>
          <template #cell(title2)="row">
            <input type="text" v-model="row.item.title2" />
          </template>
          <template #cell(title3)="row">
            <input type="text" v-model="row.item.title3" />
          </template>
        </b-table>
      </div>
    </div>
    <div class="DeyatelEmitent">
      <div class="ChapterThree">
        <h4>3. Сведения о деятельности Эмитента за отчетный период</h4>
        <h5>
          3.1. Сведения об основных кредиторах Эмитента (для любых кредиторов, долг в отношении
          которых составляет более 10 % от общей суммы текущих обязательств Эмитента) по состоянию на
          конец текущего квартала:
        </h5>
        <b-table
          bordered
          hover
          :items="ChapterThree"
          :fields="tblChapterThreefields"
          head-variant="light"
        >
          <template #cell(name)="row">
            <input type="text" v-model="row.item.name" />
          </template>
          <template #cell(harakter)="row">
            <input type="text" v-model="row.item.harakter" />
          </template>
          <template #cell(dolya)="row">
            <input type="text" v-model="row.item.dolya" />
          </template>
        </b-table>
      </div>

      <div class="ThreeDotTwo">
        <h5>
          3.2. Сведения об основных кредиторах Эмитента по текущим и долгосрочным
          обязательствам Эмитента (при этом для текущих обязательств указываются только те кредиторы,
          текущая задолженность Эмитента перед которыми составляет более 10% от общего размера текущих
          обязательств, а для долгосрочных обязательств указываются все кредиторы):
        </h5>
        <h5>Текущие обязательства:</h5>
        <b-table
          bordered
          hover
          :items="ThreeDotTwo"
          :fields="tblThreeDotTwofields"
          head-variant="light"
        >
          <template #cell(title)="row">
            <input type="text" v-model="row.item.title" />
          </template>
          <template #cell(title1)="row">
            <input type="text" v-model="row.item.title1" />
          </template>
          <template #cell(title2)="row">
            <input type="text" v-model="row.item.title2" />
          </template>
        </b-table>

        <div class="Dolgosrochniy">
          <h5>Долгосрочные обязательства:</h5>
          <b-table
            bordered
            hover
            :items="Dolgosrochniy"
            :fields="tblDolgosrochniyfields"
            head-variant="light"
          >
            <template #cell(title3)="row">
              <input type="text" v-model="row.item.title3" />
            </template>
            <template #cell(title4)="row">
              <input type="text" v-model="row.item.title4" />
            </template>
            <template #cell(title5)="row">
              <input type="text" v-model="row.item.title5" />
            </template>
          </b-table>
        </div>
      </div>

      <div class="SdelkaData">
        <h5>
          3.3. Сведения о сделках Эмитента в течение отчетного периода, затрагивающих более 20%
          имущества эмитента, с пояснением их сущности.
        </h5>
        <b-table
          bordered
          hover
          :items="SdelkaData"
          :fields="tblSdelkaDatafields"
          head-variant="light"
        >
          <template #cell(data)="row">
            <input type="text" v-model="row.item.Data" />
          </template>
          <template #cell(sdelka)="row">
            <input type="text" v-model="row.item.sdelka" />
          </template>
          <template #cell(razmer)="row">
            <input type="text" v-model="row.item.razmer" />
          </template>
          <template #cell(ending)="row">
            <input type="text" v-model="row.item.ending" />
          </template>
        </b-table>
      </div>

      <div class="Normativ">
        <h5>
          3.4. Сведения о соблюдении обязательных нормативов, установленных законодательством
          (для Эмитентов, осуществляющих лицензионную деятельность):
        </h5>
        <b-table bordered hover :items="Normativ" :fields="tblNormativfields" head-variant="light">
          <template #cell(name)="row">
            <input type="text" v-model="row.item.name" />
          </template>
          <template #cell(razmernor)="row">
            <input type="text" v-model="row.item.razmernor" />
          </template>
          <template #cell(znacheniye)="row">
            <input type="text" v-model="row.item.znacheniye" />
          </template>
          <template #cell(koneckvartal)="row">
            <input type="text" v-model="row.item.koneckvartal" />
          </template>
        </b-table>
      </div>
    </div>
    <b-input-group
      prepend="Подпись уполномоченного сотрудника Эмитента, отвечающего за работу в Бирже "
      class="mt-3"
    >
      <b-form-input id="input-1" class="podpis"></b-form-input>
    </b-input-group>
    <p class="nameOwn">М. П.</p>
    <button class="btn btn-primary btn-block hide-print" @click="save">
      <span>Сохранить</span>
    </button>
  </div>
</template>

 <script>
import listing from '../mixins/listing.js';
export default {
  name: 'Listing.vue',
  mixins: [listing],
  data() {
    return {
      UchastieEmitent: [
        { TitleFirst: '', TitleSecond: '', TitleThird: '' },
        { TitleFirst: '', TitleSecond: '', TitleThird: '' },
        { TitleFirst: '', TitleSecond: '', TitleThird: '' },
        { TitleFirst: '', TitleSecond: '', TitleThird: '' },
      ],
      NachistDohoda: [
        { VidCB: '', Period: '', Razmer: '', Svedenie: '' },
        { VidCB: '', Period: '', Razmer: '', Svedenie: '' },
        { VidCB: '', Period: '', Razmer: '', Svedenie: '' },
        { VidCB: '', Period: '', Razmer: '', Svedenie: '' },
      ],
      EmitentAkcia: [
        { name: '', name1: '', name2: '', name3: '' },
        { name: '', name1: '', name2: '', name3: '' },
        { name: '', name1: '', name2: '', name3: '' },
        { name: '', name1: '', name2: '', name3: '' },
      ],
      Owners: [
        { title: '', title1: '', title2: '', title3: '', title4: '' },
        { title: '', title1: '', title2: '', title3: '', title4: '' },
        { title: '', title1: '', title2: '', title3: '', title4: '' },
        { title: '', title1: '', title2: '', title3: '', title4: '' },
      ],
      StructuraEmitent: [
        { Space: 'Физические лица', Kolichestvo: '', Kapital: '' },
        { Space: 'Юридические лица', Kolichestvo: '', Kapital: '' },
        { Space: 'Государство', Kolichestvo: '', Kapital: '' },
        { Space: 'Всего', Kolichestvo: '', Kapital: '' },
      ],
      PersonalSostav: [
        {
          FIO: '',
          Doljnost: '',
          Dolya: '',
          KolichestvoAkciy: '',
          MestoRaboty: '',
        },
        {
          FIO: '',
          Doljnost: '',
          Dolya: '',
          KolichestvoAkciy: '',
          MestoRaboty: '',
        },
      ],
      ZasedaniyeEmitent: [
        { DataZasedaniye: '', Povestka: '' },
        { DataZasedaniye: '', Povestka: '' },
      ],
      AdminSank: [
        { Sank: '', Nalojena: '', Osnovnoi: '', Ispolneniye: '' },
        { Sank: '', Nalojena: '', Osnovnoi: '', Ispolneniye: '' },
      ],
      TwoDotNine: [
        { title: '', title1: '', title2: '', title3: '' },
        { title: '', title1: '', title2: '', title3: '' },
      ],
      ChapterThree: [
        { name: '', harakter: '', dolya: '' },
        { name: '', harakter: '', dolya: '' },
      ],
      ThreeDotTwo: [
        { title: '', title1: '', title2: '' },
        { title: '', title1: '', title2: '' },
      ],
      Dolgosrochniy: [
        { title3: '', title4: '', title5: '' },
        { title3: '', title4: '', title5: '' },
      ],
      SdelkaData: [
        { data: '', sdelka: '', razmer: '', ending: '' },
        { data: '', sdelka: '', razmer: '', ending: '' },
      ],
      Normativ: [
        { data: '', sdelka: '', razmer: '', ending: '' },
        { data: '', sdelka: '', razmer: '', ending: '' },
      ],
      filial: [
        { Name: '', Vid: '', FIODirector: '', RazmerKapital: '' },
        { Name: '', Vid: '', FIODirector: '', RazmerKapital: '' },
      ],
      EmitentUpravlenie: [
        { date: '', povestka: '' },
        { date: '', povestka: '' },
      ],
    };
  },
  methods: {
    save() {
      let report = {
        UchastieEmitent: this.UchastieEmitent,
        NachistDohoda: this.NachistDohoda,
        EmitentAkcia: this.EmitentAkcia,
        Owners: this.Owners,
        StructuraEmitent: this.StructuraEmitent,
        PersonalSostav: this. PersonalSostav,
        ZasedaniyeEmitent: this.ZasedaniyeEmitent,
        AdminSank: this.AdminSank,
        TwoDotNine: this.TwoDotNine,
        ChapterThree: this.ChapterThree,
        ThreeDotTwo: this.ThreeDotTwo,
        Dolgosrochniy: this.Dolgosrochniy,
        SdelkaData: this.SdelkaData,
        Normativ: this.Normativ,
        filial: this.filial,
        EmitentUpravlenie: this.EmitentUpravlenie,
        write: this.write,
        oneeight: this.oneeight,
        podpis: this.podpis
      };
      console.log(report);
    },
  },
};
</script>
<style>
h4 {
  text-align: center;
  padding: 10px;
}
.nameOwn{
  text-align: end;
}
</style>