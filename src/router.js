import { createRouter, createWebHistory } from 'vue-router'
import ChismecitoContainer from './components/chismeContainer.vue'
import LoginFormulario from './components/formulario_login.vue'
import SignUpFormulario from './components/formulario_singup.vue'
import AcercaDe from './components/acerca_de.vue'
import InfoCuenta from './components/informacion_cuenta.vue'
import Cuenta from './components/cuenta.vue'
import ElegirHeader from './components/elegir_header.vue'
import ChismesGuardados from './components/chismes_guardados.vue'
import ChismesPublicados from './components/chismes_publicados.vue'
import EscribirChisme from './components/input_escribir_chisme.vue'
import ChismeRecientes from './components/mas_recientes.vue'
import ChismeAntiguos from './components/mas_antiguos.vue'
import ChismePopulares from './components/mas_populares.vue'

/* export const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', name: 'home', component: ChismecitoContainer },
    { path: '/login', name: 'login', component: LoginFormulario },
    { path: '/signup', name: 'signUp', component: SignUpFormulario },
    { path: '/acercade', name: 'acercaDe', component: AcercaDe },
    { path: '/cuenta', name: 'cuenta', component: Cuenta, children: [
      { path: 'cochinada', name: 'cochinada', component: CochinadaPrueba },
      { path: 'infoCuenta/:idUsuario', name: 'infoCuenta', component: InfoCuenta, props: true } ]
    },
  ],
}) */

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: ElegirHeader, children: [
      { path: '/inicio', name: 'chismes', component: ChismecitoContainer, children: [
        { path: '/masrecientes', name: 'recientes', component: ChismeRecientes },
        { path: '/masantiguos', name: 'antiguos', component: ChismeAntiguos },
        { path: '/maspopulares', name: 'populares', component: ChismePopulares },] 
      },
      { path: '/login', name: 'login', component: LoginFormulario },
      { path: '/signup', name: 'signUp', component: SignUpFormulario },
      { path: '/acercade', name: 'acercaDe', component: AcercaDe },
      { path: '/cuenta', name: 'cuenta', component: Cuenta, children: [
        { path: 'chismespublicados', name: 'chismesP', component: ChismesPublicados },
        { path: 'chismesguardados', name: 'chismesG', component: ChismesGuardados },
        { path: 'escribirC', name: 'escribirC', component: EscribirChisme },
        { path: 'infoCuenta/:idUsuario', name: 'infoCuenta', component: InfoCuenta, props: true } ]
      } ] 
    },
  ],
})

//* Que no se me olvide pasar los parámetros usando props, y no jalando todo así 
//* pedorro directo de las rutas