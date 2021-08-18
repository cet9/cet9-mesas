<template>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">


<a class="navbar-brand" href="#">

      <img src="@/assets/logo3.png" alt="" width="35" height="53" class="d-inline-block align-text-top">
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
          <router-link class="nav-link" to="/docente">Docente</router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/mesas">Mesas</router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/inscripciones">Inscripciones</router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/ingresantes">Ingresantes</router-link> 
        </li>

      </ul>

      <form class="d-flex">
    


        <button class="btn btn-outline-primary" type="submit">Ingresar</button>
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