<template>
  <q-page class="flex flex-center">
    <q-card flat bordered class="full-width">
      <q-card-section>
        <q-chat-message
          v-for="(message, i) in messages"
          :key="i"
          :name="message.UserName"
          :text="[message.MessageText]"
          :sent="message.UserName == userName"

        />
      </q-card-section>
    </q-card>
    <!-- Панель действий -->
    <q-card class="full-width">
      <q-card-section>
        <q-input
          style="width: 40%; min-width: 200px"
          outlined
          dense
          v-model="userName"
          label="UserName"
        />
      </q-card-section>
      <q-card-section class="flex">
        <q-input
          class="mr-10"
          style="flex-grow: 1"
          outlined
          dense
          v-model="messageText"
          label="MessageText"
        />
        <q-btn
          depressed
          color="primary"
          @click="onSendClick"
          :disabled="!messageText.length"
        >
          Оправить
        </q-btn>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from 'vuex'
import API from "../api/api.js";

export default {
  name: 'IndexPage',
  setup () {
    const $store = useStore()
    const userName = computed({
      get: () => $store.state.mes.userName,
      set: val => {
        $store.commit('mes/updateUserNameState', val)
      }
      })
    const messages = computed({
      get: () => $store.state.mes.messages,
      set: val => {
        $store.commit('mes/updateMessagesState', val)
      }
    })
    const intervalCtx = computed({
      get: () => $store.state.mes.intervalCtx,
      set: val => {
        $store.commit('mes/updateIntervalCtxState', val)
      }
    })
    const lastMsgID = computed({
      get: () => $store.state.mes.lastMsgID,
      set: val => {
        $store.commit('mes/updateLastMsgIDState', val)
      }
    })
    const messageText = computed({
      get: () => $store.state.mes.messageText,
      set: val => {
        $store.commit('mes/updateMessageTextState', val)
      }
    })
    return {
      $store, userName, messages, intervalCtx, lastMsgID,  messageText,

    }
  },
  mounted() {
    // this.userName = "Login";
    this.intervalCtx = setInterval(async () => {
      try {
        const msg = await API.getMessage(this.lastMsgID);
        if (typeof msg === typeof {}) {
          this.messages=msg
          this.lastMsgID++
        }
      } catch (e) {}
    }, 1000);
  },
  unmounted() {
    clearInterval(this.intervalCtx);
  },
  methods: {
    // Реакция на кнопку отправки
    async onSendClick() {
      // на бекэнде
      try {
        await API.sendMessage(this.userName, this.messageText);
        console.log("cleared");
        this.message = "";
      } catch (e) {
        console.error(e);
      }
      //на фронте
      // var currenttime = new Date()
      // this.messages={
      //   UserName: this.userName,
      //   MessageText: this.messageText,
      //   TimeStamp: currenttime.getHours() + ":" + currenttime.getMinutes() + ":" + currenttime.getSeconds()
      // }

    },
  },
}
</script>
<style scoped >
.flex-container {
    display: flex;
    border:1px solid #ccc;
    flex-direction: column  ;
    flex-wrap: wrap;
}



</style>
