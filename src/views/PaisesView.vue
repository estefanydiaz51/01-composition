<template>
  <h1>Lista de paises</h1>
  <p
    v-for="(pais, index) in arrayData" :key="index"
  >
    <router-link :to="`/paises/${pais.name.common}`">{{ pais.name.common }}</router-link>
  </p>
</template>

<script>
import { useFetch } from '../hooks/useFetch'
export default {
  setup(){

    return { ...useFetch('https://restcountries.com/v3.1/all')}

    
    // const fetchData = async () => {
    //   try {
    //     const res = await fetch('https://restcountries.com/v3.1/all');
    //     arrayData.value = await res.json();
    //   }catch( error ){
    //     console.log( error );
    //   }
    // }

    // fetchData();

  }
}
</script>

<style>

</style>