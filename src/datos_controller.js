import { reactive } from "vue";

export let listaUsuarios = reactive([
    { id: 0, fechaNacimiento: '2002-11-25', genero: 'femenino', password: 'lucecita', nomUsuario: 'luz' },
    { id: 1, fechaNacimiento: '2002-03-14', genero: 'masculino', password: 'acuita', nomUsuario: 'acuablast' },
    { id: 2, fechaNacimiento: '2002-06-04', genero: 'femenino', password: 'mariposa', nomUsuario: 'mariposa' },
    { id: 3, fechaNacimiento: '2002-11-04', genero: 'femenino', password: 'cielo', nomUsuario: 'cielo' },]);

export function crearUsuario(usuario) {
    listaUsuarios.push({id: usuario.id.value, fechaNacimiento: usuario.fechaNacimiento.value, 
        nomUsuario: usuario.nomUsuario.value, password: usuario.password.value, 
        genero: usuario.genero.value
    });
}


export function obtenerUsuario(idUsuario) {
    listaUsuarios.forEach(usuario => {
        if (usuario.id == idUsuario) {
            return usuario;
        }
    });

    return false;
}

export function modificarUsuario(usuarioMod) {
    //listaUsuarios.findIndex(value => usuarioMod)
    listaUsuarios[usuarioMod[usuarioMod[id]]].fechaNacimiento = usuarioMod.fechaNacimiento;
    listaUsuarios[usuarioMod[usuarioMod[id]]].genero = usuarioMod.genero;
    listaUsuarios[usuarioMod[usuarioMod[id]]].nomUsuario = usuarioMod.nomUsuario;
    listaUsuarios[usuarioMod[usuarioMod[id]]].password = usuarioMod.password;
}

export function eliminarUsuario(index) {
    listaUsuarios.splice(index, 1);
}

function existeUsario(nombre) {
    
}

