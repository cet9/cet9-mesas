<template>
  <Menu/>
<<<<<<< HEAD
  <HelloWorld msg="Inscripción a mesas"/>
  <Mesa/>
  <Inscripcion/>
=======
  <router-view/>
>>>>>>> c3ce87621c6a06408b317c6c139dc86cb4a791f6
</template>
<script>
<<<<<<< HEAD
import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue'
import Mesa from './components/Mesa.vue'
import Inscripcion from './components/Inscripcion.vue'
=======
// @ is an alias to /src
import Menu from '@/components/Menu.vue'

>>>>>>> c3ce87621c6a06408b317c6c139dc86cb4a791f6
export default {

  components: {
<<<<<<< HEAD
    HelloWorld,
    Menu,
    Mesa,
    Inscripcion
=======
    Menu
>>>>>>> c3ce87621c6a06408b317c6c139dc86cb4a791f6
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
