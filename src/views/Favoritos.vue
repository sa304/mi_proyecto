<template>
<div>

<Navbar /> <!--importa componente-->



<div class="container">
 <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Like</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td></td>
      <td></td>
   <td><button class="btn btn-sm btn-success">Like or dislike</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td></td>
      <td></td>
<td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td></td>
      <td></td>
    <td></td>
    </tr>
  </tbody>
</table>
</div>


<Footer /> <!--importa componente-->
  
</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"; /*no borrar*/

import Footer from "@/components/Footer.vue"; /*no borrar*/

export default {
  name: "Favoritos", /*se debe llamar igual*/
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss">

</style>




