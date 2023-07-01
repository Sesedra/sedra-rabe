<template class="container">
    <div class="list-banner">
      <div class="list-content">
        <div class="title">Découvrez mes projets numériques</div>
        <div class="list-item" >
          <div class="list-item-content" v-for="item in list" :key="item">
            <div class="list-item-content-icon">
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
    name: 'BanerProjectComponent',
    data() {
      return {
        list: ['Rakoto.dev', 'tysynday', 'recycleo', 'Soa', 'ezara', 'junnot']
      }
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
          case 'Soa':
            return require('@/assets/Soa.svg');
            case 'junnot':
            return require('@/assets/junnot.svg');
          // Ajoutez d'autres cas pour les autres éléments de la liste
          default:
            return '';
        }
      }
    }
  }
  </script>
  
  
  
    <style scoped>

.container {
      height: auto;
      grid-area: info;
    }
    .list-content {
      align-items: center;
      display: flex;
      flex-direction: column;
      padding: 0px ;
      gap: 30px;
      width: 100%;
      height: auto;
      background: linear-gradient(91.31deg, #242424 -1.5%, #161616 108.01%);
      /* border: 1px solid #BFBFBF; */
      justify-content: center;
      padding-top: 40px;
      padding-bottom: 40px;
      align-items: center;
  }
  
    .list-item {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
      background: linear-gradient(94.52deg, #BFBFBF 20.79%, #BFBFBF 91.13%);
      -webkit-background-clip: text;
      gap: 40px;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      align-items: center;
      justify-content: space-around;
    }

    .title {
        font-family: 'Instrument Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 35px;
      text-align: center;
      letter-spacing: -0.01em;
        display: flex;
        flex-direction: row;
      gap: 110px;
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
      margin-top: 20px;
      display: flex;
      flex-direction: column;
    }
  
    .list-item-content-icon {
    width: auto;
    height: 40px;
    /* Styles pour l'icône en noir et blanc par défaut */
    filter: grayscale(50%);
    transition: filter 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
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
    