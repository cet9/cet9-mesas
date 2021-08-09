<template>
 <div class="container mt-3">
   <div class="form-group" style="max-width: 20rem;">>
      <label for="exampleSelect1" class="form-label mt-4">Año:</label>
      <select class="form-select" id="exampleSelect1">
        <option>1° C.B.</option>
        <option>2° C.B.</option>
        <option>1° C.S.T.E</option>
        <option>1° C.S.T.M</option>
        <option>2° C.S.T.E</option>
        <option>2° C.S.T.M</option>
        <option>3° C.S.T.E</option>
        <option>3° C.S.T.M</option>
        <option>4° C.S.T.E</option>
        <option>4° C.S.T.M</option>
      </select>
    </div>
  <div class="card border-primary mb-3 mt-3" style="max-width: 20rem;">
  <div class="card-header text-center">Fecha:10/05/23 Horario:9:20</div>
  <div class="card-body">
    <h4 class="card-title">Electrotecnia II</h4>
    <p class="card-text text-start text-primary">
      Docente:Pablo Sanchez <br>
      Aula:P.A. 3
    </p>
    <div class="d-grid gap-2">
    <router-link class="btn btn-primary" style="color:white" to="/inscripcion">inscribirse</router-link>
    </div>
   </div>
</div>
  
</div>

 
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
