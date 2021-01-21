<template>
  <div class="card">
        <h2 class="card-title">
            {{  title  }}
            <AppStatus :status="status" />
        </h2>
        <p>
            <strong>
            <small>
                {{ data }}
            </small>
            </strong>
        </p>
        <button class="btn primary" @click.prevent="detailTask(id)">Посмотреть</button>
    </div>
</template>

<script>
import AppStatus from './AppStatus'
import {useRouter} from 'vue-router'
export default {
    components: {AppStatus},
    props:['title', 'status', 'data', 'id'],

    setup(){

        const router = useRouter()

        const detailTask = (id) => {
            router.push(`/task/${id}`)
        }

        return{
            detailTask
        }
    }
}
</script>

<style>

</style>