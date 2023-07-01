<template>
    <div class="info-page">
        <div class="hero"  id="contact">
          <div class="header">
            <h3 style="color: red;"> ⚠️ Travaux en cours ⚠️ </h3>
            <h3>Des idées de projet?</h3>
            <h1>Parlons-en</h1>
          </div>
          <div class="hero-content">
          <div class="card">
            <div class="mail-header">
              Votre mail
              <input type="email" name="email" id="email">
            </div>
            <div class="mail-content">
              <p>Votre message</p>
              <textarea name="message" id="message"></textarea>
            </div>
          </div>
        </div>
    </div>
  </div>
  </template>
<script>
export default {
  name: 'ContactComponent',
  data() {
    return {
  cards: [
    {
      logo: require('@/assets/profile-circle-svgrepo-com.svg'),
      title: 'Profil',
      description: 'Etudiant en Informatique et Télécommunication<br>Passionné du développement web-mobile et d\'UI/UX Design',
    },
    {
      logo: require('@/assets/task.svg'),
      title: 'Compétences',
      description: 'UI/UX avec Figma <br> FrontEnd avec Vue ou Reactjs<br>Backend avec NodeJs ou Laravel',
    },
    {
      logo: require('@/assets/location.svg'),
      title: 'Coordonnées',
      description: 'Tel: +261 34 87 167 14<br>Github: Sesedra<br>Facebook: Sedra Rabe<br>Pays: Madagascar',
    },
  ],
};

  },
};
</script>

  
  <style scoped>
    .info-page {
      height: auto;
      grid-area: contact;
      margin-top: 5%;
      margin-bottom: 5%;
    }
  
    .hero {
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
  
    h1 {
        font-family: 'Instrument Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 52px;
        text-align: center;
        letter-spacing: -0.01em;
        background: linear-gradient(92.9deg, #F5F5F5 -13.31%, #BEBEBE 75.24%, #626262 108.78%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        padding: 0;
        margin: 0;
    }

    h3 {
      font-family: 'Instrument Sans';
        font-style: normal;
        color: #BFBFBF;
        font-weight: 400;
        font-size: 20px;
        padding: 0;
        margin: 0;
    }

    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-top: 90px;
    }

    .hero-content {
      padding-top: 50px;
      padding-bottom: 50px;
      width: 90%;
      height: auto;
      gap: 40px;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    .card {
      color: #BFBFBF;
      width: 25%;
      height: 400px;
      border: solid 1.7px transparent;
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(145deg, #C4C4C4, #161616);
      background-origin: border-box;
      background-clip: content-box, border-box;
      box-shadow: 0px -700px 1000px 1px #242424 inset;
      display: flex;
      flex-direction: column;
      transition: box-shadow 0.2s ease-in-out;
    }

    .card-content {
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

    
  </style>
  