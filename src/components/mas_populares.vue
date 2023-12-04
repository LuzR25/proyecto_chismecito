<template>
    <div v-for="(item) in listaChismesPop">
        <chismeCard :id-chisme="item.id" :fechaPublicacion="item.fechaPublicacion" :contenido="item.contenido" 
          :genero="obtenerGenero(item.idUsuario)" :edad="obtenerEdad(item.idUsuario)" :liked="estaLikeado(item.id)"
          :guardado="estaGuardado(item.id)">
        </chismeCard>
      </div>
</template>

<script setup>
import { reactive } from 'vue';
import chismeCard from './chismeCard.vue'; //! No sé a qué se debe este error, pero que se muera
import { obtenerChismesL } from "../chismes_liked_controller";
import { obtenerChismesG } from "../chismes_guardados_controller";
import { ordenarChismesPorCorazones } from "../chismes_controller";
import { obtenerUsuario } from "../datos_controller";

let listaChismesLiked = reactive([]);
listaChismesLiked = obtenerChismesL(localStorage.getItem('idUsuario'));

function estaLikeado(idChisme) {
    for (let chismeAct = 0; chismeAct < listaChismesLiked.length; chismeAct++) {
        const chismeL = listaChismesLiked[chismeAct];
        
        if (chismeL.idChisme == idChisme) {
            return true;
        }
    }

    return false;
}

let listaChismesG = reactive([]);
listaChismesG = obtenerChismesG(localStorage.getItem('idUsuario'));

function estaGuardado(idChisme) {
    for (let chismeAct = 0; chismeAct < listaChismesG.length; chismeAct++) {
        const chismeL = listaChismesG[chismeAct];
        
        if (chismeL.idChisme == idChisme) {
            return true;
        }
    }

    return false;
}

let listaChismesPop = reactive([]);
listaChismesPop = ordenarChismesPorCorazones();

function calcularEdad(fechaNacimiento) {
    var hoy = new Date();
    var cumpleanos = new Date(fechaNacimiento);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}

function obtenerEdad(idUsuario) {
  let usuario = obtenerUsuario(idUsuario);
  
  let edad = calcularEdad(usuario.fechaNacimiento);

  return edad;
}

function obtenerGenero(idUsuario) {
    let usuario = obtenerUsuario(idUsuario);

    if (usuario.genero === 'masculino') {
        return 'Masculino';
    } else if (usuario.genero === 'femenino') {
        return 'Femenino';
    } else {
        return 'No binario';
    }
}
</script>