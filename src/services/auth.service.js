import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://m.kse.kg/api/users/',
  timeout: 1000
});

const API_URL = 'https://m.kse.kg/api/users/';

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

class AuthService {
  async login(user) {
    const response = await instance
      .post(API_URL + 'auth', {
        login: user.username,
        password: user.password
      })
    if (response.data.jwt) {
      await localStorage.setItem('token', response.data.jwt);
      await localStorage.setItem('role', response.data.role)
      await localStorage.setItem('changePas', response.data.changePas)
      if (user.username == 'fin')
        localStorage.setItem('fin', true)
    }
    return response.data.jwt;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('fin');
  }

  info() {
    return instance.get('me', { headers: { 'Content-Type': 'Applicationjson', 'Authorization': 'Bearer ' + localStorage.getItem('token') } })
  }

  update(login, fullname) {
    return instance.put('', {login, fullname}, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } })
  }

  updatepassword(password) {
    //console.log('service', password)
    return instance.put('password', {password})
  }

}

export default new AuthService();
