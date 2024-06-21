<template>
  <div class="container">
    <h2>HEADPHONES</h2>
  </div>
  <div class="container2">
    <ul v-for="headphone in headPhones" :key="headphone.id">
      <li>
        <div class="HeadphoneXX">
          <div class="img_div">
            <img id="headphonemarkII" :src="headphone.image" alt="headphone" />
          </div>
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
          </div>
        </div>
      </li>
    </ul>

    <the-shop class="formargin"></the-shop>
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
  },
  provide() {
    return {
      headPhones: this.headPhones,
    };
  },
  methods: {
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
  margin-top: 5rem;
  text-align: left;
}
#headphonemarkII {
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
  font-weight: bold;
}
.headphoneII_word {
  width: 24rem;
  color: #000000;
  margin-top: 14px;
  margin-bottom: 2rem;
  opacity: 75%;
  font-size: 13px;
  line-height: 22px;
}
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
.see_product2:hover,
.see_product2:active {
  background-color: #d87d4a;
  border-color: #d87d4a;
}
.formargin {
  margin: 5rem -5rem 2rem -1rem;
}
.best {
  margin-top: 0;
}
/* Tablets / iPad ----------- */
/* and (min-width: 768px) */
@media only screen and (max-width: 1024px) {
  h2 {
    font-size: 30px;
    padding: 2.2rem 0;
    letter-spacing: 1.6px;
  }
  .container2 {
    padding: 1.5rem 3rem 1.5rem 1rem;
  }
  .HeadphoneXX {
    flex-direction: column;
    text-align: center;
  }
  .img_div {
    width: 100%;
    height: 26rem;
    background: #f1f1f1;
    margin-right: 1rem;
  }
  #headphonemarkII {
    width: 24rem;
    height: 26rem;
    margin: 0 auto;
  }
  .second {
    text-align: center;
    margin: 2rem auto;
  }
  .new {
    font-size: 14px;
    opacity: 100%;
  }
  .XX99_MARK {
    font-size: 2.8rem;
    text-align: center;
    margin: 1rem auto 1.5rem;
    font-weight: 700;
  }
  .headphoneII_word {
    width: 35rem;
    opacity: 50%;
    font-size: 15px;
    line-height: 25px;
  }
  .see_product2 {
    background-color: #d87d4a;
    border: 1px solid #d87d4a;
    letter-spacing: 1px;
  }
  .formargin {
    margin: 5rem -1rem 0 2rem;
  }
  .best {
    margin-bottom: 0;
    margin-left: 2rem;
  }
}

/* Mobile ----------- */
@media only screen and (max-width: 767px) {
  h2 {
    padding: 1rem 0;
  }
  .container2 {
    padding: 0rem 1rem 1.5rem 0rem;
  }
  .HeadphoneXX {
    flex-direction: column;
    text-align: center;
  }
  .img_div {
    width: 20.4rem;
    height: 22rem;
    margin-right: 0rem;
  }
  #headphonemarkII {
    width: 20.4rem;
    height: 22rem;
  }
  .new {
    font-weight: 700;
  }
  .XX99_MARK {
    font-size: 2.5rem;
    margin: 1rem auto 1.1rem;
  }
  .headphoneII_word {
    width: 20.4rem;
  }
  .see_product2 {
    margin: 0 0 0 -1.5rem;
  }
  .formargin {
    margin: 5rem 0rem 0 0rem;
  }
  .best {
    margin: 0 1rem 0 2rem;
  }
}
</style>
