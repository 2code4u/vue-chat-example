<template>
  <v-navigation-drawer
    app
    permanent
  >
    <v-list>
      <v-list-item class="d-flex between align-center">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/women/24.jpg" />
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Алиса Зазеркальевна
          </v-list-item-title>
          <v-list-item-subtitle> Отдел BSAA </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider />

    <div class="px-3 py-6">
      <v-btn
        color="secondary"
        block
      >
        Архив чатов
      </v-btn>
    </div>

    <v-divider />

    <v-list v-if="currentContact">
      <v-list-item
        v-for="contact in contactsList"
        :key="contact.id"
        :class="{'active-chat': contact.id === currentContact.id}"
        class="d-flex between align-center"
        @click="chooseContact(contact.id)"
      >
        <v-avatar
          class="d-block mr-4 my-4"
          color="grey darken-1"
          size="36"
        >
          <v-img :src="`https://randomuser.me/api/portraits/women/${contact.avatar}.jpg`" />
        </v-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ contact.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template #append>
      <div class="px-3 mb-12">
        <v-btn
          color="primary"
          block
        >
          Взять чат
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
  import { useChatStore } from '@/store/chat'
  import { computed, onMounted } from 'vue'

  export default {
    setup() {
      const chatStore = useChatStore()

      const contactsList = computed(() => {
        return chatStore.contacts
      })

      const currentContact = computed(() => {
        return chatStore.currentContact
      })

      const chooseContact = (contactId) => {
        chatStore.chooseContact(contactId)
      }

      onMounted(() => {
        const firstContact = contactsList.value[0]
        if (firstContact) {
          chooseContact(firstContact.id)
        }
      })

      return {
        contactsList,
        currentContact,
        chooseContact,
      }
    },
  }
</script>

<style lang="postcss">
  .active-chat {
    background-color: #FDF8F4;
  }
</style>
