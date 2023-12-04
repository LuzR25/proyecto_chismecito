import { reactive } from "vue";

//* Funciones para el usuario
/* idChisme, idUsuario, fechaPublicacion, corazones, contenido, reportes */
export let listaChismesGuardados = reactive([
    { idChisme: 2, idUsuario: 0},
    { idChisme: 3, idUsuario: 0}, 
    { idChisme: 3, idUsuario: 1}, 
    { idChisme: 0, idUsuario: 2}, 
    { idChisme: 0, idUsuario: 3}, 
    { idChisme: 4, idUsuario: 1}, 
]);

export function guardarChisme(idChismeG, idUsuarioG) {
    listaChismesGuardados.push({idChisme: idChismeG, idUsuario: idUsuarioG});

    console.log(`Chisme guardado con éxito`);
}

//Esto podría seer modificado para usar el finIndex()
export function obtenerChismesG(idUsuario) {
    let listaChismesG = reactive([]);

    for (let chismeAct = 0; chismeAct < listaChismesGuardados.length; chismeAct++) {
        const chisme = listaChismesGuardados[chismeAct];
        
        if (chisme.idUsuario == idUsuario) {
            listaChismesG.push(chisme); //No sé si esto funcione
        }
    }

    return listaChismesG;
}

