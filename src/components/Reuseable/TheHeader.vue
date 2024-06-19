<template>
  <div class="outside">
    <nav class="nav_bar">
      <img id="Hamburger" src="@\assets\Hamburger.png" alt="Hamburger" />
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

    <div v-if="addToCart" @click="addToCart = false" class="backdrop"></div>
    <dialog open v-if="addToCart">
      <div class="cart">
        <h3>CART({{ noOfSelectedProduct }})</h3>
        <button @click="removeAllCart" class="remove">Remove all</button>
      </div>
      <ul class="products" v-if="cart.length > 0">
        <cart-list :cartList="cart"></cart-list>
      </ul>
      <div v-else class="emptycart">
        <h2>Cart is empty</h2>
        <p>You haven't add any product yet</p>
      </div>
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
      for (const products of this.cart) {
        this.total += products.cartPrice;
      }
    },
    removeAllCart() {
      this.cart.splice(0, this.cart.length);
      this.noOfSelectedProduct = 0;
      this.total = 0;
    },
    checkOut() {
      if (this.cart.length === 0) {
        return (this.addToCart = false);
      } else {
        this.addToCart = false;
        this.$router.push("/checkout");
      }
    },
  },
};
</script>

<style scoped>
* {
  color: #000000;
}

.outside {
  position: relative;
  color: #ffffff;
  background: #0e0e0e;
  position: fixed;
  width: 100%;
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
  font-size: 13px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 2px;
}
#assets {
  width: 23.33px;
  height: 20px;
}
#Hamburger {
  display: none;
  width: 1rem;
  height: 1rem;
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
  opacity: 25%;
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(1px);
  cursor: pointer;
  z-index: 50;
}
.emptycart {
  text-align: center;
}
dialog {
  position: absolute;
  top: 120%;
  left: 69%;
  transform: translate(-50%, 0%);
  width: 30%;
  background-color: #fff;
  border: 2px solid #ccc;
  padding: 25px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  z-index: 100;
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
  overflow-y: auto;
  scroll-behavior: smooth;
  overflow-x: hidden;
}
.total {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0;
}
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
/* Tablets / iPad ----------- */
/* and (min-width: 768px) */
@media only screen and (max-width: 1024px) {
  * {
    margin: 0 0rem;
  }
  .nav_bar {
    justify-content: space-between;
    padding: 2rem 5rem;
  }
  #Hamburger {
    display: flex;
    width: 1rem;
    height: 1rem;
  }
  .audiophile {
    margin: -0.4rem 0rem 0 -23rem;
    font-size: 25px;
  }
  .navigations {
    display: none;
  }
  hr {
    opacity: 25%;
  }
  .emptycart {
    text-align: center;
    margin: 3rem 0;
  }
  dialog {
    top: 110%;
    width: 50%;
    padding: 30px;
  }
  .cart h3 {
    font-size: 20px;
  }
  .cart button {
    font-size: 17px;
  }
  .products {
    height: 18rem;
  }
  .total {
    margin: 1.5rem 0;
  }
  .total h3 {
    font-size: 17px;
  }
  .total p {
    font-size: 20px;
  }
  .checkout {
    letter-spacing: 3px;
  }
}

/* Mobile ----------- */
@media only screen and (max-width: 767px) {
  /* * {
    margin: 0 0rem;
  } */
  .nav_bar {
    justify-content: space-between;
    padding: 1.5rem 2.2rem;
  }
  #Hamburger {
    width: 1.5rem;
    height: 1.5rem;
  }
  .audiophile {
    margin: -0.4rem 0 0 0;
    font-size: 1.8rem;
  }
  #assets {
    width: 1.5rem;
    height: 1.5rem;
  }
  hr {
    opacity: 50%;
  }
  .emptycart {
    text-align: center;
    margin: 3rem 0;
  }
  dialog {
    top: 120%;
    /* left: 45%; */
    left: 37%;
    width: 90%;
    padding: 40px;
    border-radius: 12px;
    margin: 0 3.5rem 0 3rem;
  }
  .cart h3 {
    font-size: 20px;
  }
  .cart button {
    font-size: 20x;
    letter-spacing: 2px;
  }
  .emptycart {
    font-size: 22px;
    letter-spacing: 2px;
    line-height: 2.2rem;
  }
  .products {
    height: 18rem;
  }
  .total {
    margin: 1.5rem 0;
  }
  .total h3 {
    font-size: 22px;
  }
  .total p {
    font-size: 22px;
  }
  .checkout {
    letter-spacing: 3px;
    font-size: 22px;
  }
}
</style>
