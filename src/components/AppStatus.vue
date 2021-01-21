<template>
  <span :class="[textStatus.class]" class="badge">{{textStatus.text}}</span>
</template>

<script>
import {computed} from 'vue'
export default {
  props:['status'],
  setup(props){

    const textStatus = computed(() => {
      if(props.status === 'active'){
        return {
          class: 'primary',
          text:'Активен'
        }
      }
      else if(props.status === 'pending'){
        return {
          class: 'warning',
          text:'Выполняется'
        }
      }
      else if(props.status === 'done'){
        return {
          class: '',
          text:'Выполнен'
        }
      }
      else if(props.status === 'cancelled'){
        return {
          class: 'danger',
          text:'Отменен'
        }
      }
    })

    return{
      textStatus
    }
  }
}
</script>