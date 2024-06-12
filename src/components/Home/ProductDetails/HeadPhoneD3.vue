<template>
  <div class="container">
    <button @click="goBack" class="go_back">Go Back</button>
    <div class="HeadphoneXX">
      <img
        id="headphonemarkII"
        src="../pics/headphoneXX59.png"
        alt="headphone"
      />
      <div class="second">
        <h1 class="XX99_MARK">XX59 Headphones</h1>
        <p class="headphoneII_word">
          Enjoy your audio almost anywhere and customize it to your specific
          tastes with the XX59 headphones. The stylish yet durable versatile
          wireless headset is a brilliant companion at home or on the move.
        </p>
        <p class="price">$ 899</p>
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
          These headphones have been created from durable, high-quality
          materials tough enough to take anywhere. Its compact folding design
          fuses comfort and minimalist style making it perfect for travel.
          Flawless transmission is assured by the latest wireless technology
          engineered for audio synchronization with videos.
        </p>
        <p class="content content2">
          More than a simple pair of headphones, this headset features a pair of
          built-in microphones for clear, hands-free calling when paired with a
          compatible smartphone. Controlling music and calls is also intuitive
          thanks to easy-access touch buttons on the earcups. Regardless of how
          you use the XX59 headphones, you can do so all day thanks to an
          impressive 30-hour battery life that can be rapidly recharged via
          USB-C.
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
        <img id="audio_gear" src="../pics/HD31.png" alt="HD31" />
        <img id="HD11" src="../pics/HD32.png" alt="HD32" />
      </div>
      <img id="big_img" src="../pics/HD33.png" alt="HD33" />
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
  margin-right: 8.5rem;
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
  justify-content: space-between;
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
  /* width: 39rem; */
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  opacity: 50%;
  margin-top: 15px;
}
.content2 {
  width: 37rem;
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
