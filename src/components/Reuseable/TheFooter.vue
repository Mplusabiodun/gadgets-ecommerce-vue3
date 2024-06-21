<template>
  <div class="container">
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
}
.copy_right {
  opacity: 50%;
  text-align: left;
  font-size: 14px;
}
/* Tablets / iPad ----------- */
/* and (min-width: 768px) */
@media only screen and (max-width: 1024px) {
  .nav_bar2 {
    flex-direction: column;
  }
  h3 {
    font-size: 30px;
  }
  .navigations {
    text-align: left;
    margin: 2rem 0 1.5rem -4rem;
  }
  li {
    margin-right: 1em;
  }
  .footer_words {
    width: 98%;
    margin: 0 auto 2rem;
    font-size: 15px;
  }
  .copy_right {
    font-size: 16px;
    margin-top: -2rem;
  }
}

/* Mobile ----------- */
@media only screen and (max-width: 767px) {
  .container {
    padding-bottom: 3rem;
    text-align: center;
  }
  .nav_bar2 {
    flex-direction: column;
  }
  h3 {
    font-size: 35px;
    margin: 0 auto;
  }
  .navigations {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 13px;
    margin: 2rem 0 1.5rem -4rem;
  }
  li {
    margin-bottom: 2em;
  }
  .footer_words {
    width: 98%;
    margin: -1rem auto 5rem;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
  }
  .copy_right {
    font-size: 16px;
    margin: -5rem 0 0;
    text-align: center;
  }
  #icons {
    display: inline;
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
