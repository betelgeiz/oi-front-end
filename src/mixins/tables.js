export default {
    data() {
        return {
            kvartal: '',
            year: '',
            selected: 'RKV01',
            options: [
                { text: 'Квартальный отчет', value: 'RKV01' },
                { text: 'Годовой отчет', value: 'RKV02' }
            ],
            info: {
                name: '',
                opforma: '',
                address: '',
                activity: '',
                owners: '',
                workers: ''
            },
            editIndex: null,
            originalData: null,
            items: [{ code: '0', name: '0', description: '0', qty: '0' }],
            tax: 10,
            tblbalancefields: [
                { key: 'Code', headerTitle: 'Код строк', label: 'Код строк' },
                { key: 'TItle', headerTitle: ' ', label: ' ', variant: 'transparent text-left' },
                {
                    key: 'Start',
                    headerTitle: 'Начало отчетного периода, тыс.сом',
                    label: 'Начало отчетного периода, тыс.сом'
                },
                {
                    key: 'End',
                    headerTitle: 'На конец отчетного периода, тыс сом',
                    label: 'На конец отчетного периода, тыс сом'
                }
            ],
            tblprofitfields: [
                { key: 'Code', headerTitle: 'Код строк', label: 'Код строк' },
                { key: 'TItle', headerTitle: ' ', label: ' ', variant: 'transparent text-left' },
                {
                    key: 'Start',
                    headerTitle: 'Начало отчетного периода, тыс.сом',
                    label: 'Начало отчетного периода, тыс.сом'
                },
                {
                    key: 'End',
                    headerTitle: 'На конец отчетного периода, тыс сом',
                    label: 'На конец отчетного периода, тыс сом'
                }
            ],
            tblcapitalfields: [
                { key: 'Code', headerTitle: 'Код строк', label: 'Код строк' },
                { key: 'TItle', headerTitle: ' ', label: ' ', variant: 'transparent text-left' },
                {
                    key: 'Start',
                    headerTitle: 'Начало отчетного периода, тыс.сом',
                    label: 'Начало отчетного периода, тыс.сом'
                },
                {
                    key: 'End',
                    headerTitle: 'На конец отчетного периода, тыс сом',
                    label: 'На конец отчетного периода, тыс сом'
                }
            ],
            tblprofititems: [
                { Code: '010', TItle: 'Валовая прибыль', Start: '', End: '' },
                {
                    Code: '020',
                    TItle:
                        'Доходы и расходы от прочей операционной деятельности (доходы - расходы)',
                    Start: '',
                    End: ''
                },
                { Code: '030', TItle: 'Операционные расходы', Start: '', End: '' },
                {
                    Code: '040',
                    TItle: 'Прибыль/убыток от операционной деятельности (010+020-030)',
                    Start: '',
                    End: ''
                },
                {
                    Code: '050',
                    TItle: 'Доходы и расходы от неоперационной деятельности',
                    Start: '',
                    End: ''
                },
                {
                    Code: '060',
                    TItle: 'Прибыль (убыток) до вычета налогов (040+050)',
                    Start: '',
                    End: ''
                },
                {
                    Code: '070',
                    TItle: 'Расходы по налогу на прибыль',
                    Start: '',
                    End: ''
                },
                {
                    Code: '080',
                    TItle: 'Прибыль (убыток) от обычной деятельности (060-070)',
                    Start: '',
                    End: ''
                },
                {
                    Code: '090',
                    TItle: 'Чрезвычайные статьи за минусом налога на прибыль',
                    Start: '',
                    End: ''
                },
                {
                    Code: '100',
                    TItle: 'Чистая прибыль (убыток) отчетного периода (080+090)',
                    Start: '',
                    End: ''
                }
            ],
            
            tblcapitalitems: [
                { Code: '010', TItle: "", Start: '', End: '' },
                {
                    Code: '020',
                    TItle:
                        'Изменения в учетной политике и исправление существенных ошибок',
                    Start: '',
                    End: ''
                },
                { Code: '030', TItle: 'Пересчитанное сальдо', Start: '', End: '' },
                {
                    Code: '040',
                    TItle:
                        'Чистая прибыль или убытки, не признанные в отчете о прибылях и убытках',
                    Start: '',
                    End: ''
                },
                {
                    Code: '050',
                    TItle: 'Чистая прибыль (убытки) за отчетный период',
                    Start: '',
                    End: ''
                },
                { Code: '060', TItle: 'Дивиденды', Start: '', End: '' },
                { Code: '070', TItle: 'Эмиссия акций', Start: '', End: '' },
                {
                    Code: '080',
                    TItle: 'Ограничение прибыли к распределению',
                    Start: '',
                    End: ''
                },
                {
                    Code: '090',
                    TItle: 'Изменение уставного капитала',
                    Start: '',
                    End: ''
                },
                { Code: '100', TItle: "", Start: '', End: '' }
            ],
            textareas: {
                placement: '',
                funds: '',
                investment: '',
                income: '',
                deal: '',
                audit: ''
            },
            tblbalanceitems: [
                { Code: '', TItle: 'Активы' },
                { Code: '010', TItle: '1. Оборотные активы', Start: '', End: '' },
                { Code: '020', TItle: '2. Внеоборотные активы', Start: '', End: '' },
                {
                    Code: '030',
                    TItle: '3. Долгосрочная дебиторская задолженность',
                    Start: '',
                    End: ''
                },
                {
                    Code: '040',
                    TItle: '4. Краткосрочная дебиторская задолженность',
                    Start: '',
                    End: ''
                },
                {
                    Code: '050',
                    TItle: 'Итого активы (010+020+030+040)',
                    Start: '',
                    End: ''
                },
                { Code: '', TItle: 'Обязательства и капитал' },
                {
                    Code: '060',
                    TItle: '1. Краткосрочные обязательства',
                    Start: '',
                    End: ''
                },
                {
                    Code: '070',
                    TItle: '2. Долгосрочные обязательства',
                    Start: '',
                    End: ''
                },
                {
                    Code: '080',
                    TItle: 'Итого обязательства (060+070)',
                    Start: '',
                    End: ''
                },
                { Code: '090', TItle: 'Собственный капитал', Start: '', End: '' },
                { TItle: '1. Уставный капитал', Start: '', End: '' },
                { TItle: '2. Дополнительный оплаченный капитал', Start: '', End: '' },
                { TItle: '3. Нераспределенная прибыль', Start: '', End: '' },
                { TItle: '4. Резервный капитал', Start: '', End: '' },
                {
                    Code: '100',
                    TItle: 'Итого обязательства и собственный капитал (060+070+090)',
                    Start: '',
                    End: ''
                }
            ],
            tblfactfields: [
                { key: 'Name', headerTitle: 'Наименование факта', label: 'Наименование факта' },
                { key: 'DateCreate', headerTitle: 'Дата появления факта', label: 'Дата появления факта'},
                {
                    key: 'Influence',
                    headerTitle: 'Влиянии факта на деятельность',
                    label: 'Влиянии факта на деятельность'
                },
                {
                    key: 'DateDisclosure',
                    headerTitle: 'Дата и форма раскрытия',
                    label: 'Дата и форма раскрытия'
                }
            ],
            tblfactitems: [
                {Name: '', DateCreate: '', Influence: '', DateDisclosure: ''}
            ]
        }
    },

    computed: {
        
        auditView: function() {
            if (this.selected == 'RKV02') { return true}

            return false
        },

        assets_Start: function() { // Итого активы (010+020+030+040)
            
            let arr = [this.tblbalanceitems[4].Start, this.tblbalanceitems[3].Start, this.tblbalanceitems[2].Start, this.tblbalanceitems[1].Start]
            this.tblbalanceitems[5].Start = this.totalSum(arr)
            return this.tblbalanceitems[5].Start
            
        },
        assets_End: function() { // Итого активы (010+020+030+040)

            let arr = [this.tblbalanceitems[4].End, this.tblbalanceitems[3].End, this.tblbalanceitems[2].End, this.tblbalanceitems[1].End]
            this.tblbalanceitems[5].End = this.totalSum(arr)

            return this.tblbalanceitems[5].End
        },
        liabilities_Start: function() { // Итого обязательства (060+070)
            let arr = [this.tblbalanceitems[7].Start, this.tblbalanceitems[8].Start]
            
            this.tblbalanceitems[9].Start = this.totalSum(arr)

            return this.tblbalanceitems[9].Start
        }, 
        liabilities_End: function() { // Итого обязательства (060+070)
            let arr = [this.tblbalanceitems[7].End, this.tblbalanceitems[8].End]
            
            this.tblbalanceitems[9].End = this.totalSum(arr)

            return this.tblbalanceitems[9].End
        },
        totaltblbalance_Start: function() { //Итого обязательства и собственный капитал (060+070+090)
            let arr = [this.tblbalanceitems[7].Start, this.tblbalanceitems[8].Start, this.tblbalanceitems[10].Start]
            
            this.tblbalanceitems[15].Start = this.totalSum(arr)

            return this.tblbalanceitems[15].Start
        },
        totaltblbalance_End: function() { // Итого обязательства и собственный капитал (060+070+090)
            let arr = [this.tblbalanceitems[7].End, this.tblbalanceitems[8].End, this.tblbalanceitems[10].End]
            
            this.tblbalanceitems[15].End = this.totalSum(arr)

            return this.tblbalanceitems[15].End
        },

        operatingActivities_Start: function() { // Прибыль/убыток от операционной деятельности (010+020-030)
            let arr = [this.tblprofititems[0].Start, this.tblprofititems[1].Start]

            this.tblprofititems[3].Start = this.minus(this.totalSum(arr), this.tblprofititems[2].Start)

            return this.tblprofititems[3].Start
        },
        operatingActivities_End: function() { // Прибыль/убыток от операционной деятельности (010+020-030)
            let arr = [this.tblprofititems[0].End, this.tblprofititems[1].End]

            this.tblprofititems[3].End = this.minus(this.totalSum(arr), this.tblprofititems[2].End)

            return this.tblprofititems[3].End
        },
        beforeTax_Start: function () { // Прибыль (убыток) до вычета налогов (040+050)
            let arr = [this.tblprofititems[3].Start, this.tblprofititems[4].Start]

            this.tblprofititems[5].Start = this.totalSum(arr)

            return this.tblprofititems[5].Start
        },
        beforeTax_End: function () { // Прибыль (убыток) до вычета налогов (040+050)
            let arr = [this.tblprofititems[3].End, this.tblprofititems[4].End]

            this.tblprofititems[5].End = this.totalSum(arr)

            return this.tblprofititems[5].End
        },
        activities_Start: function () { // Прибыль (убыток) от обычной деятельности (060-070)

            this.tblprofititems[7].Start = this.minus(this.tblprofititems[5].Start, this.tblprofititems[6].Start)

            return this.tblprofititems[7].Start
        },
        activities_End: function () { // Прибыль (убыток) от обычной деятельности (060-070)

            this.tblprofititems[7].End = this.minus(this.tblprofititems[5].End, this.tblprofititems[6].End)

            return this.tblprofititems[7].End
        },
        netprofit_Start: function () { // Чистая прибыль (убыток) отчетного периода (080+090)
            let arr = [this.tblprofititems[7].Start, this.tblprofititems[8].Start]

            this.tblprofititems[9].Start = this.totalSum(arr)

            return this.tblprofititems[9].Start
        },
        netprofit_End: function () { // Чистая прибыль (убыток) отчетного периода (080+090)
            let arr = [this.tblprofititems[7].End, this.tblprofititems[8].End]

            this.tblprofititems[9].End = this.totalSum(arr)

            return this.tblprofititems[9].End
        }
    },

    methods: {
        add() {
            this.originalData = null;
            this.items.push({ code: '', name: '', description: '', qty: '' });
            this.editIndex = this.items.length - 1;
        },
        addFact() {
            this.tblfactitems.push({Name: '', DateCreate: '', Influence: '', DateDisclosure: ''})
        },
        edit(item, index) {
            this.originalData = Object.assign({}, item);
            this.editIndex = index;
        },
        cancel(item) {
            this.editIndex = null;
            if (!this.originalData) {
                this.items.splice(this.items.indexOf(item), 1);
                return;
            }
            Object.assign(item, this.originalData);
            this.originalData = null;
        },
        remove(item, index) {
            this.items.splice(index, 1);
        },
        removeInFact(item, index) {
            this.tblfactitems.splice(index, 1);
        },
        save() {
            this.originalData = null;
            this.editIndex = null;
        },

        totalSum(arr) {
            let sum = 0
            for(let i = 0; i < arr.length; i++) {
                sum += +Number(arr[i].replace(/\s/g, '').replace(/,/, '.'))
            }

            return sum.toLocaleString('ru')
        },

        minus(num1, num2) {
            let sum = Number(num1.replace(/\s/g, '').replace(/,/, '.')) - Number(num2.replace(/\s/g, '').replace(/,/, '.'))

            return sum.toLocaleString('ru')
        }
    }
}



