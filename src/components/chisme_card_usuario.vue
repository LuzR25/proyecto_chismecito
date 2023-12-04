<template>
    <div class="chismCard">
        <div class="head">
            <p>{{ formatedDate }}</p>

        </div>
        <p class="content">{{ props.contenido }}
        </p>

    </div>

        
    

</template>

<script setup>
import { ref, defineProps } from 'vue';
import { format } from "https://cdn.skypack.dev/date-fns@2.29.3";

const props = defineProps({
  fechaPublicacion: {
    type: String,
    required: true
  },
  contenido: {
    type: String,
    required: true
  }
});

let fecha = Date.parse(props.fechaPublicacion);
let formatedDate = format(fecha, 'dd/MM/yyyy');

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