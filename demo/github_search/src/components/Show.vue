<template>
    <div>
        <div class="status" v-show="!info.usersList && !info.errStatus">{{ loading }}</div>
        <div class="status" v-show="!info.usersList && info.errStatus">error:{{info.errStatus}}</div>
        <div class="container"
             v-for="(value) in info.usersList" :key="value.id">
                    <img :src="value.avatar_url" alt="头像">
                    <a :href="value.html_url">{{ value.login }}</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Show",
    data(){
        return{
            info:{

            },
            loading:'welcome'
        }
    },
    methods:{
        getInfo(info){
            this.info=info
        },
        changeLoading(){
            this.loading='加载中...'
        }
    },
    mounted() {
        this.$bus.$on("getInfo",this.getInfo);
        this.$bus.$on("changeLoading",this.changeLoading);
    },
    beforeDestroy() {
        this.$bus.$off("getInfo");
        this.$bus.$off("changeLoading");
    }
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 300px;
    flex-wrap: wrap;
    align-items: center;
}
img{
    width: 250px;
    height: 250px;
}
a{
    text-decoration-line: none;
    color: gray;
    font-size: 30px;
}
.status{
    color: cornflowerblue;
    font-size: 50px;
}
</style>