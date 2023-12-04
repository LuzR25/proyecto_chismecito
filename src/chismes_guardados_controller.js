import { reactive } from "vue";

let idC = 6;

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

export function guardarChisme(chisme) {
    listaChismes.push({id: idC, fechaPublicacion: usuario.fechaPublicacion, 
        contenido: chisme.contenido, idUsuario: chisme.idUsuario
    });

    idC++; //Incrementamos para que el id no se vaya a repetir

    console.log(`Chisme creado con éxito`);
    console.log(listaChismes[idC - 1]);
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

