import { reactive } from "vue";

let idC = 6;

//* Funciones para el usuario
/* idChisme, idUsuario, fechaPublicacion, corazones, contenido, reportes */
export let listaChismes = reactive([
    { id: 0, idUsuario: 0, fechaPublicacion: '2023-11-25', contenido: "Estaba en un restaurante cuando vi a un hombre pedir una sopa de aleta de tiburón. El camarero le preguntó si quería que le trajera un poco de salsa picante. El hombre respondió: 'No, gracias, ya estoy bastante picante'", corazones: 10 },
    { id: 1, idUsuario: 0, fechaPublicacion: '2023-11-26', contenido: "Un día, estaba hablando con un amigo sobre el universo. Le dije que, según los científicos, el universo es infinito. Mi amigo me miró y me dijo: '¿Y dónde está el borde?'.", corazones: 9 },
    { id: 2, idUsuario: 1, fechaPublicacion: '2023-11-27', contenido: "Estaba en la cola del supermercado cuando vi a un niño que le preguntaba a su madre: 'Mamá, ¿por qué los coches tienen ruedas?'. La madre respondió: 'Para poder moverse'. El niño se quedó pensativo durante un momento y luego dijo: '¿Y por qué las vacas no tienen ruedas?'.", corazones: 26 },
    { id: 3, idUsuario: 2, fechaPublicacion: '2023-11-28', contenido: "Estaba en un avión cuando vi a un hombre que estaba leyendo un libro sobre cómo ser un buen padre. El hombre se sentó a mi lado y me preguntó si quería saber lo que estaba leyendo. Le dije que sí, y el hombre me explicó que el libro le estaba enseñando a ser un buen padre. Le pregunté si tenía hijos, y el hombre me dijo que no, pero que estaba practicando por si acaso.", corazones: 5 },
    { id: 4, idUsuario: 3, fechaPublicacion: '2023-11-29', contenido: "Estaba en una fiesta cuando vi a un hombre que estaba bailando con una silla. El hombre estaba bailando muy bien, y la silla parecía estar disfrutando de la fiesta.", corazones: 0 },
    { id: 5, idUsuario: 1, fechaPublicacion: '2023-11-23', contenido: "Oí a unos empleados hablando el otro día, y estaban hablando de la nueva secretaria que ha empezado a trabajar en la empresa. Parece que es muy guapa, y que está empezando a causar problemas. El otro día, el director de la empresa la encontró en su oficina, besándose con su marido. El director está muy enfadado, y no sabe qué hacer.", corazones: 12},
]);

export function crearChisme(chisme) {
    listaChismes.push({id: idC, fechaPublicacion: chisme.fechaPublicacion, 
        contenido: chisme.contenido, idUsuario: chisme.idUsuario, corazones: 0
    });

    idC++; //Incrementamos para que el id no se vaya a repetir

    console.log(`Chisme creado con éxito`);
    console.log(listaChismes[idC - 1]);
}

//Esto podría seer modificado para usar el finIndex()
export function obtenerChismesCreados(idUsuario) {
    let listaChismesUsuario = reactive([]);

    for (let chismeAct = 0; chismeAct < listaChismes.length; chismeAct++) {
        const chisme = listaChismes[chismeAct];
        
        if (chisme.idUsuario == idUsuario) {
            listaChismesUsuario.push(chisme); //No sé si esto funcione
        }
    }

    return listaChismesUsuario;
}

export function obtenerChisme(idChisme) {
    let index = listaChismes.findIndex(chisme => chisme.id == idChisme);

    if (index === -1) {
        return false;
    } else {
        return listaChismes[index];
    }
}

// Función para ordenar de más reciente a más antigua
export function ordenarChismesRecientes() {
    let copiaListaChismes = [...listaChismes];
    return copiaListaChismes.sort((a, b) => {
        return new Date(b.fechaPublicacion) - new Date(a.fechaPublicacion);
    });
}

// Función para ordenar de más antigua a más reciente
export function ordenarChismesAntiguos() {
    let copiaListaChismes = [...listaChismes];
    return copiaListaChismes.sort((a, b) => {
        return new Date(a.fechaPublicacion) - new Date(b.fechaPublicacion);
    });
}

export function ordenarChismesPorCorazones() {
    let copiaListaChismes = [...listaChismes];
    return copiaListaChismes.sort((a, b) => {
        return b.corazones - a.corazones;
    });
}

export function aumentarCorazon(idChisme) {
    let index = listaChismes.findIndex(chisme => chisme.id == idChisme);

    listaChismes[index].corazones += 1;

    console.log(`Corazones: ${listaChismes[index].corazones}`)
}

export function quitarCorazon(idChisme) {
    let index = listaChismes.findIndex(chisme => chisme.id == idChisme);

    listaChismes[index].corazones -= 1;

    console.log(`Corazones: ${listaChismes[index].corazones}`)
}

