<template>

<div class="row">
    <div class="col-4">

    <IngresantesForm/>

    </div>

    <div class="col-8">

        <table class="table">

            <thead>

                <tr>

                    <th>Email</th>
                    <th>Acompañamiento </th>
                    <th>D/M/A</th>
                    <th>DNI</th>
                    <th>Email Estudiante</th>
                    <th>Escuela Primaria</th>
                    <th>Genero</th>
                    <th>Nacionalidad</th>
                    <th>Nombre y Apellido</th>
                    <th>Servicio Wifi</th>
                    <th>Accion</th>
        


                </tr>

            </thead>

            <tbody>

                <tr v-for="i of datos" v-bind:key="i.DNI">
                    <td> {{i.email}} </td>
                    <td> {{i.acompañamiento}} </td>
                    <td> {{i.dia_mes_año}} </td>
                    <td> {{i.dni}} </td>
                    <td> {{i.email_estudiante}} </td>
                    <td> {{i.escuela_primaria}} </td>
                    <td> {{i.genero}} </td>
                    <td> {{i.nacionalidad}} </td>
                    <td> {{i.nombreyapellido}} </td>
                    <td> {{i.serviciowifi}} </td>
                    <td> 
                        <button @click="eliminarIngresante(i.id)" class="btn btn-danger btn-sm" style="margin-right:10px">
                        <i class="bi bi-trash"></i>
                        </button>
                        <button @click="editarIngresante(i)" class="btn btn-info btn-sm">
                        <i class="bi bi-pencil"></i>
                        </button>
                    </td>
                </tr>

            </tbody>

        </table>

    </div>
</div>
    
</template>
<script>
import IngresantesForm from '@/components/IngresantesForm.vue';
import {db} from '@/utils/firebase'
import { provide,ref } from '@vue/runtime-core';
export default {
    name:'IngresanteAdminForm.vue', 
    components:{
        IngresantesForm 
    },

    setup: () => {

        const ingresante ={
            /*email:this.email,
            acompañamiento: this.acompañamiento_pedagogico,
            dia_mes_año:this.dia_mes_año,
            dni:this.dni,
            email_estudiante:this.email_estudiante,
            escuela_primaria:this.escuela_primaria,
            genero:this.genero,
            nacionalidad:this.nacionalidad,
            nombreyapellido:this.nombreyapellido,
            serviciowifi:this.serviciowifi*/
            email:'probando@gmail.com',
            acompañamiento:'probando@gmail.com',
            dia_mes_año:'probando@gmail.com',
            dni:'probando@gmail.com',
            email_estudiante:'probando@gmail.com',
            escuela_primaria:'probando@gmail.com',
            genero:'probando@gmail.com',
            nacionalidad:'probando@gmail.com',
            nombreyapellido:'probando@gmail.com',
            serviciowifi:'probando@gmail.com',
        };

        const unIngresante = ref(ingresante)
        provide('unIngresante',unIngresante)

        
        return{}
    },

    data(){
        return{
        email:'',
        nombreyapellido:'',
        dni:'',
        dia_mes_año:'',
        correo_electronico_estudiante:'',
        serviciosdeinternet:'',
        acompañamiento_pedagogico:'',
        genero:'',
        nacionalidad:-1,
        escuela_primaria:-1,
        id:null,
        datos:[],
        lista_Ingresantes:[]
        }
    },

    methods:{
        async listar(){
            const Ingresantes= await db.collection("Ingresantes").get()
            this.datos = Ingresantes.docs.map ( doc=>{

                this.lista_Ingresantes = doc.data()
                this.lista_Ingresantes.id = doc.id;

                return this.lista_Ingresantes
            });
        },
        async eliminarIngresante(id){
            await db.collection("Ingresantes").doc(id).delete();
            this.listar()
        },
            editarIngresante(i){
                this.email = i.email;
                this.acompañamiento_pedagogico = i.acompañamiento;
                this.dia_mes_año = i.dia_mes_año;
                this.dni = i.dni;
                this.correo_electronico_estudiante = i.email_estudiante;
                this.escuela_primaria = i.escuela_primaria;
                this.genero = i .genero;
                this.nacionalidad = i.nacionalidad;
                this.nombreyapellido = i.nombreyapellido;
                this.id = i.id;
            },

    },

    mounted(){
        this.listar()
    }

}
</script>