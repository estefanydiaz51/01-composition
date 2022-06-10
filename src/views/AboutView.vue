<template>
  <div class="about">
    <Title :contador="contador" :color="color" ></Title>
    <!-- <h1
      :style="{'color': color}"
    >
      Contador: {{ contador }}
    </h1> -->
    <!-- <button @click="aumentar">+</button>
    <button @click="disminuir">-</button> -->
    <Btn :textoBoton="'+'" @accion="aumentar"></Btn>
    <Btn :textoBoton="'-'" @accion="disminuir"></Btn>

    <hr>
    <input type="text" v-model="texto">
    <p>{{ texto }}</p>
  </div>
</template>
<script>
import Btn from '../components/Btn'
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import Title from '../components/Title.vue'
export default {
  components: {
    Btn,
    Title
  },
  setup() {
    let contador = ref(0);
    let texto = ref('');

    const color = computed( () => {
      if ( contador.value < 0 ){
        return 'red';
      } else {
        return 'blue';
      }
    } )

    const aumentar = () => {
      contador.value ++;
    }

    const disminuir = () => {
      contador.value --;
    }

    return { contador, disminuir, aumentar, color, texto }
  },
}
</script>

