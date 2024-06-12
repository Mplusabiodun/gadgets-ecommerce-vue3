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
    <the-cart></the-cart>
    <the-best></the-best>
  </div>
</template>
<script>
import TheCart from "../Reuseable/TheCart.vue";

export default {
  components: {
    TheCart,
  },
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
.container {
  width: 100%;
  /* gap: 0px;
  opacity: 0px; */
  color: #ffffff;
  background: #0e0e0e;
  padding: 40px 50px 50px 50px;
}
.XX99 {
  display: flex;
  flex-direction: row;
  margin-left: 5rem;
}
.YX1_Name {
  font-family: Manrope;
  font-size: 28px;
  font-weight: 700;
  text-align: left;
  color: #000000;
}
#YX1_Container2 {
  width: 50%;
  margin-left: 2rem;
  background: #f1f1f1;
  padding: 6rem 0 0 5rem;
}
#YX1_IMG {
  width: 50%;
}
.YX1_Container {
  height: 300px;
  display: flex;
  flex-direction: row;
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
#ZX7 {
  background-image: url("./pics/ZX7_speaker.png");
  background-size: cover;
  height: 18rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  padding: 7rem 0 0 6rem;
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
#ZX9_name {
  width: 14rem;
  font-family: Manrope;
  font-size: 50px;
  line-height: 47px;
}
#ZX9_inner {
  margin: 4rem 0 4rem 10rem;
  text-align: left;
}
#ZX9_Speaker {
  width: 25%;
  margin-top: 3rem;
  margin-left: 6rem;
}
.ZXP_container {
  color: #ffffff;
  background: #d87d4a;
  display: flex;
  flex-direction: row;
  text-align: left;
}
.container2 {
  width: 100%;
  color: #0e0e0e;
  padding: 1.2rem 10rem 1rem 10rem;
}
.see_product {
  width: 10rem;
  height: 3rem;
  font-family: Manrope;
  font-weight: bold;
  text-align: center;
  background-color: #fbaf85;
  border: 1px solid #fbaf85;
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
}
.word {
  width: 19rem;
  height: 4rem;
  margin-top: 17px;
  margin-bottom: 20px;
  opacity: 75%;
  font-family: Manrope;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  text-align: left;
}
.XX99_MARK {
  width: 22rem;
  /* height: 7rem; */
  margin-top: 16px;
  font-family: Manrope;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 58px;
  letter-spacing: 2px;
  text-align: left;
}
.new {
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 10px;
  text-align: left;
  opacity: 49.64%;
}
.second {
  margin-top: 4rem;
}

#bitmap {
  width: 26rem;
  height: 24rem;
  margin-left: 10rem;
}
</style>
