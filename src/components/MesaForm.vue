<template>
<div class="container mt-3">
 <div class="card border-primary mb-3">
   <div class="card-header"> Mesas </div>
   <div class="card-body">

   
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Materia a rendir:</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=" Ej: Lengua y Literatura">
</div>

 <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Curso:</label>
  <input class="form-control" type="text" placeholder="1" aria-label="default input example">
</div>

 <div class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">División:</label>
  <input class="form-control" type="text" placeholder="3°" aria-label="default input example">
 </div>

 <div class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">Ciclo:</label>
  <input class="form-control" type="text" placeholder="Ciclo superior o primario" aria-label="default input example">
 </div>

 <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Fecha:</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Fecha a rendir">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Hora:</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Hora a rendir">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Docente:</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Nombre del docente">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Aula:</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ej: Aula B-1">
</div>

<div class= "mb-3">
<button type="button" class="btn btn-success">Guardar</button>
</div>
</div>
</div>
</div>


</template>

<script>
export default {
  name: 'MesaForm',
  props: {
    msg: String
  }
}
</script>