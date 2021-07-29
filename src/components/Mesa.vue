<template>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Materia a rendir</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=" Ej lengua y Literatura">
</div>

<input class="form-control" type="text" placeholder="cURSO" aria-label="default input example">

<input class="form-control" type="text" placeholder="Division" aria-label="default input example">







<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Fecha</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Fecha a rendir">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Hora</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Hora a rendir">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Docente</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Nonbre del docente">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Aula</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=" Ej Aula B-1">
</div>



</template>

<script>
export default {
  name: 'Mesa',
  props: {
    msg: String
  }
}
</script>