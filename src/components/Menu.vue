<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">


<a class="navbar-brand" href="#">

      <img src="@/assets/1logocet9.png" alt="" width="50" height="60" class="d-inline-block align-text-top">
    </a>




    <a class="navbar-brand" href="#">App Cet 9</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Mesas de examen</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Talleres</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Mas
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Programas de estudio</a></li>
            <li><a class="dropdown-item" href="#">Registro Docente</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Consultas Frecuentes</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">. . .</a>
        </li>
      </ul>

      <form class="d-flex">
    


        <button class="btn btn-outline-success" type="submit">Ingresar </button>
      </form>
    </div>
  </div>
</nav>











</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg: String
  }
}
</script>