<template>
 <Menu/>
  <HelloWorld msg="Inscripción a mesas"/>
  <button class = "btn btn-danger">Cancelar</button>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Menu
  }
}
</script>

<style>

</style>
