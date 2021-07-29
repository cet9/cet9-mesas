<template>
  <Menu/>
  <HelloWorld msg="Inscripción a mesas"/>
  <Mesa/>
  <Inscripcion/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue'
import Mesa from './components/Mesa.vue'
import Inscripcion from './components/Inscripcion.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Menu,
    Mesa,
    Inscripcion
  }
}
</script>

<style>

</style>
