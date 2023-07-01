<template>
  <div class="nav">
    <div class="nav-content">
      <div class="name-item">
        <div class="sedra-name">
          Sedra_Rabe
        </div>
      </div>
      <div class="menu">
        <div class="menu-item">
          <a href="#" @click="scrollToSection('#home')">Acceuil</a>
          <a href="#" @click="scrollToSection('#info')">A propos</a>
          <a href="#" @click="scrollToSection('#projets')">Mes projets</a>
          <a href="#" @click="scrollToSection('#contact')">Me contacter</a>
        </div>
        
      </div>
      <h3 style="color: red;">⚠️Ce site est toujours en cours de construction, on y est presque 👷 </h3>

    </div>
  </div>
</template>

  
<script>
import VueScrollTo from 'vue-scrollto';

    export default {
        name:'HeaderComponent',
        props: {
            txt: String
        },
        methods: {
    scrollToSection(sectionId) {
      VueScrollTo.scrollTo(sectionId, 500, { easing: 'ease-in-out' });
    },
  },
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');

.nav {
  grid-area: nav;
  margin-top: 30px;
}

.content {
  grid-area: contenu;
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0% 15vh;
  width: 100%;
  justify-content: center; /* Ajout de cette propriété */
}

.menu-item {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 30px;
}

.name-item {
  display: flex
}

.sedra-name {
  font-family: 'Instrument Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  display:flex;
  text-align: center;
  letter-spacing: -0.01em;
  background: linear-gradient(94.52deg, #F5F5F5 20.79%, #BFBFBF 91.13%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-left:50px;
}

.nav-content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.menu-item a,
.social-media-item a {
  margin-right: 10px;
  margin-left: 10px;
  text-decoration: none;
  color: #bfbfbf;
  font-family: 'Instrument Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 23px;
  text-align: center;
}

.logo {
  font-size: 35px;
  font-weight: lighter;
}


</style>