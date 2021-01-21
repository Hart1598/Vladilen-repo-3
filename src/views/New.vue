<template>
  <form class="card">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input v-model="form.title" type="text" id="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input v-model="form.data" type="date" id="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea v-model="form.desc" id="description"></textarea>
    </div>

    <button class="btn primary" :disabled="isEmptyNode" @click.prevent="createTask">Создать</button>
  </form>
</template>


<script>
import {computed, reactive} from 'vue' 
import {useStore} from 'vuex'
export default {
  setup(){

    const store = useStore()

    const form = reactive({
      title: '',
      data: '',
      desc: ''
    })


    const isEmptyNode = computed(() => {
      if(form.title.length === 0 || form.data.length === 0 || form.desc.length === 0){
        return true
      }
      else{
        return false
      }
    })

    const createTask = () => {
      store.commit('createTask', form)
    }

    

    return{
      isEmptyNode,
      form,
      createTask
    }
  }
}
</script>