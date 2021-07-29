<template>
 <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Nombre del alumno</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre y Apellido">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">DNI</label>
  <input type="text" class="form-control" id="" placeholder="Num.">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Curso y Division</label>
  <input type="text" class="form-control" id="" placeholder="Ingresar">
</div>


</template>

<script>
export default {
  name: 'Inscripcion',
  props: {
    msg: String
  }
}
</script>