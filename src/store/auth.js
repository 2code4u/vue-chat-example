import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userData: {
      phone: '+7 (333) 555-22-11',
      employeeId: null
    },
  }),

  getters: {
    isAuthenticated: state => {
      return !!state.userData.employeeId && state.userData.access
    },
    userName: () => {
      return 'Анна Леонхарт'
    },
    userId: () => {
      return '888888'
    }
  },

  actions: {
    async authGetCode(phone) {
      try {
        const data = await this.$api.auth.getCode({ phone })

        if (data.result || data.timeout) {
          this.userData.phone = phone

          return data.timeout
        }
        throw new Error({
          text: 'неизвестная ошибка'
        })
      } catch (error) {}
    },

    async authLogin(params) {
      try {
        const { employeeId } = await this.$api.auth.login(params)

        if (employeeId) {
          this.userData.employeeId = employeeId

          return await this.authCheck()
        }
      } catch (error) {}
    },

    async authCheck() {
      try {
        const { employeeId, clientId } = await this.$api.auth.getAuthData()

        this.userData.employeeId = employeeId
        this.userData.clientId = clientId

        return employeeId
      } catch (e) {
        this.userData.employeeId = null
        return false
      }
    },

    async logout() {
      await this.$api.auth.logout()

      return await this.authCheck
    }
  },
})
