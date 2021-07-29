<template>
  <Menu/>
  <HelloWorld msg="Inscripción a mesas"/>
  <Docente/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue'
import Docente from './components/Docente.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Menu,
    Docente
  }
}
</script>

<style>

</style>
