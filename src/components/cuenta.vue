<template>
    <div id="m">
        <div style="align-items: left; padding-left: 1vw; position: relative; align-items: self-start;">
            <router-link :to="{ name: 'infoCuenta'/* , params: { usuario: 'luciernaga' } */}">
                <div class="button" :style="{ backgroundColor: color1}" @click="changeColor(1);">
                    <svg class="iconButton" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" >
                        <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/>
                    </svg>
                    <p class="txt">Información de cuenta</p>
                </div>
            </router-link>
            <router-link :to="{ name: 'cochinada' }">
            <!-- <button>Chismecitos publicados</button> -->
                <div class="button" :style="{ backgroundColor: color2}" @click="changeColor(2);">
                    <svg class="iconButton" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" >
                        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm80-160h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Z"/>
                    </svg>
                    <p class="txt">Chismecitos publicados</p>
                </div>
            </router-link>
        <!-- Luego hacemos que jale el que viene desde el login -->
            <router-link :to="{ name: 'infoCuenta'/* , params: { usuario: 'luciernaga' } */}"> 
                <div class="button" :style="{ backgroundColor: color3}" @click="changeColor(3);">
                    <svg class="iconButton" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" >
                        <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z"/>
                    </svg>
                    <p class="txt">Chismesitos guardados</p>
                </div>
            </router-link>
            <router-link :to="{ name: 'cochinada' }">
                <div class="button" :style="{ backgroundColor: color4}" @click="changeColor(4);">
                    <svg class="iconButton" xmlns="http://www.w3.org/2000/svg" height="30" width="30"  viewBox="0 -960 960 960" >
                        <path d="M360-600v-80h360v80H360Zm0 120v-80h360v80H360ZM560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm263-224 37-39-37-37-38 38 38 38ZM240-80q-50 0-85-35t-35-85v-120h120v-560h600v361q-20-2-40.5 1.5T760-505v-295H320v480h240l-80 80v160H240Z"/>
                    </svg>
                    <p class="txt">Escribir chismecito</p>
                </div>
            </router-link>
        </div>
    </div>

    <div id="n">
        <router-view></router-view>
    </div>
    

</template>

<script setup>
import { ref } from 'vue';
let color1 = ref("#ffffff");
let color2 = ref("#00000000");
let color3 = ref("#00000000");
let color4 = ref("#00000000");

const changeColor = (button) => {
  switch (button) {
    case 1:
      color1.value = "#ffffff";
      color2.value = "#00000000";
      color3.value = "#00000000";
      color4.value = "#00000000";
      break;
    case 2:
      color1.value = "#00000000";
      color2.value = "#ffffff";
      color3.value = "#00000000";
      color4.value = "#00000000";
      break;
    case 3:
      color1.value = "#00000000";
      color2.value = "#00000000";
      color3.value = "#ffffff";
      color4.value = "#00000000";
      break;
    case 4:
      color1.value = "#00000000";
      color2.value = "#00000000";
      color3.value = "#00000000";
      color4.value = "#ffffff";
      break;
    default:
      pass:
      break;
  }
}

</script>

<style scoped>
#m{
    display: grid;
    grid-template-columns: 100%;
    width: 20%;
    height: 86vh;
    align-items: baseline;
    float: left;
}
#n{
    display: grid;
    position: relative;
    grid-template-columns: 100%;
    width: 80%;
    height: 86vh;
    align-items: center;
    
    
}
.button{
  display: inline-block;
  width: auto;
  cursor: pointer;
  text-align: center;
  border: solid 1px white;
  border-radius: 50px;
  padding: 2vh;
  margin-top: 2vh;
}
.iconButton{
  background-color: #eace7e;
  border-radius: 15px;
  float: left;
}
.txt{
  float: left;
  padding-left: 3px;
  padding-top: 5px;
  padding-right: 10px;
}

</style>