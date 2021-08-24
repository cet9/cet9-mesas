<template>


  <div class="container mt-3">

    <div class="row">

        <div class="col-4"> 

          <div class="card border-primary mb-3">

            <div class="card-header"> Mesas </div>
            <div class="card-body">

                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Materia a rendir:</label>
                        <input type="email" v-model="materia" class="form-control" id="exampleFormControlInput1" placeholder=" Ej: Lengua y Literatura">
                      </div>

                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Curso:</label>
                        <input class="form-control" v-model="curso" type="text" placeholder="1" aria-label="default input example">
                      </div>

                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">División:</label>
                        <input class="form-control" v-model="division" type="text" placeholder="3°" aria-label="default input example">
                      </div>

                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Ciclo:</label>
                        <input class="form-control" v-model="ciclo" type="text" placeholder="Ciclo superior o básico" aria-label="default input example">
                      </div>

                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Fecha:</label>
                        <input type="email" v-model="fecha" class="form-control" id="exampleFormControlInput1" placeholder= "Ej: 23/08/21">
                      </div>

                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Hora:</label>
                        <input type="email" v-model="hora" class="form-control" id="exampleFormControlInput1" placeholder="Hora a rendir">
                      </div>

                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Docente:</label>
                        <select v-model="docente" class="form-select" aria-label="Default select example">
                          <option selected value="-1" disabled>seleccione Docente</option>
                          <option v-for="(d,index) of datos_docentes" :value="index" v-bind:key="d.dni"> {{d.nombre}}, {{d.apellido}} </option>
                        </select>
                      </div>

                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Aula:</label>
                        <input type="email" v-model="aula" class="form-control" id="exampleFormControlInput1" placeholder="Ej: Aula PB-1">
                      </div>

                      <div class= "mb-3">
                        <button type="button" @click="guardar()" class="btn btn-outline-primary">Guardar</button>
                      </div>
              
            </div>

          </div>

        </div>

        <div class="col-8">
          <table class="table">
            <thead>
              <tr>
                <th>Materia</th>
                <th>Curso</th>
                <th>División</th>
                <th>Ciclo</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Docente</th>
                <th>Aula</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="m of datos" v-bind:key="m.materia">
                <td>{{m.materia}}</td>
                <td>{{m.curso}}</td>
                <td>{{m.division}}</td>
                <td>{{m.ciclo}}</td>
                <td>{{m.fecha}}</td>
                <td>{{m.hora}}</td>
                <td>{{m.docente}}</td>
                <td>{{m.aula}}</td> 
              </tr>
            </tbody>


          </table>


        </div> 


    </div>

    

</div>


</template>

<script>
import {db} from "@/utils/firebase";
export default {
  name: 'MesaForm',
  data(){
    return{
      materia:'',
      curso:'' ,
      división:'',
      ciclo:'',
      fecha:'',
      hora:'',
      docente:-1,
      aula:'',
      datos: [],
      datos_docentes:[]
    } 
  },
  methods: { 
    guardar(){ 
        db.collection("Mesas").doc().set({
          materia: this.materia,
          curso: this.curso,
          division: this.division,
          ciclo: this.ciclo,
          fecha: this.fecha,
          hora: this.hora,
          docente: this.docente,
          aula: this.aula,
        });

         this.listar()
    },
    async listar(){

      let mesas  = await db.collection("Mesas").get();
       this.datos = mesas.docs.map( doc => {
              return doc.data();
          });

          
    },
    async listar_docentes(){

      let docentes  = await db.collection("docentes").get();
       this.datos_docentes = docentes.docs.map( doc => {
              return doc.data();
          });

          
    }


    },

    mounted() {
      this.listar()
      this.listar_docentes()
    }
  }


</script>
