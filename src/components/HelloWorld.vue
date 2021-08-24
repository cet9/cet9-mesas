<template>
<<<<<<< HEAD

<div class="container mt-3">

      <div class="form-group" style="max-width: 20rem;">
          <label for="exampleSelect1" class="form-label mt-4">Año:</label>
          <select class="form-select" id="exampleSelect1">
            <option>1° C.B.</option>
            <option>2° C.B.</option>
            <option>1° C.S.T.E</option>
            <option>1° C.S.T.M</option>
            <option>2° C.S.T.E</option>
            <option>2° C.S.T.M</option>
            <option>3° C.S.T.E</option>
            <option>3° C.S.T.M</option>
            <option>4° C.S.T.E</option>
            <option>4° C.S.T.M</option>
          </select>
        </div>

    
    <div class="row">

        <div v-for="m of datos" v-bind:key="m.curso" class="col-12 col-md-3 col-lg-4">

            <div class="card border-primary mb-3 mt-3" >
              <div class="card-header text-center">Fecha:{{m.fecha}} Horario:{{m.horario}}</div>
              <div class="card-body">
                <h4 class="card-title">{{m.materia}}</h4>
                <p class="card-text text-start text-primary">
                  Docente:{{m.docente}} <br>
                  Aula:{{m.aula}}
                </p>
                <div class="d-grid gap-2">
                <router-link class="btn btn-primary" style="color:white" to="/inscripcion">inscribirse</router-link>
                </div>
              </div>
            </div>



        </div>

=======
 <div class="container mt-3">
   <div class="form-group" style="max-width: 20rem;">>
      <label for="exampleSelect1" class="form-label mt-4">Año:</label>
      <select class="form-select" id="exampleSelect1">
        <option>1° C.B.</option>
        <option>2° C.B.</option>
        <option>1° C.S.T.E</option>
        <option>1° C.S.T.M</option>
        <option>2° C.S.T.E</option>
        <option>2° C.S.T.M</option>
        <option>3° C.S.T.E</option>
        <option>3° C.S.T.M</option>
        <option>4° C.S.T.E</option>
        <option>4° C.S.T.M</option>
      </select>
    </div>
  <div class="card border-primary mb-3 mt-3" style="max-width: 20rem;">
  <div class="card-header text-center">Fecha:10/05/23 Horario:9:20</div>
  <div class="card-body">
    <h4 class="card-title">Electrotecnia II</h4>
    <p class="card-text text-start text-primary">
      Docente:Pablo Sanchez <br>
      Aula:P.A. 3
    </p>
    <div class="d-grid gap-2">
    <router-link class="btn btn-primary" style="color:white" to="/inscripciones">inscribirse</router-link>
>>>>>>> d872d62d701b0e6816560896af05c019921f5ac0
    </div>

</div>




 
</template>

<script>
import {db} from "@/utils/firebase"
export default {
  name: 'HelloWorld',
  data (){
    return{
      datos:[]
    }
  },
  
  methods: {
    async listar(){
      const mesas = await db.collection("Mesas").get()

        this.datos = mesas.docs.map(doc=>{
              return doc.data()

        });

    }
  
    
  
  },
  mounted(){
    this.listar()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
