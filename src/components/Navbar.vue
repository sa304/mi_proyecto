<template>
  <div id="navbar" :style="{ backgroundImage: `url('${media}')` }">
    <div class="navbar-inner">
      <h1 class="navbar-title">
        {{title}}
      </h1>
      <div class="navbar-description">
        {{message}}
      </div>
      <div class="navbar-actions mt-4">
        <div class="btn btn-primary mr-3">
          {{primaryButtonText}}
        </div>
        <div class="btn btn-secondary">
          {{secondaryButtonText}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      title: 'Perros en la playa',
      message: `Son muchos los perros que al igual que sus amos,
                disfrutan de un buen día en la playa. En esta página encontrarás
                tips para cuidarlos correctamente.`,
      primaryButtonText: 'Mejores playas para perros',
      secondaryButtonText: 'Contáctanos',
      media: '/static/images/bg_hero.png',
    };
  },
};
</script>

<style>
#navbar {
 color: "red";
 }
</style>