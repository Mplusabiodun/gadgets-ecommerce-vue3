<template>
  <div class="container">
    <button @click="goBack" class="go_back">Go Back</button>
    <div class="HeadphoneXX">
      <img id="headphonemarkII" :src="speakerDetails.image" alt="headphone" />
      <div class="second">
        <p v-if="speakerDetails.new === true" class="new">NEW PRODUCT</p>
        <h1 class="XX99_MARK">{{ speakerDetails.name }}</h1>
        <p class="headphoneII_word">{{ speakerDetails.description }}.</p>
        <p class="price">$ {{ speakerPrice() }}</p>
        <button class="number">
          <span @click="sub" class="sub">-</span
          ><span class="figure">{{ speakerDetails.perProduct }}</span
          ><span @click="add" class="add">+</span>
        </button>
        <button @click="toCart" class="addto_cart">ADD TO CART</button>
      </div>
    </div>

    <div class="container2">
      <div class="container3">
        <h2 class="features">FEATURES</h2>
        <p
          class="content content2"
          v-for="feature in speakerDetails.features"
          :key="feature"
        >
          {{ feature }}
        </p>
      </div>
      <div class="in_the_box">
        <h2 class="box">IN THE BOX</h2>
        <ul
          class="content"
          v-for="box in speakerDetails.in_box"
          :key="box.title"
        >
          <li>
            <span class="li_number">{{ box.quantity }}x</span>{{ box.title }}
          </li>
        </ul>
      </div>
    </div>

    <div class="img_cont">
      <div class="small_img">
        <img id="audio_gear" :src="speakerDetails?.live_image[0]" alt="SD11" />
        <img id="HD11" :src="speakerDetails?.live_image[1]" alt="SD12" />
      </div>
      <img id="big_img" :src="speakerDetails?.live_image[2]" alt="SD13" />
    </div>

    <!-- here -->
    <h2 class="you_may">YOU MAY ALSO LIKE</h2>
    <div class="general">
      <div>
        <img
          class="samephones"
          src="../pics/ZX7_Speaker_upgrade.png"
          alt="headphones"
        />
        <p class="phonewords">ZX7 SPEAKER</p>
        <button class="addto_cart">SEE PRODUCT</button>
      </div>
      <div class="speakers">
        <img
          class="samephones"
          src="../pics/headphonemarkI.png"
          alt="speakers"
        />
        <p class="phonewords">XX99 MARK I</p>
        <button class="addto_cart">SEE PRODUCT</button>
      </div>
      <div class="phones earphones">
        <img
          class="samephones"
          src="../pics/headphoneXX59.png"
          alt="earphones"
        />
        <p class="phonewords">XX59</p>
        <button class="addto_cart">SEE PRODUCT</button>
      </div>
    </div>

    <the-shop></the-shop>
    <the-best class="best"></the-best>
  </div>
</template>
<script>
export default {
  inject: ["products", "cart"],
  data() {
    return {
      speakerDetails: null,
    };
  },
  methods: {
    goBack() {
      this.$router.push("/speakers");
    },
    speakerPrice() {
      let price =
        parseInt(this.speakerDetails.price) * this.speakerDetails.perProduct;
      return price;
    },
    toCart() {
      this.cart.push({
        cartName: this.speakerDetails.alias,
        cartImage: this.speakerDetails.image,
        // cartPrice: this.speakerDetails.price,
        cartPrice: this.speakerPrice(),
        cartPerProduct: this.speakerDetails.perProduct,
      });
    },
    add() {
      this.speakerDetails.perProduct += 1;
    },
    sub() {
      this.speakerDetails.perProduct -= 1;
      if (this.speakerDetails.perProduct < 1) {
        return (this.speakerDetails.perProduct = 1);
      }
    },
  },
  created() {
    const speakerId = this.$route.params.speakerId;
    const speakerProducts = this.products.filter(
      (product) => product.type === "speakers"
    );
    const selectedPhone = speakerProducts.find((product) => {
      return product.id === speakerId;
    });
    this.speakerDetails = selectedPhone;
    // console.log(selectedPhone);
    // console.log(this.speakerDetails);
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
.new {
  font-size: 12px;
  color: #d87d4a;
  font-weight: 400;
  letter-spacing: 8px;
  opacity: 49.64%;
  margin-top: 2rem;
}
.XX99_MARK {
  width: 18rem;
  color: #000000;
  font-size: 2.7rem;
  line-height: 40px;
  letter-spacing: 1px;
  margin-top: 0.6rem;
}
.headphoneII_word {
  width: 22.5rem;
  color: #000000;
  margin-top: 12px;
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
  margin: 20px 0;
}
.number {
  width: 7rem;
  height: 3rem;
  font-weight: bold;
  text-align: center;
  background: #f1f1f1;
  border: 1px solid #f1f1f1;
  margin-right: 12px;
}
.figure {
  margin: 0 1.4rem;
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
.addto_cart:hover,
.addto_cart:active {
  background-color: #d87d4a;
  border-color: #d87d4a;
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
  font-weight: bold;
  line-height: 32.78px;
  letter-spacing: 1.7142857313156128px;
  text-align: center;
}
.best {
  margin-top: 0;
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
</style>
