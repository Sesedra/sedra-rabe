<template>
  <div id="app">
    <div class="lottie_container">
      <div id="lottie" ref="lottieContainer">
    </div>
  </div>
    <div class="main-container" >
    <HeaderComponent txt="Sedra Rabe" @load="handleComponentLoad"/>
    <HomeComponent @load="handleComponentLoad" />
    <BannerComponent @load="handleComponentLoad" />
    <DescriptionComponent @load="handleComponentLoad" />
    <BannerProjectComponent @load="handleComponentLoad" />
    <ProjectComponent @load="handleComponentLoad" />
    <ContactComponent @load="handleComponentLoad" />
    <div
      class="up"
      @click="scrollToTop"
      id="upButton"
      v-wave="{ color: 'blue' }"
      ref="upButton"
    >
      <img src="@/assets/up.svg" alt="" id="arrow" />
    </div>
  </div>
</div>
</template>

<script>
import HeaderComponent from './components/Header/HeaderComponent.vue';
import HomeComponent from './components/Content/HomeComponent.vue';
import BannerComponent from './components/Content/BannerComponent.vue';
import DescriptionComponent from './components/Content/DescriptionComponent.vue';
import BannerProjectComponent from './components/Content/BannerProjectComponent.vue';
import ContactComponent from './components/Content/ContactComponent.vue';
import ProjectComponent from './components/Content/ProjectComponent.vue';
import lottie from 'lottie-web';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HomeComponent,
    BannerComponent,
    DescriptionComponent,
    BannerProjectComponent,
    ProjectComponent,
    ContactComponent
  },
  data() {
    return {
      bannerIsRed: false,
      bannerProjectIsRed: false,
      componentLoadCount: 0,
      loading: true,
      totalComponents: 7, // Mettez à jour le nombre total de composants
    };
  },
  mounted() {
    document.addEventListener('DOMContentLoaded', this.handleDOMLoad);
    lottie.loadAnimation({
        container: this.$refs.lottieContainer,
        path: 'src/assets/98282-loading.json',
        renderer: 'svg',
        loop: true,
        autoplay: true,
      });
  },
  methods: {
    handleDOMLoad() {
      console.log('Tous les éléments de la page ont été chargés.');
      this.loading=true;
    },
    handleComponentLoad() {
      this.loading=true;
      this.componentLoadCount++;
      if (this.componentLoadCount === this.totalComponents) {
        console.log('Tous les composants ont été chargés.');
      }
    },
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

.step {
  height: 500px;
  background-color: lightgray;
  margin-bottom: 20px;
}

.banner-red {
  background-color: red;
}

.banner-project-red {
  background-color: red;
}
.main-container {
  font-family: 'Instrument Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-areas: "nav" "contenu" "banniere" "info" "banniere-project" "project" "contact";
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

.lottie_container {
    display: none;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 100vh
  }

  #lottie {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
  }
</style>
