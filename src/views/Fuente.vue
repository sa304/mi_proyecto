<template>
  <div id="fuente">
    <Navbar />
    <!--importa componente-->
<div class="container text-justify">
  <div class="row">
       <p class="text-justify mx-5 my-5">
      <strong>
        Eres libre de:
        </strong> 
     <ul>
 <li>Compartir : copie y redistribuya el material en cualquier medio o formato</li>
<li>
       Adaptar : mezclar, transformar y construir sobre el material
      para cualquier propósito, incluso comercialmente.
     </li>
     </ul>
        <strong>
        Importante saber:
        </strong> 
         <ul>
El licenciante no puede revocar estas libertades mientras siga los términos de la licencia.
     </ul>
    </p>
  </div>
</div>
    <Footer />
    <!--importa componente-->
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue"; /*no borrar*/
import Footer from "@/components/Footer.vue"; /*no borrar*/
export default {
  name: "Fuente" /*se debe llamar igual*/,
  components: {
    Navbar,
    Footer
  }
};
</script>
<style lang="scss">
</style>