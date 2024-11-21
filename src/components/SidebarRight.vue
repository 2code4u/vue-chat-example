<template>
  <v-navigation-drawer
    app
    right
    permanent
    width="324"
  >
    <v-expansion-panels
      v-if="currentContact"
      multiple
      class="pa-4"
    >
      <v-expansion-panel class="my-4">
        <v-expansion-panel-header>
          <h3>Информация по выезду</h3>
        </v-expansion-panel-header>

        <v-expansion-panel-content
          v-for="info in currentContact.infoDepature"
          :key="info"
        >
          {{ info }}
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel class="my-4">
        <v-expansion-panel-header>
          <h3>Информация о клиенте</h3>
        </v-expansion-panel-header>

        <v-expansion-panel-content
          v-for="info in currentContact.infoClient"
          :key="info"
        >
          {{ info }}
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel class="my-4">
        <v-expansion-panel-header>
          <h3>Предыдущие операторы</h3>
        </v-expansion-panel-header>

        <v-expansion-panel-content
          v-for="item in 5"
          :key="item"
        >
          Оператор №{{ item }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-navigation-drawer>
</template>

<script>
  import { useChatStore } from '@/store/chat'
  import { computed } from 'vue'

  export default {
    setup() {
      const chatStore = useChatStore()

      const currentContact = computed(() => {
        return chatStore.currentContact
      })

      return {
        currentContact,
      }
    },
  }
</script>
