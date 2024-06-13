<template>
  <div class="container">
    <h2>SPEAKERS</h2>
  </div>
  <div class="container2">
    <ul v-for="speaker in speakers" :key="speaker.id">
      <li>
        <!-- beginning -->
        <div class="ZX_SPEAKERS">
          <img id="ZX9_SPEAKER" :src="speaker.image" alt="headphone" />
          <div class="second">
            <p v-if="speaker.new === true" class="new">NEW PRODUCT</p>
            <h1 class="ZX9_SPEAKER">{{ speaker.name }}</h1>
            <p class="ZX9_SPEAKER_WORD">
              {{ speaker.description }}
            </p>
            <router-link :to="'/speakers/' + speaker.id" class="see_product2">
              SEE PRODUCT
            </router-link>
          </div>
        </div>
        <!-- End -->
      </li>
    </ul>
    <!-- <div class="ZX_SPEAKERS">
      <img
        id="ZX9_SPEAKER"
        src="../Home/pics/ZX9_Speaker_upgrade.png"
        alt="headphone"
      />
      <div class="second">
        <p class="new">NEW PRODUCT</p>
        <h1 class="ZX9_SPEAKER">ZX9 SPEAKER</h1>
        <p class="ZX9_SPEAKER_WORD">
          Upgrade your sound system with the all new ZX9 active speaker. It's a
          bookshelf speaker system that offers truly wireless connectivity --
          creating new possibilities for more pleasing and practical audio
          setups.
        </p>
        <button @click="speakerZX9" class="see_product">SEE PRODUCT</button>
      </div>
    </div> -->

    <!-- <div class="ZX_SPEAKERS">
      <div class="second formargin">
        <h1 class="ZX7_SPEAKER">ZX7 SPEAKER</h1>
        <p class="ZX7_SPEAKER_WORD">
          Stream high quality sound wirelessly with minimal loss. The ZX7
          bookshelf speaker uses high-end audiophile components that represents
          the top of the line powered speakers for home or studio use.
        </p>
        <button @click="speakerZX7" class="see_product">SEE PRODUCT</button>
      </div>
      <img
        id="headphonemarkI"
        src="../Home//pics/ZX7_Speaker_upgrade.png"
        alt="headphone"
      />
    </div> -->

    <the-shop></the-shop>
    <the-best class="best"></the-best>
  </div>
</template>
<script>
export default {
  inject: ["products"],
  computed: {
    speakers() {
      return this.products.filter((product) => product.type === "speakers");
    },
  },
  methods: {
    speakerZX9() {
      this.$router.push("/speakers/ZX9");
    },
    speakerZX7() {
      this.$router.push("/speakers/ZX7");
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
.ZX_SPEAKERS {
  display: flex;
  flex-direction: row;
  margin-top: 4rem;
  text-align: left;
}
#ZX9_SPEAKER,
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
.ZX9_SPEAKER,
.ZX7_SPEAKER {
  width: 16rem;
  color: #000000;
  font-size: 2.5rem;
  line-height: 44px;
  letter-spacing: 1px;
  margin-top: 0.6rem;
}
.ZX7_SPEAKER {
  margin-top: 2rem;
}
.ZX9_SPEAKER_WORD,
.ZX7_SPEAKER_WORD {
  width: 22rem;
  color: #000000;
  margin-top: 8px;
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
  margin-right: 8.5rem;
  margin-left: 0;
}
#headphonemarkI {
  width: 27rem;
  height: 24rem;
  background: #f1f1f1;
}
.ZX7_SPEAKER_WORD {
  width: 23.5rem;
}
.best {
  margin-top: 0;
}
</style>
