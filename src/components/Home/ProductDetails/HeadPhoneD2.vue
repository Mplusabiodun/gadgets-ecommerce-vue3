<template>
  <div class="container">
    <button @click="goBack" class="go_back">Go Back</button>
    <div class="HeadphoneXX">
      <img
        id="headphonemarkII"
        src="../pics/headphonemarkI.png"
        alt="headphone"
      />
      <div class="second">
        <h1 class="XX99_MARK">XX99 Mark I Headphones</h1>
        <p class="headphoneII_word">
          As the gold standard for headphones, the classic XX99 Mark I offers
          detailed and accurate audio reproduction for audiophiles, mixing
          engineers, and music aficionados alike in studios and on the go.
        </p>
        <p class="price">$ 1,750</p>
        <button class="number">
          <span class="sub">-</span><span>1</span><span class="add">+</span>
        </button>
        <button class="addto_cart">ADD TO CART</button>
      </div>
    </div>

    <div class="container2">
      <div class="container3">
        <h2 class="features">FEATURES</h2>
        <p class="content content2">
          As the headphones all others are measured against, the XX99 Mark I
          demonstrates over five decades of audio expertise, redefining the
          critical listening experience. This pair of closed-back headphones are
          made of industrial, aerospace-grade materials to emphasize durability
          at a relatively light weight of 11 oz.
        </p>
        <p class="content content2">
          From the handcrafted microfiber ear cushions to the robust metal
          headband with inner damping element, the components work together to
          deliver comfort and uncompromising sound. Its closed-back design
          delivers up to 27 dB of passive noise cancellation, reducing resonance
          by reflecting sound to a dedicated absorber. For connectivity, a
          specially tuned cable is included with a balanced gold connector.
        </p>
      </div>
      <div class="in_the_box">
        <h2 class="box">IN THE BOX</h2>
        <ul class="content">
          <li><span class="li_number">1x</span>Headphone Unit</li>
          <li><span class="li_number">2x</span>Replacement Earcups</li>
          <li><span class="li_number">1x</span>User Manual</li>
          <li><span class="li_number">1x</span>3.5mm 5m Audio Cable</li>
        </ul>
      </div>
    </div>

    <div class="img_cont">
      <div class="small_img">
        <img id="audio_gear" src="../pics/HD21.png" alt="HD21" />
        <img id="HD11" src="../pics/HD22.png" alt="HD22" />
      </div>
      <img id="big_img" src="../pics/HD23.png" alt="HD23" />
    </div>

    <!-- here -->
    <h2 class="you_may">YOU MAY ALSO LIKE</h2>
    <div class="general">
      <div>
        <img
          class="samephones"
          src="../pics/headphonemarkII_upgrade.png"
          alt="headphones"
        />
        <p class="phonewords">XX99 MARK II</p>
        <button class="addto_cart">SEE PRODUCT</button>
      </div>
      <div class="speakers">
        <img
          class="samephones"
          src="../pics/headphoneXX59.png"
          alt="speakers"
        />
        <p class="phonewords">XX59</p>
        <button class="addto_cart">SEE PRODUCT</button>
      </div>
      <div class="phones earphones">
        <img
          class="samephones"
          src="../pics/ZX9_Speaker_upgrade.png"
          alt="earphones"
        />
        <p class="phonewords">ZX9 SPEAKER</p>
        <button class="addto_cart">SEE PRODUCT</button>
      </div>
    </div>

    <the-shop></the-shop>
    <the-best class="best"></the-best>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push("/headphones");
    },
  },
};
</script>

<style scoped>
* {
  color: black;
  box-sizing: border-box;
  overflow: hidden;
}
.container {
  padding: 2rem 12rem 2rem 12rem;
}
.go_back {
  font-weight: bold;
  text-align: center;
  background-color: inherit;
  border: none;
  opacity: 50%;
}
.HeadphoneXX {
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  text-align: left;
}
#headphonemarkII {
  width: 24rem;
  height: 26rem;
  margin-right: 8rem;
  background: #f1f1f1;
}
.second {
  margin-top: 1rem;
}
.XX99_MARK {
  width: 22rem;
  color: #000000;
  font-size: 3rem;
  line-height: 50px;
  letter-spacing: 1px;
  margin-top: 1rem;
}
.headphoneII_word {
  width: 22.5rem;
  /* width: 25rem; */
  flex-wrap: wrap;
  color: #000000;
  margin-top: 14px;
  margin-bottom: 15px;
  opacity: 75%;
  font-size: 13px;
  line-height: 22px;
}
.price {
  font-size: 18px;
  font-weight: 700;
  line-height: 24.59px;
  letter-spacing: 1.2857142686843872px;
  text-align: left;
  margin: 20px 0 30px 0;
}
.number {
  width: 7rem;
  height: 3rem;
  font-weight: bold;
  text-align: center;
  background: #f1f1f1;
  border: 1px solid #f1f1f1;
  margin-right: 12px;
  letter-spacing: 1.2rem;
  text-align: right;
}
.sub,
.add {
  opacity: 25%;
}
.addto_cart {
  width: 10rem;
  height: 3rem;
  font-weight: bold;
  text-align: center;
  background-color: #fbaf85;
  border: 1px solid #fbaf85;
  color: #ffffff;
}

/* Features and in d box styling */
.container2 {
  display: flex;
  flex-direction: row;
  margin: 5rem 0rem;
}
.container3 {
  width: 39rem;
  text-align: left;
}
.features {
  font-size: 22px;
  letter-spacing: 1.1428571939468384px;
}
.box {
  margin-left: 2rem;
  font-size: 22px;
  letter-spacing: 1.1428571939468384px;
}
.content {
  /* width: 36rem; */
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  opacity: 50%;
  margin-top: 15px;
}
.content2 {
  width: 36rem;
}
li {
  list-style-type: none;
  margin-top: 10px;
}
.li_number {
  color: #d87d4a;
  opacity: 100%;
  font-weight: bold;
  margin-right: 1rem;
}

/* three images styling */
.img_cont {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  margin-top: 5rem;
  margin-bottom: 5rem;
}
#audio_gear,
#HD11 {
  width: 25rem;
  height: 13rem;
}
#audio_gear {
  margin-bottom: 10px;
}
#big_img {
  width: 55rem;
  height: 27rem;
  overflow: hidden;
}
/* YOU MAY ALSO LIKE */
.general {
  color: #0e0e0e;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
  margin-bottom: 5rem;
}
.samephones {
  width: 17rem;
  height: 17rem;
}
.you_may {
  text-align: center;
  margin-bottom: 10px;
  font-size: 28px;
  letter-spacing: 1.1428571939468384px;
}
.phonewords {
  margin: 6px 0;
  font-weight: 700;
  line-height: 32.78px;
  letter-spacing: 1.7142857313156128px;
  text-align: center;
}
/*
.addto_cart {
  width: 10rem;
  height: 3rem;
  font-weight: bold;
  text-align: center;
  background-color: #fbaf85;
  border: 1px solid #fbaf85;
  color: #ffffff;
}
*/
.best {
  margin-top: 0;
}
</style>
