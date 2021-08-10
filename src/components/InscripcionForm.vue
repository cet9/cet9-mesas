<template>
<div class="container mt-3">
  <div class="card border-primary mb-3">
    <div class="card-header">Datos Personales</div>

    <div class="card-body">
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Nombre del alumno</label>
    <input v-model="nombre" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre y Apellido">
  </div>

  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">DNI</label>
    <input v-model="dni" type="text" class="form-control" id="" placeholder="N°">
  </div>

  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Curso y División</label>
    <input v-model="curso" type="text" class="form-control" id="" placeholder="Ej: 1ro 1ra CS TE">
  </div>

  <div class= "mb-3">
    <button @click="mostrar" type="button" class="btn btn-outline-primary">Guardar</button>
    </div>
    </div>
  </div>

</div>


</template>

<script>
export default {
  name: 'InscripcionForm',
  data(){
    return {
      nombre:``,
      dni:null,
      curso:``,
    }
  },
methods: {
  mostrar(){
    console.log(`
      ${this.nombre}
      ${this.dni}
      ${this.curso}   
    `)

  }
}
}
</script>