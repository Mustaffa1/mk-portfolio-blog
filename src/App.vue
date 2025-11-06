<template>
  <TheHeader /> 
  
  <router-view />

  <TheFooter /> 
</template>

<script setup>
  import TheHeader from './components/TheHeader.vue';
  // TheFooter component'ini içeri aktar
  import TheFooter from './components/TheFooter.vue'; 
</script>