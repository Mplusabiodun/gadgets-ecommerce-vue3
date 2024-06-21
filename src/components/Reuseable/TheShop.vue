<template>
  <div class="general">
    <div class="headphones">
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
      this.$router.push("/headphones/XX99MarkI");
    },
    speakers() {
      this.$router.push("/speakers/ZX9");
    },
    earPhones() {
      this.$router.push("/earphones/YX1");
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
  margin-bottom: 3rem;
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
/* Tablets / iPad ----------- */
/* and (min-width: 768px)  */
@media only screen and (max-width: 1024px) {
  .general {
    margin-top: 1.5rem;
  }
  .headphones,
  .speakers,
  .earphones {
    width: 243px;
    margin-bottom: 2rem;
  }
  .samephones {
    width: 7rem;
    height: 9rem;
  }
  .phonewords {
    font-size: 15px;
    margin: 0 0 3px 0;
    letter-spacing: 1px;
  }
  .shop {
    letter-spacing: 1px;
    font-size: 13px;
    opacity: 70%;
  }
  .arrow {
    font-size: 20px;
  }
}

/* Mobile ----------- */
@media only screen and (max-width: 767px) {
  .general {
    margin-top: 1.5rem;
    flex-direction: column;
    align-items: center;
  }
  .samephones {
    width: 9rem;
    height: 11rem;
    margin: -1rem 0;
  }
  .phonewords {
    font-size: 18px;
    margin: 0;
    letter-spacing: 1px;
  }
  .shop {
    letter-spacing: 1px;
    font-size: 16px;
    opacity: 50%;
    font-weight: bold;
  }
  .arrow {
    font-size: 22px;
  }
}
</style>
