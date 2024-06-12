<template>
  <div class="outside">
    <nav class="nav_bar">
      <h3 class="audiophile">audiophile</h3>
      <nav class="navigations">
        <router-link to="/homepage">HOME</router-link>
        <router-link to="/headphones">HEADPHONES</router-link>
        <router-link to="/speakers">SPEAKERS</router-link>
        <router-link to="/earphones">EARPHONES</router-link>
      </nav>
      <img
        @click="toCart"
        id="assets"
        src="../Home/pics/Combined_Shape.png"
        alt="Combined Shape"
      />
    </nav>
    <hr />

    <dialog open v-if="addToCart">
      <div class="cart">
        <h3>CART({{ noOfSelectedProduct }})</h3>
        <button @click="removeAllCart" class="remove">Remove all</button>
      </div>
      <ul class="products">
        <cart-list :cartList="cart"></cart-list>
      </ul>
      <div class="total-checkout">
        <div class="total">
          <h3>TOTAL</h3>
          <p>$ {{ total }}</p>
        </div>
        <button @click="checkOut" class="checkout">CHECKOUT</button>
      </div>
    </dialog>
  </div>
</template>

<script>
import CartList from "./CartList.vue";

export default {
  inject: ["cart"],
  components: {
    CartList,
  },
  data() {
    return {
      addToCart: false,
      noOfSelectedProduct: 0,
      total: 0,
    };
  },
  methods: {
    toCart() {
      this.addToCart = !this.addToCart;
      this.noOfSelectedProduct = this.cart.length;
      // let totalPrices;
      for (const products of this.cart) {
        this.total += parseInt(products.cartPrice);
        console.log(products.cartPrice);
        console.log(this.total);
      }
    },
    removeAllCart() {
      this.cart.splice(0, this.cart.length);
      this.noOfSelectedProduct = 0;
      this.total = 0;
    },
    checkOut() {
      this.addToCart = false;
      this.$router.push("/checkout");
    },
  },
};
</script>

<style scoped>
* {
  color: #000000;
}
.outside {
  color: #ffffff;
  background: #0e0e0e;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}
.nav_bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 25px;
  font-weight: bold;
}
.navigations {
  display: flex;
  flex-direction: row;
  font-family: Manrope;
  font-size: 13px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 2px;
}
#assets {
  width: 23.33px;
  height: 20px;
  top: 32px;
  left: 1251.5px;
  gap: 0px;
  opacity: 0px;
}

.audiophile,
.navigations {
  margin-right: 9em;
  color: #ffffff;
}
a {
  margin-right: 27px;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
}
a.router-link-active {
  color: #d87d4a;
}
hr {
  width: 80%;
  margin: 0 auto;
  opacity: 50%;
}
dialog {
  position: fixed;
  top: 55%;
  left: 69%;
  transform: translate(-50%, -50%);
  width: 30%;
  background-color: #fff;
  border: 2px solid #ccc;
  padding: 25px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  /* z-index: 999; */
  font-weight: bold;
  border-radius: 8px;
}
.cart {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.cart h3 {
  font-size: 18px;
  letter-spacing: 1.2px;
  text-align: left;
}
.cart button {
  opacity: 50%;
  font-size: 15px;
  border: none;
  background-color: inherit;
  text-align: left;
}
.products {
  height: 15rem;
  overflow-y: scroll;
  scroll-behavior: smooth;
  overflow-x: hidden;
}
.total {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0;
}
/* .total-checkout {
  bottom: 0;
  left: 0;
  right: 0;
} */
.total h3 {
  font-size: 15px;
  opacity: 50%;
}
.total p {
  font-size: 18px;
}
.checkout {
  width: 100%;
  text-align: center;
  padding: 7px 0;
  font-weight: bold;
  background: #d87d4a;
  border: 1px solid #d87d4a;
  color: #fff;
  letter-spacing: 2px;
}
</style>
