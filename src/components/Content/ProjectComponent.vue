<template>
  <div class="info-page">
    <div class="hero" id="projets">
      <div class="header">
        <h3 style="color: red;"> ⚠️ Travaux en cours ⚠️ </h3>
        <h1>Mes projets</h1>
      </div>
      
      <div class="slide-container">
        <el-carousel :interval="5000" arrow="always" height="500px">
          <el-carousel-item v-for="card in cards" :key="card.title">
            <div class="card-content">
              <div class="card-left" :style="{ backgroundImage: `url(${card.backgroundImage})` }">
                <div class="card-left-content">
                  <div class="card-logo">
                    <img :src="card.logo" alt="Logo" class="logo-image" />
                  </div>
                  <div class="card-little-title">{{ card.littleTitle }}</div>
                  <div class="card-little-description">{{ card.littleDescription }}</div>
                </div>
              </div>
              <div class="card-right">
                <div class="card-right-content">
                  <div class="card-logo">
                    <img :src="card.logo" alt="Logo" class="logo-image" />
                  </div>
                  <span class="card-title">Description</span>
                  <div class="card-description">{{ card.description }}</div>
                  <span class="card-title">Outils</span>
                  <ul class="list-outils">
                    <li v-for="tool in card.tools" :key="tool">
                      <img :src="getToolIconPath(tool)" alt="Tool Icon" class="tool-icon" />
                    </li>
                  </ul>
                  <div class="link-container">
                    <a :href="card.projectLink" class="card-title">Voir le projet</a>
                    <img src="@/assets/link.svg" alt="Link Icon" class="link-icon" />
                  </div>
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectComponent',
  components: {},
  data() {
    return {
      cards: [
        {
          title: 'Recycleo',
          logo: require('@/assets/recycleo.svg'),
          backgroundImage: require('@/assets/recycleo-img.png'),
          littleTitle: 'Recycleo',
          littleDescription: 'Réalisé avec Figma et Adobe Photoshop - Dec 2022',
          description:
            'Recycleo est un concept réalisé avec Figma, pour une application mobile qui aide à gérer et inciter les gens à recycler davantage.',
          tools: ['Figma', 'Laravel'],
          projectLink: 'https://example.com/recycleo',
        },
        {
          title: 'tysynday',
          logo: require('@/assets/tysynday.svg'),
          backgroundImage: require('@/assets/tysynday.png'),
          littleTitle: 'Tysynday',
          littleDescription: 'Réalisé avec Angular-ReactNative et Nodejs - Jan 2023',
          description:
            'Tysynday est un projet réalisé avec Angular-ReactNative et Nodejs pour créer une application multiplateforme.',
          tools: ['Angular', 'React Native', 'Node.js'],
          projectLink: 'https://example.com/tysynday',
        },
        {
          title: 'Rakoto.dev',
          logo: require('@/assets/Rakoto.dev.svg'),
          backgroundImage: require('@/assets/recycleo-img.png'),
          littleTitle: 'Rakoto.dev',
          littleDescription: 'Réalisé avec Angular-ReactNative et Nodejs - Jan 2023',
          description:
            'Rakoto.dev est mon site personnel réalisé avec Angular et Node.js pour présenter mes projets et partager des articles techniques.',
          tools: ['Angular', 'Node.js'],
          projectLink: 'https://example.com/rakoto-dev',
        },
        // Add other card objects if needed
      ],
    };
  },
  methods: {
    getLogoPath(item) {
      // Renvoie le chemin de l'icône SVG ou de l'image en fonction de l'élément de la liste
      switch (item) {
        case 'Rakoto.dev':
          return require('@/assets/Rakoto.dev.svg');
        case 'tysynday':
          return require('@/assets/tysynday (1).svg');
        case 'recycleo':
          return require('@/assets/recycleo.svg');
        case 'ezara':
          return require('@/assets/ezara.svg');
        case 'Laravel':
          return require('@/assets/laravel-seeklogo.com.svg');
        case 'MongoDB':
          return require('@/assets/mongodb-seeklogo.com.svg');
        case 'Ionic':
          return require('@/assets/ionic-seeklogo.com.svg');
        // Ajoutez d'autres cas pour les autres éléments de la liste
        default:
          return '';
      }
    },
    getToolIconPath(tool) {
      // Renvoie le chemin de l'icône de l'outil en fonction de l'outil
      switch (tool) {
        case 'Figma':
          return require('@/assets/figma-seeklogo.com.svg');
        case 'Adobe Photoshop':
          return require('@/assets/Rakoto.dev.svg');
          case 'Laravel':
          return require('@/assets/laravel-seeklogo.com.svg');
        case 'MongoDB':
          return require('@/assets/mongodb-seeklogo.com.svg');
        case 'Ionic':
          return require('@/assets/ionic-seeklogo.com.svg');
        case 'Angular':
          return require('@/assets/ionic-seeklogo.com.svg');
        // Ajoutez d'autres cas pour les autres outils
        default:
          return '';
      }
    },
  },
};
</script>

<style scoped>
.info-page {
  height: 90vh;
  grid-area: project;
  margin-top: 5%;
  margin-bottom: 5%;
}

h1 {
  font-family: 'Instrument Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 52px;
  text-align: center;
  letter-spacing: -0.01em;
  background: linear-gradient(92.9deg, #f5f5f5 -13.31%, #bebebe 75.24%, #626262 108.78%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  padding: 0;
  margin: 0;
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.slide-container {
  margin-top: 10vh;
  background-color: aqua;
  width: 80%;
  height: 500px;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 500px;
  margin: 0;
  text-align: center;
}
.el-carousel__item {
  color: #a2ff0d; 
  background-color: #8960fa;
  margin: 0;
  text-align: center;
  width: 100%;
  height: 500px;
}


.card-left {
  color: #bfbfbf;
  width: 66.66%;
  height: 500px;
  border: solid 1.7px gray;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
    url('@/assets/recycleo-img.png');
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 0px -70px 150px 10px rgba(0, 0, 0, 0.9) inset;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column-reverse;
  transition: box-shadow 0.2s ease-in-out;
}

.card-right {
  color: #bfbfbf;
  width:33.33%;
  height: 500px;
  border: solid 1.7px transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
    linear-gradient(145deg, #c4c4c4, #161616);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 0px -700px 1000px 1px #242424 inset;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s ease-out;
}

.card-content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  width: 100%;
}

.card-right-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin: 30px;
  justify-content: space-between;
  gap: 20px;
}
.card-left-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin: 30px;
  gap: 20px;
}

.card-logo {
  filter: grayscale(100%);
  transition: filter 0.2s;
}

img {
  height: 25px;
}

.card-description {
  color: #e9e9e9;
}

.tool-icon {
  height: 20px;
  margin-right: 5px;
  filter: grayscale(80%);
}

li {
  list-style-type: none;
}

ul {
  padding-inline-start: 0px;
}

.list-outils {
  display: flex;
  flex-direction: row;
  gap:10%;
  align-items: flex-start;
}

a {
  color: #bfbfbf;
  display: flex;
  flex-direction: colum;
}

.link-icon {
  height: 10px;
  margin-right: 5px;
}
.link-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 5px;
}

.link-icon {
  height: 20px;
  margin-right: 5px;
}

a.card-title {
  color: #bfbfbf;
  display: flex;
  flex-direction: column;
  
}

.card-right .card-right-content .card-logo {
  filter: grayscale(0%);
}

</style>
