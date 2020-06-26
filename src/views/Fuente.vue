<template>
  <div id="fuente">

<Navbar /> <!--importa componente-->
  
<Footer /> <!--importa componente-->
  
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"; /*no borrar*/

import Footer from "@/components/Footer.vue"; /*no borrar*/

export default {
  name: "Fuente", /*se debe llamar igual*/
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss">

</style>