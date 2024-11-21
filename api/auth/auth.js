export default class AuthApi {
  constructor() {
    this.isAuth = false
  }

  async login(params) {
    if (!params?.phone || !params?.code) {
      return null
    }

    this.isAuth = true
    return {
      'employeeId': crypto.randomUUID()
    }
  }

  async getAuthData() {
    if(!this.isAuth) {
      return {}
    }

    return {
      'employeeId': crypto.randomUUID(),
      'clientId': crypto.randomUUID()
    }
  }

  async getCode(phone) {

    return {
      'result': true,
      'timeout': 60
    }
  }

  async logout() {
    this.isAuth = false
  }
}