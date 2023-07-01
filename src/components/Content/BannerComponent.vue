<template>
  <div class="list-banner">
    <div class="list-content">
      <div class="list-item" v-for="item in list" :key="item">
        <div class="list-item-content">
          <div class="list-item-content-icon">            <!-- Remplacez le texte par l'icône SVG ou l'image -->
            <img :src="getLogoPath(item)" alt="Logo" class="logo-image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
// importez les fichiers SVG ou les images de vos logos

export default {
  name: 'BannerComponent',
  data() {
    return {
      list: ['Figma', 'ReactJs', 'MongoDB', 'NodeJs', 'Laravel', 'VueJs', 'Ionic']
    }
  },
  methods: {
    getLogoPath(item) {
      // Renvoie le chemin de l'icône SVG ou de l'image en fonction de l'élément de la liste
      switch (item) {
        case 'Figma':
          return require('@/assets/figma-seeklogo.com.svg');
        case 'ReactJs':
          return require('@/assets/react-seeklogo.com.svg');
        case 'VueJs':
          return require('@/assets/vuejs-seeklogo.com.svg');
        case 'NodeJs':
          return require('@/assets/nodejs-seeklogo.com.svg');
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
    }
  }
}
</script>



  <style scoped>
  .list-content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px ;
    gap: 110px;
    width: 100%;
    height: 11vh;
    background: linear-gradient(91.31deg, #242424 -1.5%, #161616 108.01%);
    /* border: 1px solid #BFBFBF; */
    justify-content: center;
    padding-top: 15px;
    padding-bottom: 15px;
    align-items: center;
}

  .list-item {
    font-family: 'Instrument Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 29px;
    line-height: 35px;
    text-align: center;
    letter-spacing: -0.01em;

    background: linear-gradient(94.52deg, #BFBFBF 20.79%, #BFBFBF 91.13%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    align-items: center;
    justify-content: center;
  }

  .list-banner {
    background-color: #161616;
    padding:0;
    margin: 0;
  }

  .list-item-content-icon {
  width: auto;
  height: 50px;
  /* Styles pour l'icône en noir et blanc par défaut */
  filter: grayscale(50%);
  transition: filter 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.list-item-content-icon img {
  /* Ajustez la taille des icônes selon vos besoins */
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.list-item-content-icon:hover {
  /* Styles pour l'icône en couleur lors du survol */
  filter: grayscale(0%);
}
  </style>
  