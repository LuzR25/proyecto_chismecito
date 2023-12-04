import { createRouter, createWebHistory } from 'vue-router'
import ChismecitoContainer from './components/chismeContainer.vue'
import LoginFormulario from './components/formulario_login.vue'
import SignUpFormulario from './components/formulario_singup.vue'
import AcercaDe from './components/acerca_de.vue'
import InfoCuenta from './components/informacion_cuenta.vue'
import Cuenta from './components/cuenta.vue'
import CochinadaPrueba from './components/cochinada_prueba.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', name: 'home', component: ChismecitoContainer },
    { path: '/login', name: 'login', component: LoginFormulario },
    { path: '/signup', name: 'signUp', component: SignUpFormulario },
    { path: '/acercade', name: 'acercaDe', component: AcercaDe },
    { path: '/cuenta', name: 'cuenta', component: Cuenta, children: [
      { path: 'cochinada', name: 'cochinada', component: CochinadaPrueba },
      { path: 'infoCuenta', name: 'infoCuenta', component: InfoCuenta } ]
    },
    /* { path: '/cuenta/cochinada', name: 'cochinada', components: { cuenta: Cuenta, cochinada: CochinadaPrueba } },
    { path: '/cuenta/infocuenta', name: 'infoCuentaV', components: { cuenta: Cuenta, infoCuenta: InfoCuenta } } */],

  /* 
  { path: '/cuenta/:usuario', name: 'cuenta', component: Cuenta },
  { path: '/cuenta/:usuario/cochinada', name: 'cochinada', component: CochinadaPrueba },
  { path: '/cuenta/:usuario/infocuenta', name: 'infoCuentas', component: InfoCuenta }], */
})

//* Que no se me olvide pasar los parámetros usando props, y no jalando todo así 
//* pedorro directo de las rutas