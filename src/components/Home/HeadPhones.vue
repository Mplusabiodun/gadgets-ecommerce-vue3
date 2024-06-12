<template>
  <div class="container">
    <h2>HEADPHONES</h2>
  </div>
  <div class="container2">
    <ul v-for="headphone in headPhones" :key="headphone.id">
      <li>
        <!-- beginning -->
        <div class="HeadphoneXX">
          <img id="headphonemarkII" :src="headphone.image" alt="headphone" />
          <div class="second">
            <p v-if="headphone.new === true" class="new">NEW PRODUCT</p>
            <h1 class="XX99_MARK">{{ headphone.name }}</h1>
            <p class="headphoneII_word">
              {{ headphone.description }}
            </p>
            <router-link
              :to="'/headphones/' + headphone.id"
              class="see_product2"
            >
              SEE PRODUCT
            </router-link>
            <!-- <button @click="headphoneII" class="see_product">
              SEE PRODUCT
            </button> -->
          </div>
        </div>
        <!-- End -->
      </li>
    </ul>

    <!-- <div class="HeadphoneXX">
      <img
        id="headphonemarkII"
        src="./pics/headphonemarkII.png"
        alt="headphone"
      />
      <div class="second">
        <p class="new">NEW PRODUCT</p>
        <h1 class="XX99_MARK">XX99 Mark II Headphones</h1>
        <p class="headphoneII_word">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <button @click="headphoneII" class="see_product">SEE PRODUCT</button>
      </div>
    </div> -->

    <!-- <div> -->
    <!-- <div class="HeadphoneXX">
      <div class="second formargin">
        <h1 class="XX99_MARK">XX99 Mark I Headphones</h1>
        <p class="headphoneI_word">
          As the gold standard for headphones, the classic XX99 Mark I offers
          detailed and accurate audio reproduction for audiophiles, mixing
          engineers, and music aficionados alike in studios and on the go.
        </p>
        <button @click="headphoneI" class="see_product">SEE PRODUCT</button>
      </div>
      <img
        id="headphonemarkI"
        src="./pics/headphonemarkI.png"
        alt="headphone"
      />
    </div> -->

    <!-- </div> -->
    <!-- <div class="HeadphoneXX">
      <img
        id="headphoneXX59"
        src="./pics/headphoneXX59.png"
        alt="headphoneXX59"
      />
      <div class="second">
        <h1 class="XX99_MARK">XX59 Headphones</h1>
        <p class="XX59_word">
          Enjoy your audio almost anywhere and customize it to your specific
          tastes with the XX59 headphones. The stylish yet durable versatile
          wireless headset is a brilliant companion at home or on the move.
        </p>
        <button @click="headphoneXX59" class="see_product">SEE PRODUCT</button>
      </div>
    </div> -->

    <the-shop></the-shop>
    <the-best class="best"></the-best>
  </div>
</template>

<script>
export default {
  inject: ["products"],
  computed: {
    headPhones() {
      return this.products.filter((product) => product.type === "headphones");
    },
    // headphoneId() {
    //   return this.$router.push("/headphones/XX99II");
    // },
  },
  provide() {
    return {
      headPhones: this.headPhones,
    };
  },
  methods: {
    // headphoneII() {
    //   this.$router.push("/headphones/XX99II");
    // },
    headphoneII() {
      let phoneId = "";
      for (const headphone of this.headPhones) {
        phoneId = headphone.id;
      }
      this.$router.push("/headphones/" + phoneId);
    },
    headphoneI() {
      this.$router.push("/headphones/XX99I");
    },
    headphoneXX59() {
      this.$router.push("/headphones/XX59");
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  color: #ffffff;
  background: #0e0e0e;
  padding: 35px 50px;
}
h2 {
  font-size: 28px;
  color: #ffffff;
  text-align: center;
  padding: 1rem 0;
  letter-spacing: 1.4px;
}
.container2 {
  width: 100%;
  color: #ffffff;
  padding: 1.2rem 10rem 1rem 10rem;
}
.HeadphoneXX {
  display: flex;
  flex-direction: row;
  margin-top: 4rem;
  text-align: left;
}
#headphonemarkII,
#headphoneXX59 {
  width: 24rem;
  height: 26rem;
  margin-right: 10rem;
  margin-left: 0;
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
  width: 22rem;
  color: #000000;
  font-size: 3rem;
  line-height: 50px;
  letter-spacing: 1px;
  margin-top: 1rem;
}
.headphoneII_word,
.headphoneI_word,
.XX59_word {
  width: 24rem;
  color: #000000;
  margin-top: 14px;
  margin-bottom: 2rem;
  opacity: 75%;
  font-size: 13px;
  line-height: 22px;
}
/* .see_product {
  width: 10rem;
  height: 3rem;
  font-weight: bold;
  text-align: center;
  background-color: #fbaf85;
  border: 1px solid #fbaf85;
} */
.see_product2 {
  padding: 10px 20px;
  width: 10rem;
  height: 3rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  background-color: #fbaf85;
  border: 1px solid #fbaf85;
}
.formargin {
  margin-right: 8.5rem;
  margin-left: 0;
}
#headphonemarkI {
  width: 27rem;
  height: 24rem;
  background: #f1f1f1;
}
.headphoneI_word {
  width: 22.5rem;
}
.best {
  margin-top: 0;
}
</style>
