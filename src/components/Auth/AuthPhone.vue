<template>
  <v-form
    ref="form"
    @submit.prevent="getCode"
  >
    <v-card-text>
      <v-text-field
        v-model="phone"
        v-mask="mask"
        autofocus
        outlined
        label="Введите номер телефона"
        :error-messages="codeErrorCodes"
        :loading="codeLoading"
        @input="handleInput"
      />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
        color="primary"
        @click="getCode"
      >
        Получить код
      </v-btn>
    </v-card-actions>
  </v-form>
</template>

<script>
  import { mask } from 'vue-the-mask'
  import { useAuthStore } from '@/store/auth'
  import { ref } from 'vue'

  export default {
    name: 'AuthPhone',
    emits: [ 'submit' ],
    directives: { mask },

    setup(props, { emit }) {
      const authStore = useAuthStore()

      const codeErrorCodes = ref([])
      const codeLoading = ref(false)
      const mask = ref('+7 (###) ###-##-##')
      const phone = ref('')

      const handleInput = () => {
        codeErrorCodes.value = []
      }

      const getCode = async() => {
        codeErrorCodes.value = []
        if (codeLoading.value) {
          return null
        }
        codeLoading.value = true

        try {
          const timeout = await authStore.authGetCode(phone.value)
          emit('submit', timeout)
        } catch (error) {
          codeErrorCodes.value.push(error && error.text)
        }
        codeLoading.value = false
      }

      return {
        authStore,
        codeErrorCodes,
        codeLoading,
        mask,
        phone,
        handleInput,
        getCode,
      }
    },
  }
</script>
