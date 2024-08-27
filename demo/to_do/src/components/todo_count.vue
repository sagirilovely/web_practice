<template>
<div>
    <div>任务 {{count}}</div>
</div>
</template>

<script>
export default {
    name: "todo_count",
    props:['count'],
    data(){
        return{
            count:this.count
        }
    }
}
</script>

<style scoped>

</style>