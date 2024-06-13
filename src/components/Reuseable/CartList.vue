<template>
  <li v-for="cart in cartList" :key="cart.name">
    <img :src="cart.cartImage" :alt="cart.cartName" />
    <div class="name_price">
      <h3>{{ cart.cartName }}</h3>
      <p>$ {{ cart.cartPrice }}</p>
    </div>
    <button class="number">
      <span @click="sub" class="sub">-</span
      ><span class="figure">{{ cart.cartPerProduct }}</span
      ><span @click="add" class="add">+</span>
    </button>
  </li>
  <!-- ><span class="figure">{{ cart.cartPerProduct }}</span -->
</template>
<script>
export default {
  props: ["cartList"],
  // inject: ["numberOfProduct"],
  data() {
    return {
      // updatedNumberOfProduct: 0,
    };
  },
  computed: {
    // numberOfProduct() {
    //   let requiredNumberOfProduct;
    //   for (const cart of this.cartList) {
    //     requiredNumberOfProduct = cart.cartPerProduct;
    //     // numberOfProduct = cart.cartPerProduct + 1;
    //   }
    //   return requiredNumberOfProduct;
    // },
  },
  methods: {
    // add() {
    //   return this.numberOfProduct + 1;
    // },
    // sub() {
    //   this.numberOfProduct -= 1;
    //   if (this.numberOfProduct < 1) {
    //     return (this.numberOfProduct = 1);
    //   }
    // },
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
  font-size: 15px;
  font-weight: bold;
}
.figure {
  margin: 0 1.2rem;
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
