import { ref } from '@vue/reactivity';

export function useContador() {
    let contador = ref(0);

    const aumentar = () => {
        contador.value ++;
    }
  
    const disminuir = () => {
        contador.value --;
    }
  
    return { contador, aumentar, disminuir}
}