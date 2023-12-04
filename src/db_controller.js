import { openDB } from 'idb';

//Usando try..catch con await en lugar de estar usando los eventos
/* export let db = await idb.openDB('store', 1, db => {
    if (db.oldVersion == 0) {
      // ejecuta la inicialización
      db.createObjectStore('books', {keyPath: 'id'});

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
  } */


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



function eliminarChismesUsuario(params) {
    // encuentra la clave donde price = 5
let request = priceIndex.getKey(5);

request.onsuccess = function() {
  let id = request.result;
  let deleteRequest = books.delete(id);
};
}*/














export async function obtenerUsuario(idUsuario) {
    const db = await openDB('ChismecitoDB', 1);
    const tx = db.transaction('Usuario', 'readonly');
    const store = tx.objectStore('Usuario');
    const index = store.index('idUsuario');
    const usuario = await index.get(idUsuario);
    console.log('Usuario obtenido con éxito: ');
    console.log(usuario);
    return usuario;
}

export async function crearUsuario(usuario) {
    const db = await openDB('ChismecitoDB', 2);
    const tx = db.transaction('Usuario', 'readwrite');
    const store = tx.objectStore('Usuario');
    await store.add(usuario);
    await tx.complete;
    console.log('Usuario creado con éxito');
}

export async function eliminarUsuario(idUsuario) {
    const db = await openDB('ChismecitoDB', 1);
    const tx = db.transaction('Usuario', 'readwrite');
    const store = tx.objectStore('Usuario');
    await store.delete(idUsuario);
    await tx.complete;
    console.log('Usuario eliminado con éxito');
}

export async function modificarUsuario(idUsuario, nuevosDatos) {
    const db = await openDB('ChismecitoDB', 1);
    const tx = db.transaction('Usuario', 'readwrite');
    const store = tx.objectStore('Usuario');
    const usuario = await store.get(idUsuario);
    Object.assign(usuario, nuevosDatos);
    await store.put(usuario);
    await tx.complete; //*Esta cosa de aquí me hace ruido

    console.log('Usuario modificado con éxito');
    let pruebaModi = obtenerUsuario(idUsuario);
    console.log(usuario);
}

export async function revisarUsuario(nombre, password) {
    const db = await openDB('ChismecitoDB', 2);
    const tx = db.transaction('Usuario', 'readonly');
    const store = tx.objectStore('Usuario');
    const index = store.index('nombre');
    const usuario = await index.get(nombre);
    if (usuario && usuario.password === password) {
      return true;
    } else {
      return false;
    }
}


