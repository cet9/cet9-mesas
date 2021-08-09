<template>
 <div class="container">
  <div class="card border-primary mb-3" style="max-width: 20rem;">
  <div class="card-header">Fecha:10/05/23 Horario:9:20</div>
  <div class="card-body">
    <h4 class="card-title">Electrotecnia II</h4>
    <p class="card-text text-start text-primary">
      Docente:Pablo Sanchez <br>
      Aula:P.A. 3
    </p>
    <div class="d-grid gap-2">
    <button type="button" class="btn btn-primary btn-sm">Inscribirse</button>
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
