import { createRouter, createWebHistory } from 'vue-router'
import UserPost from './views/UserPost.vue'  
//! Sí tengo que importar cada uno de los componentes que incluya en las rutas
//! Debo incluir los parámetros en las rutas 
//! Debo ponerle nombre a las rutas para que esto sea más fácil

export const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: '/users/:username/posts/:postId', component: UserPost }],
  })



//* Esto irá en el main para usar este router

import { router } from './router'

const app = createApp(App).use(router)
app.mount('#app')