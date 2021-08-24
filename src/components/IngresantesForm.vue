<template>
<div class="container mt-3">
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Direccion de correo electronico.</label>
        <input v-model="correo_electronico" type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese su correo electronico.">
    </div>

    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Nombre y Apellido del estudiante (Segun su D.N.I).</label>
        <input v-model="nombreyapellido" type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese Nombre y Apellido.">
    </div>

    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Numero del D.N.I del estudiante.</label>
        <input v-model="dni" type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese numero de D.N.I">
    </div>  

    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Fecha de nacimiento del estudiante.</label>
        <input v-model="dia_mes_año" type="email" class="form-control" id="exampleFormControlInput1" placeholder="Dia/Mes/Año">
    </div>

    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Correo electronico del estudiante (Este correo sera utilizado en caso de trabajar de forma virtual).</label>
        <input v-model="correo_electronico_estudiante" type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese su correo electronico.">
    </div>

    <div class="mb-3">
        <label for="">
            ¿Cuenta con servicios de internet en un dispositivo electronico?
        </label>
        <div class="form-check">
        <input v-model="serviciosdeinternet" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
            SI
        </label>
        </div>
        <div class="form-check">
        <input v-model="serviciosdeinternet" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
        <label class="form-check-label" for="flexRadioDefault2">
            NO
        </label>    
        </div>
    </div>
     <div class="mb-3">
            <label for="">
                En la etapa en la escuela primaria ¿El alumno dispuso de acompañamiento pedagógico del E.T.A.P?
            </label>
            <div class="form-check">
            <input v-model="acompañamiento_pedagogico" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
            <label class="form-check-label" for="flexRadioDefault2">
                SI
            </label>
            </div>
            <div class="form-check">
            <input v-model="acompañamiento_pedagogico" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked>
            <label class="form-check-label" for="flexRadioDefault3">
                NO
            </label>
            </div>

            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label" for="flexCheckChecked">
                Cuenta con C.U.D. (certificado único de discapacidad)
            </label>
            </div>  
    </div>
    <div class="mb-3">
                    <label for="">
                            Género
                    </label>
                <div class="form-check">
        <input v-model="genero" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
        <label class="form-check-label" for="flexRadioDefault1">
            Femenino
        </label>
        </div>
        <div class="form-check">
        <input v-model="genero" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
        <label class="form-check-label" for="flexRadioDefault2">
            Masculino
        </label>
        </div>
        <div class="form-check">
        <input v-model="genero" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked>
        <label class="form-check-label" for="flexRadioDefault3">
            Otros
        </label>
        <input v-model="genero2" class="form-control" placeholder="Ingrese Género" type="text" name="" id="">
        </div>
    </div>
    <div class="mb-3">
        <select v-model="nacionalidad" class="form-select" aria-label="Default select example">
            <option selected disabled value="-1">Ingrese Nacionalidad</option>
            <option value="1">Argentina</option>
            <option value="2">Boliviana</option>
            <option value="3">Brasilera</option>
            <option value="4">Chilena</option>
            <option value="5">Paraguaya</option>
            <option value="6">Peruana</option>
            <option value="7">Uruguaya</option>
            <option value="8">Otra</option>
        
        </select>
    </div>
    <div class="mb-3">
                <select v-model="escuela_primaria" class="form-select" aria-label="Default select example">
        <option selected disabled value="-1">Seleccióne Escuela Primaria donde el alumno concluyo 7mo Grado</option>
        <option value="1">N° 19</option>
        <option value="2">N° 33 Juan XXIII</option>
        <option value="3">N° 36</option>
        <option value="4">N° 45</option>
        <option value="5">N° 50</option>
        <option value="6">N° 53 Bernardino Rivadavia</option>
        <option value="7">N° 109</option>
        <option value="8">N° 111</option>
        <option value="9">N° 121</option>
        <option value="10">N° 131</option>
        <option value="11">N° 142</option>
        <option value="12">N° 165</option>
        <option value="13">N° 192</option>
        <option value="14">N° 199</option>
        <option value="15">N° 221</option>
        <option value="16">N° 234</option>
        <option value="17">N° 247</option>
        <option value="18">N° 248</option>
        <option value="19">N° 262</option>
        <option value="20">N° 264</option>
        <option value="21">N° 283</option>
        <option value="22">N° 285</option>
        <option value="23">N° 293</option>
        <option value="24">N° 294</option>
        <option value="25">N° 305</option>
        <option value="26">N° 313 El Manzanar</option>
        <option value="27">N° 338</option>
        <option value="28">N° 366</option>
        <option value="29">Colegio Estación Limay</option>
        <option value="30">Colegio Pablo Besson</option>
        <option value="31">Colegio Umbrales</option>
        <option value="32">Escuela Cristiana Descubrir</option>
        <option value="33">Escuela Primaria Crear</option>
        <option value="34">Instituto Almafuerte</option>
        <option value="35">Instituto Nuestra Señora de Fátima</option>
        <option value="36">Instituto Padre J. M. Brentana</option>
        <option value="37">Otra</option>

        
        </select>
    </div>
    <button @click="guardar()" class="btn btn-primary">
        guardar
    </button>

</div>

    
</template>

<script>
import{ db } from "@/utils/firebase"
export default {
    name:'IngresantesForm',
    data(){
        return{
            correo_electronico:'',
            nombreyapellido:'',
            dni:'',
            dia_mes_año:'',
            correo_electronico_estudiante:'',
            serviciosdeinternet:'',
            acompañamiento_pedagogico:'',
            genero:'',
            nacionalidad:-1,
            escuela_primaria:-1,



        }
    },
    methods:{
        async listar(){
            const Ingresantes= await db.collection("Ingresantes").get()

            this.datos = Ingresantes.docs.map ( doc=>{
                return doc.data();
            })
        },
        guardar(){
            const Ingresante = {
                email: this.correo_electronico,
                nombreyapellido: this.nombreyapellido,
                dni: this.dni,
                dia_mes_año: this.dia_mes_año,
                email_estudiante: this.correo_electronico_estudiante,
                serviciowifi: this.serviciosdeinternet,
                acompañamiento: this.acompañamiento_pedagogico,
                genero: this.genero,
                nacionalidad: this.nacionalidad,
                escuela_primaria: this.escuela_primaria,

                

            }
             db.collection("Ingresantes").doc().set(Ingresante)

             this.listar()
        }
    }
}
</script>