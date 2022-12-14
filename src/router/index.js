import { createRouter, createWebHistory } from 'vue-router'

// Importējam vēlamos skatus kurus gribam izmantot
import Login from '@/views/Login.vue'

// Definējam routes datu masīvu
// Katrs objekts iekš šī datu masīva kalpo kā rūtera adrese
    // path -> adrese kuru gribam noķert/apstrādāt
    // component -> lapas komponente kuru vue attēlos, pie norādītās adreses
const routes = [
    {
        path: '/login',
        component: Login,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// Tiek izveidots middleware / starpprogrammatūra kura katru reizi veiks pārbaudi pirms tiks nomainīta rūtera adrese
// arguments to glabā adresi uz kurieni gribam iet
// arguments from glabā adresi no kurienes mēs nākam
router.beforeEach((to, from) => {

})

export default router