<template>
  <div class="info-page">
    <div class="hero" id="contact">
      <div class="header">
        <!-- <h3 style="color: red">⚠️ Travaux en cours ⚠️</h3> -->
        <h3>Des idées de projet?</h3>
        <h1>Parlons-en</h1>
      </div>
      <div class="hero-content">
        <div class="social-buttons">
          <div class="social-button" :href="gmailLink">
            <a :href="gmailLink">
              <img :src="gmailImage" alt="Gmail" />
              <p>M'envoyer un mail</p>
            </a>
          </div>
          <div class="social-button">
            <a :href="linkedinLink">
              <img :src="linkedinImage" alt="LinkedIn" />
              <p>Prendre contact sur Linkedin</p>
            </a>
          </div>
            <div class="social-button">
            <a :href="facebookLink">
              <img :src="facebookImage" alt="Facebook" />
              <p>Discuter sur Facebook</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="fond">
      <img :src="require('@/assets/Grids.svg')">
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactComponent",
  data() {
    return {
      gmailLink: "mailto:nyainarabemanantsoa@gmail.com",
      gmailImage: require("@/assets/gmail-svgrepo-com.svg"),
      linkedinLink:
        "https://www.linkedin.com/in/sedra-ny-aina-rabemanantsoa-980635235/",
      linkedinImage: require("@/assets/linkedin-svgrepo-com.svg"),
      facebookLink: "https://www.facebook.com/leboss214/",
      facebookImage: require("@/assets/facebook-svgrepo-com.svg"),
    };
  },
};
</script>

<style scoped>
.info-page {
  height: 90vh;
  grid-area: contact;
  margin-top: 5%;
  overflow: hidden;
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
  font-family: "Instrument Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 52px;
  text-align: center;
  letter-spacing: -0.01em;
  background: linear-gradient(
    92.9deg,
    #f5f5f5 -13.31%,
    #bebebe 75.24%,
    #626262 108.78%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  padding: 0;
  margin: 0;
}

h3 {
  font-family: "Instrument Sans";
  font-style: normal;
  color: #bfbfbf;
  font-weight: 400;
  font-size: 20px;
  padding: 0;
  margin: 0;
}

a {
  font-family: "Instrument Sans";
  font-style: normal;
  color: #dbdbdb;
  font-weight: 400;
  font-size: 20px;
  padding: 0;
  margin: 0;
  text-decoration:none
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

.social-button {
  color: #bfbfbf;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  border: solid 1.7px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(145deg, #c4c4c4, #161616);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 0px -700px 1000px 1px #242424 inset;
  transition: 0.5s ease-in-out;

}

.social-button:hover {
  color: #bfbfbf;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  border: solid 1.7px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(145deg, #c4c4c4, #c5c5c5);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 0px -700px 1000px 1px #242424 inset;
  transition: 0.5s ease-in-out;


}

.social-button a {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1vh;
  justify-content: center;
  width: 50vh;
  justify-content: flex-start;
  gap: 0;

}

.social-buttons {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1vh;
  justify-content: center;
  width: 100%;
  justify-content: flex-start;
  gap: 3vh;
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
  height: 50px;
  margin: 1vh;
}

.card-description {
  color: #e9e9e9;
}

.fond {
  position: relative;
  width: 100%;
  height: 100%;
}

.fond img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  bottom: -10px;
  z-index: -1;
}

</style>
