<template>
  <div class="container mt-3">

    <div class="card border-primary mb-3">
      <div class="card-header">Alta docente</div>
      <div class="card-body">
          <div class="mb-3">
        <label for="inputEmail4" class="form-label">Nombre</label>
        <input v-model="nombre" type="email" class="form-control" id="inputEmail4" placeholder= "Ingrese nombre">
      </div>
      <div class="mb-3">
        <label for="inputPassword4" class="form-label">Apellido</label>
        <input  v-model="apellido" type="text" class="form-control" id="inputPassword4" placeholder= "Ingrese apellido">
      </div>
      <div class="mb-3">
        <label for="inputAddress" class="form-label">DNI</label>
        <input v-model="dni" type="number" class="form-control" id="inputAddress" placeholder="ej: 22000000">
      </div>
      <div class="mb-3">
        <label for="inputAddress2" class="form-label">Email</label>
        <input v-model="email" type="text" class="form-control" id="inputAddress2" placeholder="ej: name@example.com">
      </div>
      <div class="mb-3">
        <label for="inputCity" class="form-label">Número Celular</label>
        <input v-model="celular" type="number" class="form-control" id="inputCity" placeholder= "ej: 299-4222555">
      </div>
    

      <div class="mb-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck">
          <label class="form-check-label" for="gridCheck">
            Guardar información
          </label>
        </div>
      </div>
      <div class="mb-3">
        <button @click="guardar()" type="button" class="btn btn-outline-primary">Registrarse</button>
      </div>
      </div>
    </div>
    
  </div>
</template>

<script>

import{ db } from "@/utils/firebase"

export default {
  name: 'DocenteForm',
  data(){ 
    return {
      nombre:'',
      apellido: '',
      dni: null,
      email: '',
      celular: null
    }
  },
  methods: {

     guardar(){
      db.collection("docentes").doc().set({
        nombre:this.nombre,
        apellido:this.apellido ,
        dni:this.dni,
        email:this.email,
        celular:this.celular
      })
     },

   },
}
</script>