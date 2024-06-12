<template>
  <div>
    <nav class="nav_bar2">
      <h3>audiophile</h3>
      <ul class="navigations">
        <li @click="home">HOME</li>
        <li @click="headphones">HEADPHONES</li>
        <li @click="speakers">SPEAKERS</li>
        <li @click="earphones">EARPHONES</li>
      </ul>
    </nav>
    <p class="footer_words">
      Audiophile is an all in one stop to fulfill your audio needs. We're a
      small team of music lovers and sound specialists who are devoted to
      helping you get the most out of personal audio. Come and visit our demo
      facility - we're open 7 days a week.
    </p>
    <div id="icons">
      <!-- <a href="http://" target="_blank" rel="noopener noreferrer"></a> -->
      <a href="https://web.facebook.com/mplus.abiodun/" target="blank">
        <img src="../Home/pics/facebook.png" alt="facebook" />
      </a>
      <a href="https://twitter.com/Mplus51610027" target="blank">
        <img src="../Home/pics/twitter.png" alt="twitter" />
      </a>
      <a href="https://www.instagram.com/mplusabiodun/" target="blank">
        <img src="../Home/pics/instagram.png" alt="instagram" />
      </a>
    </div>
    <p class="copy_right">Copyright 2021. All Rights Reserved</p>
  </div>
</template>
<script>
export default {
  methods: {
    home() {
      this.$router.push("/homepage");
    },
    headphones() {
      this.$router.push("/headphones");
    },
    speakers() {
      this.$router.push("/speakers");
    },
    earphones() {
      this.$router.push("/earphones");
    },
  },
};
</script>
<style scoped>
/* * {
  color: #ffffff;
} */
.nav_bar2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: bold;
  font-family: Manrope;
  font-size: 13px;
  letter-spacing: 2px;
  padding-bottom: 2em;
  color: #ffffff;
}
h3 {
  font-size: 23px;
}
.navigations {
  display: flex;
  flex-direction: row;
  text-align: right;
}
li {
  list-style-type: none;
  margin-left: 2em;
  cursor: pointer;
}
.footer_words {
  width: 47%;
  opacity: 50%;
  text-align: left;
  font-size: 14px;
  padding-bottom: 1em;
  /* color: #ffffff; */
}
#icons {
  text-align: right;
}
a {
  margin-left: 1em;
  text-decoration: none;
}
img {
  width: 1.3em;
  height: 1.3em;
  /* margin-left: 1em; */
}
.copy_right {
  opacity: 50%;
  text-align: left;
  font-size: 14px;
  /* padding-bottom: 1em; */
}
</style>
