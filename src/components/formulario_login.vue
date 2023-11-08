<template>
    <div id="container">
        <span>INICIAR SESIÓN</span>
        <input_personalizable id="nombreUsuario" type="text" hint="Nombre de usuario" :variablePadre="nombreUsuario"
            @update:variablePadre="nombreUsuario = $event" />
        <input_personalizable id="password" type="password" hint="Contraseña" :variablePadre="password"
            @update:variablePadre="password = $event" />
        <boton_personalizable texto="INGRESAR" color="#EBCE7D" :accion="submit" />
    </div>
  </template>
  
  <script setup>
  import input_personalizable from './input_personalizable.vue';
  import boton_personalizable from './boton_personalizable.vue';
  
  let nombreUsuario = '';
  let password = '';
  
  const submit = () => {
    console.log(`Usuario: ${nombreUsuario}, Contraseña: ${password}`);
  };
  
  /* const miFuncion = () => {
  console.log('¡Botón presionado!');
  };
  */
  </script>
  
  <style setup>

  span {
    font-family: 'Abel', sans-serif;
    font-size: 40px;
  }
  
  #container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  </style>