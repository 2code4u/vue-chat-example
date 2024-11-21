<template>
  <v-form>
    <v-card-text>
      <p>
        Мы отправили код на номер
        <span class="text-no-wrap">{{ userData.phone }}</span>
      </p>
      <v-text-field
        v-model="smscode"
        v-mask="mask"
        autofocus
        outlined
        autocomplete="off"
        label="Введите SMS-код"
        :error-messages="codeErrorCodes"
        :loading="loading"
        @input="handleInput"
      />
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        small
        @click="$emit('back')"
      >
        Изменить номер
      </v-btn>

      <v-spacer />

      <v-btn
        v-if="showButton"
        small
        color="primary"
        :disabled="timer > 0"
        @click="getCode"
      >
        <template v-if="!loading">
          Запросить код повторно
          <template v-if="timer">
            {{ timer }}
          </template>
        </template>
        <template v-else>
          Отправка...
        </template>
      </v-btn>
    </v-card-actions>
  </v-form>
</template>

<script>
  import { mask } from 'vue-the-mask'
  import { ref, computed } from 'vue'
  import { useAuthStore } from '@/store/auth'
  import router from '@/router'

  export default {
    name: 'AuthCode',
    directives: { mask },

    props: {
      timer: {
        type: Number,
        default: null,
      },
    },

    setup(props, { emit }) {
      const authStore = useAuthStore()
      const authLogin = authStore.authLogin
      const authGetCode = authStore.authGetCode

      const $router = router

      const loading = ref(false)
      const showButton = ref(true)
      const smscode = ref('')
      const mask = ref('####')
      const codeErrorCodes = ref([])

      const userData = computed(() => {
        return authStore.userData
      })

      const handleInput = (val) => {
        codeErrorCodes.value = []
        if (val && val.length === 4) {
          login()
        }
      }

      const login = async() => {
        if (loading.value) {
          return
        }

        loading.value = true
        showButton.value = false

        try {
          const status = await authLogin({
            phone: userData.value.phone,
            code: smscode.value,
          })

          if (status) {
            $router.push('/')
          }
        } catch (e) {
          codeErrorCodes.value.push(e)
          showButton.value = true
        }

        loading.value = false
      }

      const getCode = async() => {
        codeErrorCodes.value = []
        if (loading.value) {
          return
        }
        loading.value = true
        try {
          const timeout = await authGetCode(smscode.value)

          emit('submit', timeout)
        } catch ({ error }) {
          codeErrorCodes.value.push(error || error.text)
        }
        loading.value = false
      }

      return {
        authStore,
        userData,
        loading,
        showButton,
        smscode,
        mask,
        codeErrorCodes,
        authLogin,
        handleInput,
        login,
        getCode,
      }
    }
  }
</script>
