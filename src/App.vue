<template>
  <Menu/>
  <HelloWorld msg="Inscripción a mesas"/>
  <Mesa/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue'
import Mesa from './components/Mesa.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Menu,
    Mesa
  }
}
</script>

<style>

</style>
