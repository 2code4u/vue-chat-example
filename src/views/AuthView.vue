<template>
  <v-container
    fluid
    fill-height
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        xs="12"
        sm="12"
        md="6"
        lg="4"
      >
        <v-card elevation="1">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>Авторизация</v-toolbar-title>
          </v-toolbar>
          <auth-phone
            v-if="!codeSent"
            @submit="formGetPhoneSubmit"
          />
          <auth-code
            v-else
            :timer="timer"
            class="authorization__form"
            @back="back"
            @submit="formGetPhoneSubmit"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import AuthPhone from '@/components/Auth/AuthPhone'
  import AuthCode from '@/components/Auth/AuthCode'

  export default {
    name: 'AuthView',

    components: {
      AuthPhone,
      AuthCode,
    },

    data() {
      return {
        codeSent: false,
        timer: 0,
      }
    },

    methods: {
      formGetPhoneSubmit(timeout) {
        this.codeSent = true
        this.timer = timeout

        this.setTimer()
      },

      setTimer() {
        const timer = setInterval(() => {
          if (this.timer) {
            this.timer--
          } else {
            clearInterval(timer)
          }
        }, 1000)
      },

      back() {
        this.codeSent = false
      },
    },
  }
</script>
