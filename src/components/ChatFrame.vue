<template>
  <v-navigation-drawer
    permanent
    absolute
    width="100%"
    class="chat-frame"
  >
    <v-container class="pa-0">
      <v-col class="chat-frame__list border px-3">
        <v-row
          v-for="message in messagesList"
          :key="message.message_time"
          no-gutters
        >
          <template v-if="checkAuthorMessage(message.author_id)">
            <v-spacer />
            <v-card
              class="mt-4"
              color="grey"
            >
              <v-list-item>
                <v-list-item-content>
                  <div class="mb-2">
                    {{ message.message_value }}
                  </div>
                  <v-list-item-subtitle class="text-right">
                    {{ message.message_time }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </template>

          <template v-else>
            <v-card class="mt-4">
              <v-list-item>
                <v-list-item-content>
                  <div class="mb-2">
                    {{ message.message_value }}
                  </div>
                  <v-list-item-subtitle class="text-right">
                    {{ message.message_time }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </template>
        </v-row>
      </v-col>

      <div class="chat-frame__message-bar pa-3 pb-7">
        <v-text-field
          v-model="message"
          append-outer-icon="mdi-send"
          clear-icon="mdi-close-circle"
          filled
          clearable
          hide-details
          label="Сообщение"
          type="text"
          @click:append-outer="sendMessage(message)"
          @keydown.enter="sendMessage(message)"
        />
      </div>
    </v-container>
  </v-navigation-drawer>
</template>
<script>
  import { computed, onMounted, ref } from 'vue'
  import { useAuthStore } from '@/store/auth'
  import { useChatStore } from '@/store/chat'

  export default {
    setup() {
      const chatStore = useChatStore()
      const authStore = useAuthStore()
      const message = ref('')

      const messagesList = computed(() => {
        return chatStore.messages
      })
      const userId = computed(() => {
        return authStore.userId
      })

      const checkAuthorMessage = (authorId) => {
        return authorId === userId.value
      }
      const sendMessage = (text) => {
        if (text === '' || text === null || text.length > 256) {
          return null
        }
        // socket.emit('newMessage', {
        //  message
        // })

        chatStore.addNewMessage({
          message_value: text,
          message_time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          author_id: userId.value,
          author_name: authStore.userName
        })

        message.value = ''
      }

      onMounted(() => {
        // socket.on('newMessage', message => {
        //   chatStore.addNewMessage(message)
        // })
      })

      return {
        message,
        messagesList,
        userId,
        sendMessage,
        checkAuthorMessage
      }
    },
  }
</script>

<style lang="scss">
  .chat-frame {
    width: 100%;
    padding-bottom: 97px !important;

    &__message-bar {
      max-width: inherit;
      width: inherit;
      position: fixed;
      bottom: 0px;
      background-color: white;
      border-top: 1px solid #cbc9c9;
    }
  }
</style>
