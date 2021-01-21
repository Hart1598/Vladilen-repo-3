<template>
  <div v-if="task" class="card">
    <h2>{{  task.title  }}</h2>
    <p><strong>Статус</strong>: <AppStatus :status="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ task.data }}</p>
    <p><strong>Описание</strong>: {{ task.desc }}</p>
    <div>
      <button class="btn" @click.prevent="changeStatus('pending')">Взять в работу</button>
      <button class="btn primary " @click.prevent="changeStatus('done')">Завершить</button>
      <button class="btn danger" @click.prevent="changeStatus('cancelled')">Отменить</button>
    </div>
  </div>
  <h3 v-else class="text-white center">
    Задачи с id = <strong>{{ id }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
export default {
  components: {AppStatus},
  setup(){
    const route = useRoute()
    const store = useStore()

    store.commit('updateTask')
    const id = route.params.id
    const tasks = store.getters.getTasks

    let task = tasks.find(t => t.id == id)

    const changeStatus = status => {
      store.commit('changeStatus', {status, id})
    }




    return{
      task,
      id,
      changeStatus
    }
  }
}
</script>

<style scoped>

</style>