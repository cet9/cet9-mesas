<template>
    <InscripcionForm/>
    <ul class="list-group">
      <li v-for="u in data" class="list-group-item" :key="u.id">{{ u.username}}</li>
    </ul>
</template>

<script>
// @ is an alias to /src
import InscripcionForm from '@/components/InscripcionForm.vue'

import { db } from "@/utils/firebase"

export default {
  name: 'Inscripcion',
  components: {
    InscripcionForm
  },

  data(){
    return {
        data:[]
    }
  },

  methods: {
      async obtenerUsuarios()
      {
          const usuarios =  await db.collection("usuario").get()

          const u = usuarios.docs.map( doc => {
              return doc.data();
          });

          this.data = u;
      },

  },

  mounted() {
    this.obtenerUsuarios()
  }
}
</script>