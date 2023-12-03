<template>
  <!-- <formulario_login></formulario_login>
  <formulario_singup></formulario_singup> -->
  <informacion_cuenta></informacion_cuenta>
</template>

<script setup>
import informacion_cuenta from './components/informacion_cuenta.vue';


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



</script>

<style scoped></style>