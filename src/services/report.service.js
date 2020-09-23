import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://m.kse.kg/api',
    timeout: 1000
});

instance.interceptors.request.use(
    (response) => {
        let token = localStorage.getItem('token')

        if (token) {
            response.headers['Authorization'] = `Bearer ${token}`
        }

        return response
    },

    (error) => {
      return error
    }
)

instance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('role')
            window.location = "/login"
        } else {
            console.log(error)
        }
    }
)



class ReportService {

    getInfoCompanyById() {  // Получение данных компании по токену, для заполнения шапки отчета
        return instance.get('/reports', { headers: { 'Content-Type': 'Applicationjson' } })
    }
    getCompanyReports(type) {   // Получение всех отчетов компании по токену
        return instance.get('/reports/allreports/' + type, { headers: { 'Content-Type': 'Applicationjson' } })
    }
    getReportById(id) {     // Получение отчета по переданному id отчта
        return instance.get('/reports/' + id, { headers: { 'Content-Type': 'Applicationjson' } })
    }
    insertReport(typedoc, xmldoc, sender, status, kvartal) {    // Добавить отчет
        return instance.post('/reports', { typedoc, xmldoc, sender, status, kvartal })
    }

    getReportsFromAdmin() {     // Список отчетов для админа
        return instance.get('/admin', { headers: { 'Content-Type': 'Applicationjson' } })
    }

    confirmReport(id, interrefer) {     // Квитовка отчета, для админа
        return instance.put('/reports', { id, interrefer })
    }

    updateReport(id, doc, status) {     // Изменить отчет
        return instance.put('/reports/' + id, {id, doc, status})
    }

    sendReport (id, type) {   // Изменить статус отчета на отправлен
        return instance.put('/reports/status/' + id, {id, type})
    }

    backReport(id) {
        return instance.put('/reports/back/' + id)
    }

    rejectReport(id) {
        return instance.put('/reports/reject/' + id)
    }

    test(doAddEntry, BlogId, mEntryText, mEntryName, mEntryCompany, title) {
        return axios.post('https://www.kse.kg/modules/Blog/addFact.php', doAddEntry, BlogId, mEntryText, mEntryName, mEntryCompany, title)
    }

    addReportInKSE(doc, kvartal) {
        return axios.post('https://www.kse.kg/modules/Blog/addReport.php', {doc, kvartal})
    }

    addLinkToFact(idfact, link) {
        return instance.put('/reports/link/' + link, {idfact, link})
    }

    deleteReport(id) {
        return instance.delete('/reports/' + id)
    }

    deleteReportInKSE(id, type) {
        return axios.post('https://www.kse.kg/modules/Blog/delReport.php', {id, type})
    }
    
}

export default new ReportService();