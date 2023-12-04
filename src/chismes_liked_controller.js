import { reactive } from "vue";

//* Funciones para el usuario
/* idChisme, idUsuario, fechaPublicacion, corazones, contenido, reportes */
export let listaChismesLiked = reactive([
    { idChisme: 2, idUsuario: 0},
    { idChisme: 3, idUsuario: 0}, 
    { idChisme: 3, idUsuario: 1}, 
    { idChisme: 0, idUsuario: 2}, 
    { idChisme: 0, idUsuario: 3}, 
    { idChisme: 4, idUsuario: 1}, 
]);

export function guardarChismeLiked(idChismeG, idUsuarioG) {
    listaChismesLiked.push({idChisme: idChismeG, idUsuario: idUsuarioG});

    console.log(`Chisme likeado con éxito`);
}

export function quitarLiked(idChismeG, idUsuarioG) {
    let index = listaChismesLiked.findIndex(chismeG => chismeG.idChisme == idChismeG && chismeG.idUsuario == idUsuarioG);

    listaChismesLiked.splice(index, 1);

    console.log(`Chisme eliminado de likeados con éxito`);
}

export function obtenerChismesL(idUsuario) {
    let listaChismesG = reactive([]);

    for (let chismeAct = 0; chismeAct < listaChismesLiked.length; chismeAct++) {
        const chisme = listaChismesLiked[chismeAct];
        
        if (chisme.idUsuario == idUsuario) {
            listaChismesG.push(chisme); //No sé si esto funcione
        }
    }

    return listaChismesG;
}

