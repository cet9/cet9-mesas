<template>
 <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Nombre y Apellido</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Nombre del alumno">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">DNI</label>
  <textarea class="form-control" id="Num." rows="3"></textarea>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Curso y Division</label>
  <input type="email" class="form-control" id="" placeholder="Ingresar">
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