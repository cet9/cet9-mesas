<template>
  <Menu/>
  <router-view/>
</template>
<script>
// import {} from "./utils/firebase";
// @ is an alias to /src
import Menu from '@/components/Menu.vue'

export default {

  components: {
    Menu
  }
}
</script>

