import { createStore } from 'vuex'
import router from '../router/index'

export default createStore({
  state: {
    tasks: []
  },
  mutations: {
    createTask(state, {title, data, desc}){
      const checkStatus = (time) => {
        return new Date(time).getTime() > Date.now() ?  'active' : 'cancelled'
      }

      const status = checkStatus(data)

      const task = {
        id: Date.now(),
        status,
        title,
        data,
        desc
      }

      state.tasks.push(task)
      
      this.commit('saveTask', task)

      router.push('/')
    },


    saveTask(state, task){
      const tasks = JSON.parse(localStorage.getItem('tasks'))

      tasks.push(task)

      state.tasks = tasks


      localStorage.setItem('tasks', JSON.stringify(tasks))
    },

    updateTask(state){
      state.tasks = JSON.parse(localStorage.getItem('tasks'))
    },
    changeStatus(state, {status, id}){
      const task = state.tasks.find(t => t.id == id)
      const idx = state.tasks.findIndex(t => t.id == id)

      task.status = status

      state.tasks[idx] = task

      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }


  },
  getters:{
    getTasks(state){
     return state.tasks
    },
  },
  actions: {
    
  },
  modules: {
  }
})
