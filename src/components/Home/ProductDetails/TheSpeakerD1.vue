<template>
  <div class="container">
    <button @click="goBack" class="go_back">Go Back</button>
    <div class="HeadphoneXX">
      <img id="headphonemarkII" :src="speakerDetails.image" alt="headphone" />
      <div class="second">
        <p v-if="speakerDetails.new === true" class="new">NEW PRODUCT</p>
        <h1 class="XX99_MARK">{{ speakerDetails.name }}</h1>
        <p class="headphoneII_word">{{ speakerDetails.description }}.</p>
        <p class="price">$ {{ speakerPrice()?.toLocaleString() }}</p>
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

    <h2 class="you_may">YOU MAY ALSO LIKE</h2>
    <div class="general">
      <div>
        <div class="samephone_cont">
          <img
            class="samephones"
            src="../pics/ZX7_Speaker_upgrade.png"
            alt="headphones"
          />
        </div>
        <p class="phonewords">ZX7 SPEAKER</p>
        <button class="addto_cart">SEE PRODUCT</button>
      </div>
      <div>
        <div class="samephone_cont">
          <img
            class="samephones"
            src="../pics/headphonemarkI.png"
            alt="speakers"
          />
        </div>
        <p class="phonewords">XX99 MARK I</p>
        <button class="addto_cart">SEE PRODUCT</button>
      </div>
      <div>
        <div class="samephone_cont">
          <img
            class="samephones"
            src="../pics/headphoneXX59.png"
            alt="earphones"
          />
        </div>
        <p class="phonewords">XX59</p>
        <button class="addto_cart">SEE PRODUCT</button>
      </div>
    </div>

    <the-shop class="formargin"></the-shop>
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
      let price = this.speakerDetails.price * this.speakerDetails.perProduct;
      return price;
    },
    toCart() {
      const cartIndex = this.cart.findIndex(
        (value) => value.cartName === this.speakerDetails.alias
      );
      if (cartIndex < 0) {
        this.cart.push({
          cartName: this.speakerDetails.alias,
          cartImage: this.speakerDetails.image,
          cartPrice: this.speakerPrice(),
          cartNormPrice: this.speakerDetails.price,
          cartPerProduct: this.speakerDetails.perProduct,
        });
      } else {
        this.cart[cartIndex.cartPerProduct] =
          this.speakerDetails.perProduct + 1;
      }
    },
    // this.cart.push({
    //     cartName: this.speakerDetails.alias,
    //     cartImage: this.speakerDetails.image,
    //     cartPrice: this.speakerPrice(),
    //     cartPerProduct: this.speakerDetails.perProduct,
    //   });
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
.go_back:hover {
  color: #d87d4a;
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
.content {
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  opacity: 50%;
  margin-top: 15px;
}
.box {
  margin-left: 2rem;
  font-size: 22px;
  letter-spacing: 1.1428571939468384px;
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
/* Tablets / iPad ----------- */
/* and (min-width: 768px) */
@media only screen and (max-width: 1024px) {
  .container {
    padding: 3rem 4rem 3rem;
  }
  .go_back {
    font-size: 15px;
  }
  #headphonemarkII {
    width: 19rem;
    height: 30rem;
    margin-right: 3rem;
  }
  .new {
    opacity: 100%;
  }
  .XX99_MARK {
    font-size: 2rem;
    margin-top: 1.5rem;
    line-height: 32px;
    font-weight: 700;
  }
  .headphoneII_word {
    width: 20.5rem;
    margin: 2rem 0;
    opacity: 60%;
    font-size: 15px;
    line-height: 25px;
  }
  .price {
    margin: 0.5rem 0 1.3rem;
  }
  .addto_cart {
    background-color: #d87d4a;
    border: 1px solid #d87d4a;
    letter-spacing: 2px;
  }

  /* Features and in d box styling */
  .container2 {
    flex-direction: column;
    margin: 7rem 0rem;
  }
  .container3 {
    width: 100%;
    margin-bottom: 5rem;
  }
  .features {
    font-size: 32px;
  }
  .content {
    font-size: 15px;
    opacity: 60%;
    margin-bottom: 2rem;
  }
  .box {
    margin-left: 0rem;
    font-size: 32px;
  }
  li {
    margin: 0rem 0 0 23rem;
    padding: 0rem 0;
    font-size: 15px;
    letter-spacing: 0.8px;
  }

  /* three images styling */
  .img_cont {
    margin: 4rem 0;
  }
  #audio_gear,
  #HD11 {
    width: 17rem;
    border-radius: 1rem;
  }
  #audio_gear {
    margin-bottom: 1rem;
  }
  #big_img {
    width: 40rem;
  }
  /* YOU MAY ALSO LIKE */
  .you_may {
    font-size: 32px;
    margin: 8rem 0 2rem;
  }
  .samephones {
    width: 12rem;
    height: 14rem;
  }

  .phonewords {
    font-size: 22px;
    margin: 1rem 0;
  }
  .formargin {
    margin: 5rem -1rem 0 -1rem;
  }
  .best {
    margin-bottom: 0;
    margin-left: 0rem;
  }
}

/* Mobile ----------- */
@media only screen and (max-width: 767px) {
  .container {
    padding: 3rem 2.4rem;
  }
  .go_back {
    font-size: 17px;
  }
  .HeadphoneXX {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    text-align: left;
  }
  #headphonemarkII {
    width: 20.4rem;
    height: 22rem;
    margin-right: 0rem;
  }
  .new {
    opacity: 100%;
    font-weight: 600;
  }
  .XX99_MARK {
    font-size: 2rem;
  }
  .headphoneII_word {
    letter-spacing: 0.6px;
  }

  /* Features and in d box styling */
  .content {
    width: 20.4rem;
    letter-spacing: 0.6px;
  }
  .box {
    word-spacing: -0.01rem;
    margin-bottom: 2.5rem;
  }
  li {
    margin: 0rem 0 0 -2rem;
    padding: 0;
    letter-spacing: 1px;
  }

  /* three images styling */
  .img_cont {
    margin: 4rem 0;
    flex-direction: column;
    justify-content: center;
  }
  #audio_gear,
  #HD11 {
    width: 100%;
    height: 15rem;
    margin-right: 0rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }
  #big_img {
    width: 100%;
    height: 26rem;
    overflow: hidden;
    border-radius: 1rem;
  }
  /* YOU MAY ALSO LIKE */
  .general {
    flex-direction: column;
    justify-content: center;
  }
  .you_may {
    font-size: 20px;
    margin: 6rem 0 2rem;
  }
  .samephone_cont {
    width: 100%;
    background: #f1f1f1;
    margin-bottom: 1rem;
  }
  .samephones {
    width: 4.5rem;
    height: 6rem;
    margin: auto;
  }
  .phonewords {
    font-size: 18px;
    margin: 1rem 0;
  }
  .general .addto_cart {
    width: 8.5rem;
    height: 2.5rem;
    margin-bottom: 3rem;
  }
}
</style>
