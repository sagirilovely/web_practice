import VueRouter from 'vue-router'
import Aa from "../pages/Aa.vue"
import Bb from "../pages/Bb.vue"
import BbCc from "../pages/BbCc.vue"
import BbDd from "../pages/BbDd.vue"

let router = new VueRouter({
    routes: [
        {
            path: '/Aa',
            component: Aa,
            meta: {title: 'Aa', isNexted: true}
        },
        {
            path: '/Bb',
            component: Bb,
            meta: {title: 'Bb', isNexted: true},
            children: [
                {
                    path: 'BbCc',
                    component: BbCc,
                    meta: {title: 'BbCc', isNexted: true}
                },
                {
                    path: 'BbDd',
                    component: BbDd,
                    meta: {title: 'BbDd', isNexted: false},
                }
            ]
        }
    ]
})

router.afterEach((to, from) => {
    document.title = to.meta.title;
})
export default router;
