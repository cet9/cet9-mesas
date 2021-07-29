<template>
<<<<<<< HEAD
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
=======
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
>>>>>>> 3ddc510008d711b04f15a99dbe3348c954c68ecb
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
