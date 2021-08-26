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
                          <select v-model="curso" class="form-select" aria-label="default input example">
                                <option value="-1" disabled selected>Seleccione curso</option>
                                <option value="1">1°</option>
                                <option value="2">2°</option>
                                <option value="3">3°</option>
                                <option value="4">4°</option>
                                <option value="5">5°</option>
                                <option value="6">6°</option>
                          </select>
                      </div>

                      <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">División:</label>
                          <select v-model="division"  class="form-select" aria-label="default input example">

                                <option value="-1" disabled selected>Seleccione división</option>
                                <option value="1">1°</option>
                                <option value="2">2°</option>
                                <option value="3">3°</option>
                                <option value="4">4°</option>
                                <option value="5">5°</option>
                                <option value="6">6°</option>
                            </select>    
                      </div> 
                            
                            

                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Ciclo:</label>
                       
                        <select v-model="ciclo" type="text" class="form-select" aria-label="default input example">
                            <option value="-1" disabled selected >Seleccione Ciclo</option>
                            <option value="1">Ciclo Superior</option>
                            <option value="2">Ciclo Básico</option>
                           </select>   
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
                        

                        <select v-model="aula" class="form-select" aria-label="default input example">
                            
                            <option value="1">PB-1</option>
                            <option value="2">PB-2</option>
                            <option value="3">PB-3</option>
                            <option value="4">PB-4</option>
                            <option value="5">PB-5</option>
                            <option value="6">PB-6</option>
                            <option value="1">PA-1</option>
                            <option value="2">PA-2</option>
                            <option value="3">PA-3</option>
                            <option value="4">PA-4</option>
                            <option value="5">PA-5</option>
                            <option value="6">PA-6</option>
                          </select> 
                           
                      </div>

                      <div class= "mb-3">
                        <button type="button" @click="guardar()" class="btn btn-outline-success">Guardar</button>
                        <button @click="ActualizarMesas()"  class="btn btn-primary "> Actualizar </button>
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
                <td>
                <button @click="eliminarMesas(m.id)" class="btn btn-danger btn-sm">
               
                 <i class="bi bi-trash" style="margin-right-10px"></i>
                
                </button>
                <button @click="EditarMesas(m)" class="btn btn-info btn-sm">
                  <i class="bi bi-pencil"></i> 
                  
                </button>
                </td>
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
      curso:-1 ,
      division:-1,
      ciclo:-1,
      fecha:'',
      hora:'',
      docente:-1,
      aula:'',
      datos: [],
      datos_docentes:[],
      lista_mesas:[],
      id: null
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
          this.materia=''; this.curso=''; this.division=''; this.ciclo=''; this.fecha=''; this.hora='';
          this.docente=''; this.aula='';
    },
    async listar(){

      let Mesas  = await db.collection("Mesas").get();
       this.datos = Mesas.docs.map( doc => {
              this.lista_Mesas = doc.data()
              this.lista_Mesas.id = doc.id;

              return this.lista_Mesas;
          });

          
    },

    EditarMesas(Mesas){
      this.materia = Mesas.materia;
      this.curso = Mesas.curso;
      this.division = Mesas.division;
      this.ciclo = Mesas.ciclo;
      this.fecha = Mesas.fecha;
      this.hora = Mesas.hora;
      this.docente = Mesas.docente;
      this.aula = Mesas.aula;
      this.id = Mesas.id;
    },

   async ActualizarMesas(){
         const UnaMesa = {
          materia: this.materia,
          curso: this.curso,
          division: this.division,
          ciclo: this.ciclo,
          fecha: this.fecha,
          hora: this.hora,
          docente: this.docente,
          aula: this.aula,
        }
         await db.collection("Mesas").doc(this.id).update(UnaMesa)
         this.listar()

    },

    async eliminarMesas(id){
      await db.collection("Mesas").doc(id).delete();
      this.listar()

    },

    },

    

    mounted() {
      this.listar()

    }
  }


</script>
