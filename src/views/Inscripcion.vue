<template>
    <InscripcionForm/>
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