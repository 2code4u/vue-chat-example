import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat', {
  state: () => ({
    messages: mockMessages,
    contacts: mockContacts,
    currentContact: null
  }),

  actions: {
    resetState() {
      this.messages = []
      this.contacts = []
    },

    addNewMessage(message) {
      this.messages.push(message)
    },

    addContact(contact) {
      this.contacts.push(contact)
    },

    chooseContact(id) {
      this.currentContact = this.contacts.find(el => el.id === id)
    }
  }
})

const mockMessages = [
  {
    message_value: 'Приветствую, у меня возникилки проблемы с заказом',
    message_time: '12:47',
    author_id: '555555',
    author_name: 'Нина Вуильямс'
  },
  {
    message_value: 'И лагает личный кабинет',
    message_time: '12:48',
    author_id: '555555',
    author_name: 'Нина Вуильямс'
  },
  {
    message_value: 'Здравствуйте, все меры оперативно приняты',
    message_time: '12:50',
    author_id: '888888',
    author_name: 'Анна Леонхарт'
  },
  {
    message_value: 'Всё починилось, спасибо!',
    message_time: '12:58',
    author_id: '555555',
    author_name: 'Нина Вуильямс'
  },
  {
    message_value: 'Приветствую, у меня возникилки проблемы с заказом',
    message_time: '12:56',
    author_id: '555555',
    author_name: 'Нина Вуильямс'
  },
  {
    message_value: 'И лагает личный кабинет',
    message_time: '12:49',
    author_id: '555555',
    author_name: 'Нина Вуильямс'
  },
  {
    message_value: 'Здравствуйте, все меры оперативно приняты',
    message_time: '12:51',
    author_id: '888888',
    author_name: 'Анна Леонхарт'
  },
  {
    message_value: 'Всё починилось, спасибо!',
    message_time: '12:53',
    author_id: '555555',
    author_name: 'Нина Вуильямс'
  },
  {
    message_value: 'Приветствую, у меня возникилки проблемы с заказом',
    message_time: '12:57',
    author_id: '555555',
    author_name: 'Нина Вуильямс'
  },
  {
    message_value: 'И лагает личный кабинет',
    message_time: '12:42',
    author_id: '555555',
    author_name: 'Нина Вуильямс'
  },
  {
    message_value: 'Здравствуйте, все меры оперативно приняты',
    message_time: '12:52',
    author_id: '888888',
    author_name: 'Анна Леонхарт'
  },
  {
    message_value: 'Всё починилось, спасибо!',
    message_time: '12:55',
    author_id: '555555',
    author_name: 'Нина Вуильямс'
  },
  {
    message_value: 'Приветствую, у меня возникилки проблемы с заказом',
    message_time: '12:41',
    author_id: '555555',
    author_name: 'Нина Вуильямс'
  },
  {
    message_value: 'И лагает личный кабинет',
    message_time: '12:43',
    author_id: '555555',
    author_name: 'Нина Вуильямс'
  },
  {
    message_value: 'Здравствуйте, все меры оперативно приняты',
    message_time: '12:54',
    author_id: '888888',
    author_name: 'Анна Леонхарт'
  },
  {
    message_value: 'Всё починилось, спасибо!',
    message_time: '12:59',
    author_id: '555555',
    author_name: 'Нина Вуильямс'
  },
]

const mockContacts = [
  {
    id: '1111',
    avatar: '10',
    name: 'Елена К',
    infoDepature: [ 'Заказ номер №435435', 'Время начала 16:00', 'Время завершения 18:13', 'Спасение Эшли' ],
    infoClient: {
      fullName: 'Елена Мортис Рикимарновна',
      address: 'ул. Ленина 40 кв. 107',
      dateOfReg: '13.08.2020'
    },
    lastOperators: []
  },
  {
    id: '2222',
    avatar: '11',
    name: 'Олег М',
    infoDepature: [ 'Заказ номер №267675', 'Время начала 16:00', 'Время завершения 18:13', 'Зачистка Гаррадоров' ],
    infoClient: {
      fullName: 'Елена Мортис Рикимарновна',
      address: 'ул. Ленина 40 кв. 107',
      dateOfReg: '15.08.2020'
    },
    lastOperators: []
  },
  {
    id: '3333',
    avatar: '12',
    name: 'Катя С',
    infoDepature: [ 'Заказ номер №454532', 'Время начала 16:00', 'Время завершения 18:13', 'Паррирование бензопилы' ],
    infoClient: {
      fullName: 'Елена Мортис Рикимарновна',
      address: 'ул. Ленина 40 кв. 107',
      dateOfReg: '19.08.2020'
    },
    lastOperators: []
  },
  {
    id: '4444',
    avatar: '13',
    name: 'Петр Д',
    infoDepature: [ 'Заказ номер №2989898', 'Время начала 16:00', 'Время завершения 18:13', 'Посадка травы' ],
    infoClient: {
      fullName: 'Елена Мортис Рикимарновна',
      address: 'ул. Ленина 40 кв. 107',
      dateOfReg: '21.08.2020'
    },
    lastOperators: []
  },
]
