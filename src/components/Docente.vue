<template>


<div class="container">

<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nombre</label>
    <input type="email" class="form-control" id="inputEmail4">
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Apellido</label>
    <input type="password" class="form-control" id="inputPassword4">
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">DNI</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="22000000">
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Gmail</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="name@example.com">
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Numero Celular</label>
    <input type="text" class="form-control" id="inputCity">
  </div>
  <div class="col-md-4">






 



  </div>

  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Guardar mi Informacion
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Registarse</button>
  </div>
</form>

</div>

</template>

<script>
export default {
  name: 'Docente',
  props: {
    msg: String
  }
}
</script>