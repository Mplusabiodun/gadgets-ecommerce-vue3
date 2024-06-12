<template>
  <div class="general">
    <div class="headphones">
      <!-- <img class="samephones" src="./pics/headphones.png" alt="headphones" /> -->
      <img
        class="samephones"
        src="../Home/pics/headphones.png"
        alt="headphones"
      />
      <p class="phonewords">HEADPHONES</p>
      <button @click="headPhones" class="shop">
        SHOP <span class="arrow">></span>
      </button>
    </div>
    <div class="speakers">
      <img class="samephones" src="../Home/pics/speakers.png" alt="speakers" />
      <p class="phonewords">SPEAKERS</p>
      <button @click="speakers" class="shop">
        SHOP <span class="arrow">></span>
      </button>
    </div>
    <div class="earphones">
      <img
        class="samephones"
        src="../Home/pics/earphones.png"
        alt="earphones"
      />
      <p class="phonewords">EARPHONES</p>
      <button @click="earPhones" class="shop">
        SHOP <span class="arrow">></span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    headPhones() {
      this.$router.push("/headphones");
    },
    speakers() {
      this.$router.push("/speakers");
    },
    earPhones() {
      this.$router.push("/earphones");
    },
  },
};
</script>
<style scoped>
.general {
  margin-top: 3rem;
  color: #0e0e0e;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  font-weight: bold;
}
.headphones,
.speakers,
.earphones {
  width: 350px;
  /* height: 284px; */
  margin-bottom: 3rem;
  /* background: grey; */
}
.samephones {
  width: 155px;
  height: 160px;
}
.phonewords {
  color: #0e0e0e;
  font-size: 13.5px;
  margin: 0 0 8px 0;
}
.shop {
  color: #0e0e0e;
  background: inherit;
  border: none;
  font-size: 11.5px;
  opacity: 70%;
  margin-bottom: 8px;
}
.arrow {
  color: #d87d4a;
  font-size: 17px;
  text-align: center;
  font-weight: 900;
}
</style>
