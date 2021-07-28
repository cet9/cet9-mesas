<template>
  <Menu/>
  <HelloWorld msg="Inscripción a mesas"/>
  
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
