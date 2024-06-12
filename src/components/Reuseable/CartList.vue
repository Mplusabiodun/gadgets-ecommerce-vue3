<template>
  <li v-for="cart in cartList" :key="cart.name">
    <img :src="cart.cartImage" :alt="cart.cartName" />
    <div class="name_price">
      <h3>{{ cart.cartName }}</h3>
      <p>$ {{ cart.cartPrice * numberOfProduct }}</p>
    </div>
    <button class="number">
      <span @click="sub" class="sub">-</span><span>{{ numberOfProduct }}</span
      ><span @click="add" class="add">+</span>
    </button>
  </li>
</template>
<script>
export default {
  props: ["cartList"],
  data() {
    return {
      numberOfProduct: 1,
    };
  },
  computed: {},
  methods: {
    add() {
      this.numberOfProduct += 1;
      if (this.numberOfProduct >= 9) {
        return (this.numberOfProduct = 9);
      }
    },
    sub() {
      this.numberOfProduct -= 1;
      if (this.numberOfProduct <= 1) {
        return (this.numberOfProduct = 1);
      }
    },
  },
};
</script>

<style scoped>
* {
  color: #000000;
}
li {
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}
img {
  width: 3.8rem;
  height: 3.8rem;
  margin-left: -2.4rem;
}
.name_price {
  margin-left: -4rem;
  text-align: left;
}
h3 {
  font-size: 15px;
  font-weight: 700;
  text-align: left;
}
p {
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  opacity: 50%;
  margin-top: 3px;
}
.number {
  width: 5.5rem;
  height: 2rem;
  text-align: center;
  background: #f1f1f1;
  border: 1px solid #f1f1f1;
  letter-spacing: 1.1rem;
  text-align: right;
  font-size: 15px;
  font-weight: bold;
}
.sub,
.add {
  opacity: 25%;
  font-size: 18px;
}
.sub {
  margin-left: 5px;
}
</style>
