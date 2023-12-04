import { reactive } from "vue";

let idU = 4;

//* Funciones para el usuario
export let listaUsuarios = reactive([
    { id: 0, fechaNacimiento: '2002-11-25', genero: 'femenino', password: 'lucecita', nomUsuario: 'luz' },
    { id: 1, fechaNacimiento: '2002-03-14', genero: 'masculino', password: 'acuita', nomUsuario: 'acuablast' },
    { id: 2, fechaNacimiento: '2002-06-04', genero: 'femenino', password: 'mariposa', nomUsuario: 'mariposa' },
    { id: 3, fechaNacimiento: '2002-11-04', genero: 'femenino', password: 'cielo', nomUsuario: 'cielo' },]);

export function crearUsuario(usuario) {
    listaUsuarios.push({id: idU, fechaNacimiento: usuario.fechaNacimiento, 
        nomUsuario: usuario.nomUsuario, password: usuario.password, 
        genero: usuario.genero
    });

    idU++; //Incrementamos para que el id no se vaya a repetir

    console.log(`Usuario creado con éxito`);
    console.log(listaUsuarios[idU - 1]);
}

//Esto podría seer modificado para usar el finIndex()
export function obtenerUsuario(idUsuario) {
    let index = listaUsuarios.findIndex(usuario => usuario.id == idUsuario);

    if (index === -1) {
        return false;
    } else {
        return listaUsuarios[index];
    }

    /* listaUsuarios.forEach(usuario => {
        if (usuario.id === idUsuario.value) {
            return usuario;
        }
    }); */

    //return false;
}

export function modificarUsuario(usuarioMod) {
    let index = listaUsuarios.findIndex(usuario => usuario.nomUsuario === nombreUsuario);
    listaUsuarios[index].fechaNacimiento = usuarioMod.fechaNacimiento;
    listaUsuarios[index].genero = usuarioMod.genero;
    listaUsuarios[index].nomUsuario = usuarioMod.nomUsuario;
    listaUsuarios[index].password = usuarioMod.password;
}

export function eliminarUsuario(index) {
    listaUsuarios.splice(index, 1);
}

export function existeUsario(nombreUsuario, password) {
    let existe = listaUsuarios.findIndex(usuario => usuario.nomUsuario === nombreUsuario  && usuario.password === password);

    //console.log(listaUsuarios.length);
    console.log(`Largo: ${listaUsuarios.length}`);

    return existe;

    /* istaUsuarios.forEach(usuario => {
        if (usuario.nomUsuario == nombreUsuario.value && usuario.password == password.value) {
            return 
        }
    }); */

    /* for (let usuario = 0; usuario < listaUsuarios.length; usuario++) {
        const usuarioAct = listaUsuarios[usuario];

        if (usuarioAct.nomUsuario === nombreUsuario && usuarioAct.password === password) {
            return usuario; 
        }
        
    }

    return -1; */
}

