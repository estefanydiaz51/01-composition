<template>
  <h1>Contador: {{contador}}</h1>
  <Btn :texto-boton="'Aumentar'" @accion="aumentar"></Btn>
  <Btn :texto-boton="'Disminuir'" @accion="disminuir"></Btn>

</template>

<script>
import Btn from '../components/Btn'
import { useContador } from '../hooks/useContador'
export default {
  components: { Btn },
    setup(){
        return { ...useContador() }
    }
}
</script>

<style>

</style>