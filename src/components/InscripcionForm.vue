<template>
<div class="container mt-3">
  <div class="card border-primary mb-3">
    <div class="card-header">Datos Personales</div>

    <div class="card-body">
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Nombre del alumno</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre y Apellido">
  </div>

  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">DNI</label>
    <input type="text" class="form-control" id="" placeholder="N°">
  </div>

  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Curso y División</label>
    <input type="text" class="form-control" id="" placeholder="Ingresar">
  </div>

  <div class= "mb-3">
  <button type="button" class="btn btn-outline-primary">Guardar</button>
  </div>
    </div>
  </div>

</div>


</template>

<script>
export default {
  name: 'InscripcionForm',
  props: {
    msg: String
  }
}
</script>