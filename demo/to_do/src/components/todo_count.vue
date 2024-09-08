<template>
<div>
    <div class="all">全部</div>
    <div class="count">任务: {{count}}</div>
</div>
</template>

<script>
export default {
    name: "todo_count",
    props:['count'],
    data(){
        return{
        }
    }
}
</script>

<style scoped>
.all{
    font-size: 50rem;
    font-weight: bold;
}
.count{
    font-size:40rem ;
    font-weight: normal;
}
</style>