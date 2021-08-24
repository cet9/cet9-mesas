<template>
  <div class="container mt-3">

    <div class="row">
        <div class="col-4">
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
<<<<<<< HEAD
        <button @click="Guardar()" type="button" class="btn btn-outline-primary">Registrarse</button>
=======
        <button @click="guardar()" type="button" class="btn btn-outline-primary">Registrarse</button>
>>>>>>> 6c0e53d531c20f6ffcc845d3f79d69f43957812a
      </div>
      </div>
          </div>
        </div>
        <div class="col-8">

        <table class="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>DNI</th>
              <th>Email</th>
              <th>Celular</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="docentes of datos" v-bind:key="docentes.dni">
              <td>{{docentes.nombre}}</td>
              <td>{{docentes.apellido}}</td>
              <td>{{docentes.dni}}</td>
              <td>{{docentes.email}}</td>
              <td>{{docentes.celular}}</td>
            </tr>
          </tbody>
        </table>

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
      celular: null,
      datos:[]
    }
  },
  methods: {
<<<<<<< HEAD
     Guardar(){
       console.log(`
         ${this.nombre}
         ${this.apellido}
         ${this.dni}
         ${this.email}
         ${this.celular}
       `)
=======

     guardar(){
      db.collection("docentes").doc().set({
        nombre:this.nombre,
        apellido:this.apellido ,
        dni:this.dni,
        email:this.email,
        celular:this.celular
      })
      this.Listar()
>>>>>>> 6c0e53d531c20f6ffcc845d3f79d69f43957812a
     },
    async Listar(){
      let docentes = await db.collection("docentes").get();

       this.datos = docentes.docs.map( doc => {return doc.data();
          });
    }
   },

    mounted(){
      this.Listar()
    }

}
</script>