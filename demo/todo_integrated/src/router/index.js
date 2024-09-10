import VueRouter from "vue-router";
//引入组件
import Menu from "@/pages/Menu.vue";
import HomePage from "@/components/HomePage.vue";
import ToDoImportant from "@/pages/ToDoImportant.vue";
import ToDoAll from "@/pages/ToDoAll.vue";
import ToDoToday from "@/pages/ToDoToday.vue";
import ToDoCompleted from "@/pages/ToDoCompleted.vue";
const router = new VueRouter({
    routes: [
        {
            name: 'Menu',
            path: '/menu',
            component: Menu,
            children: [
                {
                    name: 'ToDoImportant',
                    path: 'todocompleted',
                    component:ToDoImportant
                },
                {
                    name: "ToDoAll",
                    path: "todoall",
                    component:ToDoAll
                },
                {
                    name: "ToDoToday",
                    path:"todotoday",
                    component:ToDoToday
                },
                {
                    name: "ToDoCompleted",
                    path:"todocompleted",
                    component:ToDoCompleted
                }
            ]
        },
        {
            name: 'HomePage',
            path: '/homepage',
            component: HomePage
        }
    ]
})
export default router


