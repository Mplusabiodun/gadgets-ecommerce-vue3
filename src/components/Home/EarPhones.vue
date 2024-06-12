<template>
  <div class="container">
    <h2>EARPHONES</h2>
  </div>
  <div class="container2">
    <ul v-for="earphone in earPhones" :key="earphone.id">
      <li>
        <!-- beginning -->
        <div class="YX1_Earphones">
          <img id="Earphone" :src="earphone.image" alt="headphone" />
          <div class="second">
            <p v-if="earphone.new === true" class="new">NEW PRODUCT</p>
            <h1 class="YX1_WIRELESS">{{ earphone.name }}</h1>
            <p class="Earphone_word">
              {{ earphone.description }}
            </p>
            <router-link :to="'/earphones/' + earphone.id" class="see_product2">
              SEE PRODUCT
            </router-link>
            <!-- <button @click="earphoneYX1" class="see_product">
              SEE PRODUCT
            </button> -->
          </div>
        </div>
        <!-- End -->
      </li>
    </ul>

    <!-- <div class="YX1_Earphones">
      <img
        id="Earphone"
        src="../Home/pics/YX1_Earphone_upgrade.png"
        alt="headphone"
      />
      <div class="second">
        <p class="new">NEW PRODUCT</p>
        <h1 class="YX1_WIRELESS">YX1 WIRELESS EARPHONES</h1>
        <p class="Earphone_word">
          Tailor your listening experience with bespoke dynamic drivers from the
          new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even
          in noisy environments with its active noise cancellation feature.
        </p>
        <button @click="earphoneYX1" class="see_product">SEE PRODUCT</button>
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
    earPhones() {
      return this.products.filter((product) => product.type === "earphones");
    },
  },
  // methods: {
  //   earphoneYX1() {
  //     this.$router.push("/earphones/YX1Wireless");
  //   },
  // },
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
.YX1_Earphones {
  display: flex;
  flex-direction: row;
  margin-top: 4rem;
  text-align: left;
}
#Earphone {
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
.YX1_WIRELESS {
  width: 26rem;
  color: #000000;
  font-size: 2.5rem;
  line-height: 50px;
  letter-spacing: 1px;
  margin-top: 10px;
}
.Earphone_word {
  width: 24rem;
  color: #000000;
  margin-top: 10px;
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
.best {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
