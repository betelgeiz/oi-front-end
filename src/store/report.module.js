import ReportService from '../services/report.service'; // axios запросы на бэк энд


export const report = {
  namespaced: true,
  state: {
    list: [],
    confirm: false,
    insert: false,
    updateReport: false,
    send: false,
    back: false,
    reject: false,
    link: false
  },
  actions: {
    insert({ commit }, {typedoc, xmldoc, sender, status, kvartal}) {
      return ReportService.insertReport(typedoc, xmldoc, sender, status, kvartal).then(
        () => {
          commit('insertSuccess');
          return Promise.resolve(true);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },

    updateReport({ commit }, {id, doc, status}) {
      return ReportService.updateReport(id, doc, status).then(
        () => {
          commit('updateReportStatus');
          return true;
        },
        error => {
          return Promise.reject(error);
        }
      );
    },

    getList({commit}, type) {
      return ReportService.getCompanyReports(type).then(
        (dates) => {
          commit('listStatus', dates.data)
          return Promise.resolve(true);
        },
        error => {
          return Promise.reject(error)
        }
      )
    },

    confirm({commit}, {id, interrefer}) {
      return ReportService.confirmReport(id, interrefer).then(
        () => {
          commit('confirmReport')
          return Promise.resolve(true)
        },
        error => {
          return Promise.reject(error)
        }
      )
    },

    sendReport({commit}, {id, type}) {
      return ReportService.sendReport(id, type).then(
        () => {
          commit('sendReport')
          return Promise.resolve(true)
        },
        error => {
          return Promise.reject(error)
        }
      )
    },

    backReport({commit}, id) {
      return ReportService.backReport(id).then(
        () => {
          commit('backReport')
          return Promise.resolve(true)
        },
        error => {
          return Promise.reject(error)
        }
      )
    },

    deleteReport({commit}, id) {
      return ReportService.deleteReport(id).then(
        () => {
          return Promise.resolve(true)
        },
        error => {
          return Promise.reject(error)
        }
      )
    },

    rejectReport({commit}, id) {
      return ReportService.rejectReport(id).then(
        () => {
          commit('rejectReport')
          return Promise.resolve(true)
        },
        error => {
          return Promise.reject(error)
        }
      )
    },

    nullifyList({commit}) {
      commit('nullify')
    },

    addLink({commit}, {idfact, link}) {
      return ReportService.addLinkToFact(idfact, link).then(
        () => {
          commit('link')
          return Promise.resolve(true)
        },
        error => {
          return Promise.reject(error)
        }
      )
    }
  },
  mutations: {
    listStatus (state, dates) {
      state.list = dates
    },
    updateReportStatus (state) {
      state.updateReport = true
    },
    confirmReport (state) {
      state.confirm = true
    },
    insertSuccess (state) {
      state.inser = true
    },
    sendReport (state) {
      state.send = true
    },
    backReport (state) {
      state.back = true
    },
    rejectReport (state) {
      state.reject = true
    },
    nullify (state) {
      state.list = []
    },
    link(state) {
      state.link = true
    }
  }
};
