<template>
  <div class="home-page" id="home">
    <div class="hero">
      <p>Transformer les idées en produits web et mobiles innovants avec une touche de <span id="design"> design </span></p>
      <div class="hero-buttons">
        <button id="contacter" @click="scrollToSection('#contact')" v-wave="{ color: 'gray' }">Me contacter</button>
        <button id="cv" v-wave="{ color: 'gray' }" @click="downloadCV" v-if="!loading">
          <img :src="require('@/assets/prime_download.svg')">
          Consulter mon CV
        </button>
        <button id="cv-cours" v-wave="{ color: 'red' }" disabled v-if="loading">
          Patientez...
        </button>
      </div>
    </div>
    <div class="bg">
      <img :src="require('@/assets/sary.svg')">
    </div>
  </div>
</template>

<script>
// import { saveAs } from 'file-saver';
import VueScrollTo from 'vue-scrollto';


export default {
  name: "HomeComponent",
  data(){
    return{
      loading:false,
    }
  },
  methods: {
    async downloadCV() {
      try {
        this.loading = true;
        const { default: fileURL } = await import('@/assets/sedra.pdf');
        const link = document.createElement('a');
        link.href = fileURL;
        link.setAttribute('download', 'CV_Sedra_Rabe.pdf');
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        this.loading = false;
      } catch (error) {
        console.error('Erreur lors du téléchargement du CV :', error);
        this.loading = false;
      }
    },
    scrollToSection(sectionId) {
      VueScrollTo.scrollTo(sectionId, 500, { easing: 'ease-in-out' });
    },
}
}
</script>

<style scoped>
    .home-page {
      background-size: cover;
      background-position: center;
      height: 90vh;
      grid-area: contenu;
    }
  
    .hero {
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 0 2rem;
    }
  
    h1 {
      font-size: 4rem;
      margin-bottom: 2rem;
    }
  
    p {
        font-family: 'Instrument Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 52px;
        line-height: 63px;
        text-align: center;
        letter-spacing: -0.01em;


        background: linear-gradient(92.9deg, #F5F5F5 -13.31%, #BEBEBE 75.24%, #626262 108.78%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;

        width: 804px;
        height: 189px;
        left: calc(50% - 804px/2);
        top: 397px;
    }

    /* #design {
      background: linear-gradient(45deg, #840dbb, #189def);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    } */
    
    #contacter, #cv, #cv-cours{
        font-family: 'Instrument Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 19px;
        line-height: 23px;
        text-align: center;
        color: #BFBFBF;
    }
    .hero-buttons {
      display: flex;
      justify-content: center;
      gap: 0rem;
    }
  
     #contacter {
       transition: 0.1s ease-in-out;
      box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
      cursor: pointer;
      margin: 0 1rem;
      padding: 1.25rem 3rem;
      border: solid 1.7px transparent;
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(145deg, #C4C4C4, #161616);
      background-origin: border-box;
      background-clip: content-box, border-box;
      box-shadow: 2px 1000px 1px #242424 inset;
    }

    #contacter:hover {
      transition: 0.1s ease-in-out;
      box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
      cursor: pointer;
      margin: 0 1rem;
      padding: 1.25rem 3rem;
      border: solid 1.7px transparent;
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(45deg, #C4C4C4, #161616);
      background-origin: border-box;
      background-clip: content-box, border-box;
      box-shadow: 2px 1000px 1px #161616 inset;
    }

    #cv, #cv-cours {
        justify-content: center;
        align-items: center;
        border: 0;
        display: flex;
        gap: 0.5rem;
        cursor: pointer;
        margin: 0 1rem;
        padding: 1.25rem 3rem;
        transition: 0.1s ease-in-out;
        box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
        cursor: pointer;
        margin: 0 1rem;
        padding: 1.25rem 3rem;
        border: solid 1.7px #161616;
        background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(45deg, #c4c4c4, #161616);
        background-origin: border-box;
        background-clip: content-box, border-box;
        box-shadow: 2px 1000px 1px #161616 inset;
    }

    #cv:hover, #cv-cours {
      cursor: pointer;
      margin: 0 1rem;
      padding: 1.25rem 3rem;
      transition: 0.6s ease-in-out;
      box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
      cursor: pointer;
      margin: 0 1rem;
      padding: 1.25rem 3rem;
      border: solid 1.7px transparent;
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(45deg, #C4C4C4, #161616);
      background-origin: border-box;
      background-clip: content-box, border-box;
      box-shadow: 2px 1000px 1px #161616 inset;
    }

    .bg img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      z-index:-1;
      background-color: #161616
    }



  </style>
  