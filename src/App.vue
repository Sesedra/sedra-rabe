<template>
  <div id="app">
    <HeaderComponent txt="Sedra Rabe" />
    <HomeComponent />
    <BannerComponent />
    <HomeComponent />
    <DescriptionComponent />
    <BannerProjectComponent />
    <ProjectComponent />
    <div class="up" @click="scrollToTop" id="upButton" v-wave="{ color: 'blue' }">
      <img src="@/assets/up.svg" alt="" id="arrow" />
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/Header/HeaderComponent.vue';
import HomeComponent from './components/Content/HomeComponent.vue';
import BannerComponent from './components/Content/BannerComponent.vue';
import DescriptionComponent from './components/Content/DescriptionComponent.vue';
import BannerProjectComponent from './components/Content/BannerProjectComponent.vue';
import ProjectComponent from './components/Content/ProjectComponent.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent,
    HomeComponent,
    BannerComponent,
    DescriptionComponent,
    BannerProjectComponent,
    ProjectComponent
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Instrument Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-areas: "nav" "contenu" "banniere" "info" "banniere-project" "project";
  padding: 0;
  margin: 0;
}

body {
  background-color: #161616;
  padding: 0;
  margin: 0;
}

.up {
  position: fixed;
  bottom: 50px;
  right: 50px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: solid 1.7px transparent;
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(145deg, #C4C4C4, #161616);
      background-origin: border-box;
      background-clip: content-box, border-box;
      box-shadow: 2px 1000px 1px #242424 inset;
  border-radius: 1000px;
  width: 50px;
  height: 50px;
  transition: 0.1s ease-in-out;

}

.up:hover {
  position: fixed;
  bottom: 50px;
  right: 50px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: solid 1.7px transparent;
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(15deg, #C4C4C4, #161616);
      background-origin: border-box;
      background-clip: content-box, border-box;
      box-shadow: 2px 1000px 1px #141414 inset;
  border-radius: 1000px;
  width: 50px;
  height: 50px
}


#arrow {
  height: 40px;
  align-self: center;
}

#upButton:hover {
  transform: translateY(-5px); /* Ajout */
}
</style>
