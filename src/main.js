//Diseños de css globales para componentes que siempre se verán igual
import './assets/global.css'
// Importa las funciones necesarias de Vue
import { createApp } from 'vue'
/* import { Vue } from 'vue'
import { VueRouter } from 'vue-router' */
import { router } from './router'
// Importa tu componente principal de Vue
import App from './App.vue'

/* // Declara una variable para tu base de datos

let db;
// Abre una conexión a tu base de datos
let request = indexedDB.open("MyDatabase", 1);
// Este evento se dispara si hay un error al abrir la base de datos
request.onerror = function (event) {
    console.log("Error al abrir la base de datos", event);
};
// Este evento se dispara cuando la base de datos se ha abierto con éxito
request.onsuccess = function (event) {
    // Asigna la base de datos a la variable db
    db = event.target.result;
    // Inicia la aplicación Vue después de que la base de datos se haya
    //cargado
    startApp(db);
};
// Este evento se dispara cuando necesitas crear o actualizar la estructura de la base de datos
request.onupgradeneeded = function (event) {
    // Asigna la base de datos a la variable db
    let db = event.target.result;
    // Crea la tabla Usuario
    let usuarioStore = db.createObjectStore("Usuario", { keyPath: "id" });
    usuarioStore.createIndex("fechaNacimiento", "fechaNacimiento", { unique: false });
    usuarioStore.createIndex("genero", "genero", { unique: false });
    usuarioStore.createIndex("nombre", "nombre", { unique: false });
    usuarioStore.createIndex("password", "password", { unique: false });
    // Crea la tabla Chisme
    let chismeStore = db.createObjectStore("Chisme", { keyPath: "id" });
    chismeStore.createIndex("idUsuario", "idUsuario", { unique: false });
    chismeStore.createIndex("fechaPublicacion", "fechaPublicacion", { unique: false });
    chismeStore.createIndex("corazones", "corazones", { unique: false });
    chismeStore.createIndex("contenido", "contenido", { unique: false });
    chismeStore.createIndex("reportes", "reportes", { unique: false });
    // Crea la tabla Guardados
    let guardadosStore = db.createObjectStore("Guardados", { keyPath: "idUsuario" });
    guardadosStore.createIndex("idChisme", "idChisme", { unique: false });
};
// Esta función inicia la aplicación Vue
function startApp(db) {
    // Crea la aplicación Vue, pasa la base de datos como una prop a tu aplicación y monta la aplicación en el elemento con id 'app'
    createApp(App, { db }).use(router).mount('#app');
}

 */


//Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
/* const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]
 */
/* const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
      { path: '/', name: 'home', component: Home },
      { path: '/foo', name: 'foo', component: Foo },
      { path: '/bar/:id', name: 'bar', component: Bar }
    ]
  })
 */
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
/* const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
}) */




createApp(App).use(router).mount('#app');