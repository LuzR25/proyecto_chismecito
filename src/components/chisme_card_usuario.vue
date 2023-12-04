<template>
    <div class="chismCard">
        <div class="head">
            <p>{{ props.fechaPublicacion }}</p>

        </div>
        <p class="content">{{ props.contenido }}
        </p>
        <div class="buttons">
            <div>
                <div class="tooltip">
                    <svg   class="imglike" :class="{anim: likedisabled1}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :style="{ fill: likeColor}" @click="like(); likewarnDisabled(); likeadDisabled()">
                            <path  d="M12 21.35l-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z"/>
                    </svg>
                    <span class="tooltiptext">Me gusta</span>
                    <span class="advisement" :class="{adAnim: likedisabled2}">QUÉ BUEN CHISME</span>
                </div>
            </div>
            
            <div>
                <div class="tooltip">
                    <svg class="imgReport" :class="{anim: savedisabled1}" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" :style="{fill: saveColor}" @click="save(); /* savewarnDisabled(); saveadDisabled() */">
                        <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z"/>
                    </svg>
                    <span class="tooltiptext">Guardar</span>
                    <span class="advisementReport" :class="{adAnim: savedisabled2}">guardado</span>
                </div>
            </div>
            

            <div>
                <div class="tooltip">
                    <svg class="imgReport" :class="{anim: reportdisabled1}" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" :style="{fill: reportColor}" @click="report(); /* reportwarnDisabled(); reportadDisabled() */">
                        <path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Z"/>
                    </svg>
                    <span class="tooltiptext">Reportar chisme</span>
                    <span class="advisementReport" :class="{adAnim: reportdisabled2}">Reportado</span>
                </div>
            </div>
        </div>

    </div>

        
    

</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  fechaPublicacion: {
    type: String,
    required: true
  },
  contenido: {
    type: String,
    required: true
  }
})

const likedisabled1 = ref(false)
const likedisabled2 = ref(false)
let likeColor = ref("#a7a7a7");

/* report variables */

const reportdisabled1 = ref(false)
const reportdisabled2 = ref(false)
let reportColor = ref("#a7a7a7");

/* save variables */

const savedisabled1 = ref(false);
const savedisabled2 = ref(false);
let saveColor = ref("#a7a7a7");


/* like functions */

function likewarnDisabled() { 
    if (likeColor.value == '#dc487f') {
        likedisabled1.value = true
  setTimeout(() => {
    likedisabled1.value = false
  }, 200)
    }
  
}

function likeadDisabled() { 
    if (likeColor.value == '#dc487f') {
        likedisabled2.value = true;
        setTimeout(() => {
            likedisabled2.value = false }, 1700)
    }
  
}

const like = () => {
    if (likeColor.value == '#a7a7a7') {
        likeColor.value='#dc487f';
        
    } else {
        likeColor.value='#a7a7a7'
    }
}

/* like functions */


/* Report functions */

function reportwarnDisabled() { 
    if (reportColor.value == '#ff0000') {
        reportdisabled1.value = true
  setTimeout(() => {
    reportdisabled1.value = false
  }, 200)
    }
  
}

function reportadDisabled() { 
    if (reportColor.value == '#ff0000') {
        reportdisabled2.value = true;
        setTimeout(() => {
            reportdisabled2.value = false }, 1700)
    }
  
}

const report = () => {
    if (reportColor.value == '#a7a7a7') {
        reportColor.value='#ff0000';
        
    } else {
        reportColor.value='#a7a7a7'
    }
}

/* Report functions */

/* save functions */

function savewarnDisabled() { 
    if (saveColor.value == '#1d9bf0') {
        savedisabled1.value = true
  setTimeout(() => {
    savedisabled1.value = false
  }, 200)
    }
  
}

function saveadDisabled() { 
    if (saveColor.value == '#1d9bf0') {
        savedisabled2.value = true;
        setTimeout(() => {
            savedisabled2.value = false }, 1700)
    }
  
}

const save = () => {
    if (saveColor.value == '#a7a7a7') {
        saveColor.value='#1d9bf0';
        
    } else {
        saveColor.value='#a7a7a7'
    }
}

/* save functions */

</script>

<style scoped>

.anim{
    animation-name: likeAnim;
    animation-duration: .2s;
}

@keyframes likeAnim {
  0%   {transform: scale(1);}
  50%  {transform: scale(1.5);}
  100% {transform: scale(1);}
}

.imglike{
    cursor: pointer;
    width: 50%;
    height: 100%;
    transition: all .2s ease-in-out;
}
.imgSave{
    cursor: pointer;
    width:50%;
    height: 100%;
    transition: all .2s ease-in-out;
}
.imgReport{
    cursor: pointer;
    width:50%;
    height: 100%;
    transition: all .2s ease-in-out;
}

.chismCard{
    color: white;
    width: 60%;
    border: solid white 2px;
    background-color: #303030;
    margin: 5% auto;
    text-align: center;
    border-radius: 15px;
    font-size: 1.3vw;   
}

.head{
    display: grid;
    grid-template-columns: 100%;
    border-bottom: 2px white solid;
    padding: 2% 0%;
}

.content{
    padding: 3%;
    width: 100%;
    text-align: justify;
    border-bottom: 2px white solid;
    user-select: text;
    

}
.buttons{
    display: grid;
    grid-template-columns: 33% 34% 33%;
    height: 7vh;
    
}

/* .like{
    width: 50%;
    height: 100%;
    
    background-image: url(../assets/heart.svg);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
} */
/* input[type="button"]{
    background-color: transparent;
} */

.tooltip{ /* Contenedor del tooltip */
    width: 30%;
    height: 100%;
    position: relative;
    display: inline-block;
    /* border-bottom: 1px dotted black; */ /* si quiero puntos debajo del texto con tooltip */
}

.tooltip .tooltiptext{ /* formato y posicion del tooltip */
    display: none;
    /* visibility: hidden; */
    width:max-content;
    background-color: #303030;
    color: white;
    text-align: center;
    padding: 4% 10%;
    border-radius: 7.5px;
    border: 2px solid white;
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, 0%);
    /* transition-duration: .2s; */
    
}

.tooltip:hover .tooltiptext{
    display: block;
    /* visibility: visible; */
    /* opacity: 1; */
    /* top: calc(100% + 2px + 5px); */
    animation-name: tooltipShow;
    animation-duration: 1.5s;

    /* transition-duration: .1s; */
}

  
@keyframes tooltipShow {
    0%   {
        display: block;
        top: 100%;
        opacity: 0;
        
    }

    25%  {
        top: calc(100% + 7px);
        opacity: 1;}

  50%  {
        top: calc(100% + 7px);
        opacity: 1;}

    75%  {
        top: calc(100% + 7px);
        opacity: 1;}

  100% {top: 100%;
        opacity: 0;
        display: none;    
    }
}


.tooltip .tooltiptext::after {
    content: " ";
    position: absolute;
    bottom: 102%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent white transparent;
}

.advisement{
    visibility: hidden;
    width:max-content;
    /* background-color: #303030; */
    color: white;
    text-align: center;
    padding: 4% 10%;
    border-radius: 7.5px;
    /* border: 2px solid white; */
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -50%);
    /* transition-duration: .2s; */  
}
.advisementReport{
    visibility: hidden;
    width:max-content;
    /* background-color: #303030; */
    color: white;
    text-align: center;
    padding: 4% 10%;
    border-radius: 7.5px;
    /* border: 2px solid white; */
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -50%);
    /* transition-duration: .2s; */  
}
.adAnim{
    visibility: visible;
    animation-iteration-count: infinite;
    animation-name: ad;
    animation-duration: 1.5s;
    animation-timing-function: linear;
    animation-delay: 200ms;
    
}

@keyframes ad {
  0%   {font-size: calc(1.3vw);
opacity: 0;}
  50%  {opacity: 1;}
  100% {font-size: calc(1.3vw *2);
opacity: 0;}
}
</style>