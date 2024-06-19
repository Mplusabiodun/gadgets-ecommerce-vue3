<template>
  <div class="container">
    <div class="XX99">
      <div class="second">
        <p class="new">NEW PRODUCT</p>
        <h1 class="XX99_MARK">XX99 Mark II Headphones</h1>

        <p class="word">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button @click="XX99MarkII" class="see_product">SEE PRODUCT</button>
      </div>

      <img id="bitmap" src="./pics/Bitmap.png" alt="Headphone" />
    </div>
  </div>
  <div class="container2">
    <the-shop></the-shop>

    <div class="ZXP_container">
      <img id="ZX9_Speaker" src="./pics/ZX9_Speaker.png" alt="ZX9_Speaker" />
      <div id="ZX9_inner">
        <h2 id="ZX9_name">ZX9 SPEAKER</h2>
        <p id="upgrade">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button @click="ZX9Speaker" class="see_product2">SEE PRODUCT</button>
      </div>
    </div>
    <div id="ZX7">
      <h2 id="ZX7_NAME">ZX7 SPEAKER</h2>
      <button @click="ZX7Speaker" class="see_product3">SEE PRODUCT</button>
    </div>
    <div class="YX1_Container">
      <img id="YX1_IMG" src="./pics/YX1_Earphones.png" alt="YX1 Earphones" />
      <div id="YX1_Container2">
        <h2 class="YX1_Name">YX1 EARPHONES</h2>
        <button @click="YX1Earphones" class="see_product3">SEE PRODUCT</button>
      </div>
    </div>
    <the-best></the-best>
  </div>
</template>
<script>
export default {
  methods: {
    XX99MarkII() {
      this.$router.push("/headphones/XX99MarkII");
    },
    ZX9Speaker() {
      this.$router.push("/speakers/ZX9");
    },
    ZX7Speaker() {
      this.$router.push("/speakers/ZX7");
    },
    YX1Earphones() {
      this.$router.push("/earphones/YX1");
    },
  },
};
</script>
<style scoped>
/* * {
  background: red;
  width: 100%;
  padding: 0;
  margin: 0;
} */
.container {
  width: 100%;
  color: #ffffff;
  background: #0e0e0e;
  padding: 40px 50px 50px 50px;
}
.XX99 {
  display: flex;
  flex-direction: row;
  margin-left: 5rem;
}
.second {
  margin-top: 4rem;
  text-align: left;
}
.new {
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 10px;
  opacity: 49.64%;
}
.XX99_MARK {
  width: 22rem;
  margin-top: 16px;
  font-family: Manrope;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 58px;
  letter-spacing: 2px;
}
.word {
  width: 19rem;
  height: 4rem;
  margin-top: 17px;
  margin-bottom: 20px;
  opacity: 75%;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
}
#bitmap {
  width: 26rem;
  height: 24rem;
  margin-left: 10rem;
}
.see_product {
  width: 10rem;
  height: 3rem;
  font-family: Manrope;
  font-weight: bold;
  text-align: center;
  background-color: #fbaf85;
  border: 1px solid #fbaf85;
  letter-spacing: 1px;
}
.see_product:hover,
.see_product:active {
  background-color: #d87d4a;
  border-color: #d87d4a;
}
.container2 {
  width: 100%;
  color: #0e0e0e;
  padding: 1.2rem 10rem 1rem 10rem;
}
.ZXP_container {
  color: #ffffff;
  background: #d87d4a;
  display: flex;
  flex-direction: row;
  text-align: left;
}
#ZX9_Speaker {
  width: 25%;
  margin-top: 3rem;
  margin-left: 6rem;
}
#ZX9_inner {
  margin: 4rem 0 4rem 10rem;
  text-align: left;
}
#ZX9_name {
  width: 14rem;
  font-family: Manrope;
  font-size: 50px;
  line-height: 47px;
}
#upgrade {
  font-family: Manrope;
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  text-align: left;
  margin: 13px 0;
  width: 60%;
  opacity: 75%;
}
.see_product2 {
  width: 10rem;
  height: 3rem;
  font-family: Manrope;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  background-color: #0e0e0e;
  border: 1px solid #0e0e0e;
  letter-spacing: 1px;
}
.see_product2:hover,
.see_product2:active {
  background-color: #ffffff;
  border-color: #0e0e0e;
  color: #0e0e0e;
}
#ZX7 {
  background-image: url("./pics/ZX7_speaker.png");
  background-size: cover;
  height: 18rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  padding: 7rem 0 0 6rem;
}
#ZX7_NAME {
  font-family: Manrope;
  color: #0e0e0e;
  font-size: 28px;
  font-weight: 700;
  line-height: 38.25px;
  letter-spacing: 2px;
  text-align: left;
}
.see_product3 {
  width: 10rem;
  height: 3rem;
  font-family: Manrope;
  font-weight: bold;
  text-align: center;
  background-color: transparent;
  color: #0e0e0e;
  border: 1px solid #0e0e0e;
  margin-top: 2rem;
  letter-spacing: 1px;
}
.see_product3:hover,
.see_product3:active {
  background-color: #0e0e0e;
  border-color: #0e0e0e;
  color: #ffffff;
}
.YX1_Container {
  height: 300px;
  display: flex;
  flex-direction: row;
}
#YX1_IMG {
  width: 50%;
}
#YX1_Container2 {
  width: 50%;
  margin-left: 2rem;
  background: #f1f1f1;
  padding: 6rem 0 0 5rem;
}
.YX1_Name {
  font-family: Manrope;
  font-size: 28px;
  font-weight: 700;
  text-align: left;
  color: #000000;
}

/* Tablets / iPad ----------- */
/* and (min-width: 768px) */
@media only screen and (max-width: 1024px) {
  .container {
    padding: 0;
    margin: 0 0 5rem 0;
  }
  .XX99 {
    background-image: url("@/assets/markll_background.png");
    text-align: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 43rem;
    width: 100%;
    margin-left: -0.1rem;
    margin-top: -3rem;
  }
  .second {
    margin: 11rem auto 0;
    text-align: center;
  }
  .XX99_MARK {
    font-size: 3.4rem;
  }
  .word {
    width: 23rem;
  }
  .see_product {
    background-color: #d87d4a;
    border: 1px solid #d87d4a;
    letter-spacing: 1px;
  }
  #bitmap {
    display: none;
  }
  .container2 {
    width: 100%;
    color: #0e0e0e;
    padding: 0rem 3rem;
  }
  .ZXP_container {
    flex-direction: column;
    text-align: center;
  }
  #ZX9_Speaker {
    width: 28%;
    height: 14rem;
    margin: 3rem auto 0;
  }
  #ZX9_inner {
    margin: 4rem auto;
    text-align: center;
  }
  #ZX9_name {
    margin: 0 auto;
    letter-spacing: 3px;
    font-size: 56px;
    line-height: 3.5rem;
  }
  #upgrade {
    margin: 15px auto 17px;
    font-size: 17px;
    line-height: 25px;
    text-align: center;
    width: 50%;
  }
  #ZX7 {
    background-image: url("@/assets/ZX7_speaker_backg.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .YX1_Container {
    height: 300px;
    display: flex;
    flex-direction: row;
  }
  #YX1_Container2 {
    width: 50%;
    margin-left: 1rem;
    padding: 6rem 0 0 2rem;
    text-align: left;
  }
  .YX1_Name {
    text-align: left;
    font-size: 28px;
    letter-spacing: 1px;
  }
}

/* Mobile ----------- */
@media only screen and (max-width: 767px) {
  .container {
    padding: 0;
    margin-right: 0;
    width: 100%;
  }
  .XX99 {
    background-image: url("@/assets/markll_background.png");
    text-align: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 43rem;
    width: 100%;
    margin-left: -0.1rem;
    margin-top: -3rem;
  }
  .second {
    margin: 11rem auto 0;
    text-align: center;
  }
  .XX99_MARK {
    font-size: 3.4rem;
  }
  .word {
    width: 23rem;
  }
  .see_product {
    background-color: #d87d4a;
    border: 1px solid #d87d4a;
    letter-spacing: 1px;
  }
  #bitmap {
    display: none;
  }
  .container2 {
    width: 100%;
    color: #0e0e0e;
    padding: 0rem 0rem;
    /* padding: 0rem 3rem; */
  }
  .ZXP_container {
    flex-direction: column;
    text-align: center;
  }
  #ZX9_Speaker {
    width: 28%;
    height: 14rem;
    margin: 3rem auto 0;
  }
  #ZX9_inner {
    margin: 4rem auto;
    text-align: center;
  }
  #ZX9_name {
    margin: 0 auto;
    letter-spacing: 3px;
    font-size: 56px;
    line-height: 3.5rem;
  }
  #upgrade {
    margin: 15px auto 17px;
    font-size: 17px;
    line-height: 25px;
    text-align: center;
    width: 50%;
  }
  #ZX7 {
    background-image: url("@/assets/ZX7_speaker_backg.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .YX1_Container {
    height: 300px;
    display: flex;
    flex-direction: row;
  }
  #YX1_Container2 {
    width: 50%;
    margin-left: 1rem;
    padding: 6rem 0 0 2rem;
    text-align: left;
  }
  .YX1_Name {
    text-align: left;
    font-size: 28px;
    letter-spacing: 1px;
  }
}
</style>
