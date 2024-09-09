import SagiriButton from "@/plugins/sagiri_style/SagiriButton.vue";
import SagiriCard from "@/plugins/sagiri_style/SagiriCard.vue";
import SagiriInput from "@/plugins/sagiri_style/SagiriInput.vue";
//主题色:
//砖红  rgb(170, 77, 61)
//粗孔雀緑  rgb(22, 133, 112)
//鈷藍  rgb(100, 147, 175)
//艶黄  rgb(225, 161, 5)
//乳灰  rgb(197, 187, 163)
export default {
    //当在main.js中使用Vue.use时,将调用此方法
    install(Vue){
        Vue.component("SagiriButton",SagiriButton);
        Vue.component("SagiriCard",SagiriCard);
        Vue.component("SagiriInput",SagiriInput);
    }
}
