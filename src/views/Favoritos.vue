<template>
<div>

<Navbar /> <!--importa componente-->

<div class="container">
 <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
  
</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"; /*no borrar*/

export default {
  name: "Favoritos", /*se debe llamar igual*/
  components: {
    Navbar
  }
};
</script>

<style lang="scss">

</style>




