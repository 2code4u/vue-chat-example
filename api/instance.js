import AuithApi from './auth/auth.js'

export default class Api {
  constructor() {
    this.auth = new AuithApi()
  }
}