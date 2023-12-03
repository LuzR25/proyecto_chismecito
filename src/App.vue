<template>
  <div style="text-align: center;">
  <h1>Aplicación de Notas</h1>
  <h2>Agregar Nueva Nota</h2>
  <div>
    <div><input type="text" :multiple="false" v-model="fechaNacimiento" placeholder="Fecha de nacimiento"></div>
    <div><input type="text" :multiple="false" v-model="genero" placeholder="Género"></div>
    <div><input type="text" :multiple="false" v-model="usuario" placeholder="Usuario"></div>
    <div><input type="text" :multiple="false" v-model="password" placeholder="Contraseña"></div>
    <div><button @click="guardarUsuarioVue()">Crear usuario</button></div>
  </div>
  <div><h2>Lista de Usuarios</h2></div>
  <div v-if="listaUsuarios.length === 0">Aún no has creado un usuario.</div>
  <div v-else v-for="(item, index) in listaUsuarios">
    <!-- <ItemNota @editarTarea="editarNota()" @eliminarTarea="eliminarNota(index)"
     :titulo="item.tituloNota" :contenido="item.contenidoNota"></ItemNota> -->
     <Informacion_cuenta :fechaNacimiento="item.fechaNacimiento" :genero="item.genero"
      :usuario="item.usuario" :password="item.password"></Informacion_cuenta>
  </div>
  
  </div>
  
</template>

<script setup>
import { ref, reactive } from 'vue';
import Informacion_cuenta from './components/informacion_cuenta.vue';

let fechaNacimiento /* = '2002-11-25' */;
let genero /* = 'femenino' */;
let usuario /* = 'Luz' */;
let password /* = ref('lucecita') */; 


/* let tituloNota = ref("");
let contenidoNota = ref(""); */
let listaUsuarios = reactive([/* {tituloNota: 'Primer Nota', contenidoNota: "Esta es mi primer nota del día"}, 
                           {tituloNota: 'Segunda Nota', contenidoNota: "Esta es la segunda nota del día"} */]);

function guardarUsuarioVue() {
  listaUsuarios.push({id: listaUsuarios.length, fechaNacimiento: fechaNacimiento.value, genero: genero.value, usuario: usuario.value, password: password.value})
  fechaNacimiento.value = ""
  genero.value = ""
  usuario.value = ""
  password.value = ""
}

/* function editarNota(index) {
  
}

function eliminarNota(index) {
  listaNotas.splice(index, 1)
} */

let usuarios = reactive([{ id: 0, fechaNacimiento: '2002-11-25', genero: 'femenino', password: 'lucecita', nomUsuario: 'luz' },
  { id: 1, fechaNacimiento: '2002-03-14', genero: 'masculino', password: 'acuita', nomUsuario: 'acuablast' },
  { id: 2, fechaNacimiento: '2002-06-04', genero: 'femenino', password: 'mariposa', nomUsuario: 'mariposa' },
  { id: 3, fechaNacimiento: '2002-11-04', genero: 'femenino', password: 'cieloAzul', nomUsuario: 'cielo' },])

//! No tengo ni la más mínima idea de lo que hago
/* function modificarUsario(index, usuarioModificado) {
  usuarios[index] = usuarioModificado
}
 */
/* function crearUsuario(usuario) {
  //* Eso de ahí puede generar usuarios con id repetido si alguno del medio se elimina y luego se añade otro
  listaNotas.push({id: usuarios.length, fechaNacimiento: usuario.fechaNacimiento, genero: usuario.genero, password: usuario.password, nomUsuario: usuario.nomUsuario})
}
 */
/* function eliminarUsuario(index) {
  usuarios.splice(index, 1)
}
 */
/* function obtenerUsuario(index) {
  return usuarios.findIndex(index)
}
 */









/* 
function crearUsuario(usuarioNuevo) {
    // Crea un objeto usuario
    let usuario = {
        id: 1,
        fechaNacimiento: new Date('1990-01-01'),
        genero: 'Masculino',
        nombre: 'Juan',
        password: 'contraseña_segura'
    };

    usuario = usuarioNuevo;
    // Abre una transacción de lectura/escritura en la tabla Usuario
    let transaction = db.transaction(["Usuario"], "readwrite");
    // Accede al almacén de objetos Usuario
    let objectStore = transaction.objectStore("Usuario");
    // Agrega el usuario al almacén de objetos
    let request = objectStore.add(usuario);
    request.onsuccess = function (event) {
        console.log("Usuario guardado con éxito.");
    };
    request.onerror = function (event) {
        console.log("Error al guardar el usuario", event);
    };
}


//* Esto con el cursor será más últil para los chismes y así
function obtenerUsuario(nombreUsuario) {
    // El nombre del usuario que estás buscando
    let nombreBuscado = nombreUsuario;
    // Abre una transacción de solo lectura en la tabla Usuario
    let transaction = db.transaction(["Usuario"]);
    // Accede al almacén de objetos Usuario
    let objectStore = transaction.objectStore("Usuario");
    // Accede al índice de nombre
    let index = objectStore.index("nombre");
    // Crea un rango para buscar todos los usuarios con el nombre buscado
    let range = IDBKeyRange.only(nombreBuscado);
    // Abre un cursor en el índice
    let request = index.openCursor(range);
    request.onsuccess = function (event) {
        let cursor = event.target.result;
        if (cursor) {
            // Aquí tienes un usuario con el nombre buscado
            console.log("Usuario encontrado:", cursor.value);
            // Continúa al siguiente usuario con el mismo nombre
            //cursor.continue(); Los nombres de usuario serán únicos, aunque no lo declaremos así
            //en la base de datos
        } else {
            // No hay más usuarios con el nombre buscado
            console.log("No hay más usuarios con el nombre", nombreBuscado);
        }
    };
    request.onerror = function (event) {
        console.log("Error al buscar el usuario", event);
    };
}

///Para obtener un usuario, falta decicdir qué hacer con la información 
///que regresa
function obtenerUnicoUsuarioOficial(id) {
    let transaction = db.transaction(["test"], "readonly");
    let objectStore = transaction.objectStore("test");
    //x is some value 
    let ob = objectStore.get(id);
    ob.onsuccess = function(e) {
        //? ¿Qué hacemos una vez que tenemos al usuario?
    }


    //! Este siguiente pedazo es sólo un ejemplo de lo que se puede hacer con la información
    //! y que iría dentro de la función onsuccess.
    //* Lo copio porque quiero saber cómo acceder a la información en el evento
    var result = e.target.result;
        console.dir(result);
        if(result) {
            var s = "&lt;h2>Key "+key+"&lt;/h2>&lt;p>";
            for(var field in result) {
                s+= field+"="+result[field]+"&lt;br/>";
            }
            document.querySelector("#status").innerHTML = s;
        } else {
            document.querySelector("#status").innerHTML = "&lt;h2>No match&lt;/h2>";
        }  
}

function obtenerChismesUsuario(nombreUsuario) {
    // El nombre del usuario que estás buscando
    let nombreBuscado = nombreUsuario;
    // Abre una transacción de solo lectura en la tabla Usuario
    let transaction = db.transaction(["Usuario"], "readonly");
    // Accede al almacén de objetos Usuario
    let objectStore = transaction.objectStore("Usuario");
    // Accede al índice de nombre
    let index = objectStore.index(nombreBuscado); //Pasamos el nombre como índice
    // Crea un rango para buscar todos los usuarios con el nombre buscado
    //let range = IDBKeyRange.only(nombreBuscado); //!Puede que esto no sea necesario
    // Abre un cursor en el índice
    //let request = index.openCursor(range); //* Podemos sustituir esto por lo de debajo

    let request = index.getAll(10);

    request.onsuccess = function() {
        if (request.result !== undefined) {
          console.log("Chismes escritos por tal usuario", request.result); // array de libros con precio = 10
        } else {
          console.log("Este usuario no ha escrito ningún chisme");
        }
      };



    
    //Esto con cursor funcionaría mejor porque los recorre uno por uno mientras haya y podemos
    //manejar más fácilmente esa información
    request.onsuccess = function (event) {
        let cursor = event.target.result;
        if (cursor) {
            // Aquí tienes un usuario con el nombre buscado
            console.log("Usuario encontrado:", cursor.value);
            // Continúa al siguiente usuario con el mismo nombre
            //cursor.continue(); Los nombres de usuario serán únicos, aunque no lo declaremos así
            //en la base de datos
        } else {
            // No hay más usuarios con el nombre buscado
            console.log("No hay más usuarios con el nombre", nombreBuscado);
        }
    };
    request.onerror = function (event) {
        console.log("Error al buscar el usuario", event);
    };
}

function eliminarUsuario(id) {
    //! Que no se me olvide añadir un método para abrir la base de datos y así estas funciones sirvan
    let db = openDB('my-database', 1);
    let transaction = db.transaction(["Usuario"], 'readwrite');
    let objectStore = transaction.objectStore("Usuario");

    objectStore.delete(id);

}

function eliminarChismesUsuario(params) {
    // encuentra la clave donde price = 5
let request = priceIndex.getKey(5);

request.onsuccess = function() {
  let id = request.result;
  let deleteRequest = books.delete(id);
};
}



//* Usando try..catch con await en lugar de estar usando los eventos
let db = await idb.openDB('store', 1, db => {
    if (db.oldVersion == 0) {
      // ejecuta la inicialización
      db.createObjectStore('books', {keyPath: 'id'});
    }
  });
  
  let transaction = db.transaction('books', 'readwrite');
  let books = transaction.objectStore('books');
  
  try {
    await books.add();
    await books.add();
  
    await transaction.complete;
  
    console.log('jsbook saved');
  } catch(err) {
    console.log('error', err.message);
  }

 */

</script>

<style scoped></style>