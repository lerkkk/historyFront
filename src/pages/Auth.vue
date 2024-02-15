<template>
  <q-page class="flex flex-center">
    <q-card>
      <q-card-section>
          <h3>Аторизация</h3>
      </q-card-section>
      <q-card-section>
        <q-input 
        class="mr-10"
        dense
        outlined
        label="User name"
        v-model="userName"
        ></q-input>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex'


export default defineComponent({
  name: 'AuthIndex',
  setup(){
    const $store = useStore()
    const userName = computed({
      get: () => $store.state.mes.userName,
      set: val => {
        $store.commit('mes/updateUserNameState', val)
      }
      }) 
      return{
      $store, userName
      }
  }
  
})
</script>
