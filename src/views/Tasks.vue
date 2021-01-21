<template>
  <h1 v-if="!tasks" class="text-white center">Задач пока нет</h1>
  <template v-else >
    <h3 class="text-white">Всего активных задач: {{  activeTasks  }}</h3>
    <Card
      v-for="task in tasks"
      :key="task.id"
      :id="task.id"
      :title="task.title"
      :status="task.status"
      :data="task.data"
    ></Card>
  </template>
</template>

<script>
import Card from '../components/Card'
import {useStore} from 'vuex'
import {computed} from 'vue'
export default {
  components: {Card},
  setup(){

    const store = useStore()
    store.commit('updateTask')

    const tasks = store.getters.getTasks

    const activeTasks = tasks.reduce((acc, task) => {
      task.status === 'active' ?  acc++ : acc 
      return acc
    }, 0)

    

    return{
      tasks,
      activeTasks
    }
  }
}
</script>
