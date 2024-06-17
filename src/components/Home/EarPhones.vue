<template>
  <div class="container">
    <h2>EARPHONES</h2>
  </div>
  <div class="container2">
    <ul v-for="earphone in earPhones" :key="earphone.id">
      <li>
        <div class="YX1_Earphones">
          <div class="img_div">
            <img id="Earphone" :src="earphone.image" alt="headphone" />
          </div>
          <div class="second">
            <p v-if="earphone.new === true" class="new">NEW PRODUCT</p>
            <h1 class="YX1_WIRELESS">{{ earphone.name }}</h1>
            <p class="Earphone_word">
              {{ earphone.description }}
            </p>
            <router-link :to="'/earphones/' + earphone.id" class="see_product2">
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
    earPhones() {
      return this.products.filter((product) => product.type === "earphones");
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
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  h2 {
    font-size: 30px;
    padding: 2.2rem 0;
    letter-spacing: 1.6px;
  }
  .container2 {
    padding: 1.5rem 3rem 1.5rem 1rem;
  }
  .YX1_Earphones {
    flex-direction: column;
    text-align: center;
  }
  .img_div {
    width: 100%;
    height: 26rem;
    background: #f1f1f1;
    margin-right: 1rem;
  }
  #Earphone {
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
  .YX1_WIRELESS {
    font-size: 2.8rem;
    text-align: center;
    margin: 1rem auto 1.5rem;
    font-weight: 700;
  }
  .Earphone_word {
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
}
</style>
