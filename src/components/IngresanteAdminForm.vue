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
                </tr>

            </tbody>

        </table>

    </div>
</div>
    
</template>
<script>
import IngresantesForm from '@/components/IngresantesForm.vue';
import {db} from '@/utils/firebase'
export default {
    name:'IngresanteAdminForm.vue', 
    components:{
        IngresantesForm 
    },

    data(){
        return{
        datos:[]
        }
    },

    methods:{
        async listar(){
            const Ingresantes= await db.collection("Ingresantes").get()

            this.datos = Ingresantes.docs.map ( doc=>{
                return doc.data();
            })
        }
    },

    mounted(){
        this.listar()
    }

}
</script>