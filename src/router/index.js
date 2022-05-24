import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import FormOne from '../views/FormOne.vue';
import FormTwo from '../views/FormTwo.vue';
import FormThree from '../views/FormThree.vue';
import CadastroConcluido from '../views/CadastroConcluido.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: "FormOne",
        component: FormOne
      },
      {
        path: 'steptwo',
        name: "FormTwo",
        component: FormTwo
      }
      ,
      {
        path: 'stepthree',
        name: "FormThree",
        component: FormThree
      },
      {
        path: 'congrats',
        name: "CadastroConcluido",
        component: CadastroConcluido
      }
    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
