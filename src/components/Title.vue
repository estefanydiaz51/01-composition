<template>
  <h1
    :style="{'color' : color}"
  >
    Contador Componente: {{ signoPeso }}
  </h1>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props: ['contador', 'color'],
    setup(props) {
        const signoPeso = computed( () => {
            return '$' + props.contador;
        })

        return { signoPeso }
    }
    // computed: {
    //     signoPeso(){
    //         return '$' + this.contador;
    //     }
    // }
}
</script>

<style>

</style>