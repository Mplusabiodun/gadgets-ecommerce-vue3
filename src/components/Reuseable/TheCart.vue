<template>
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
        <p>$ 6,700</p>
      </div>
      <button @click="checkOut" class="checkout">CHECKOUT</button>
    </div>
  </dialog>
</template>

<script>
import CartList from "./CartList.vue";
export default {
  components: {
    CartList,
  },
};
</script>

<style scoped>
dialog {
  position: fixed;
  top: 55%;
  left: 69%;
  transform: translate(-50%, -50%);
  width: 30%;
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 25px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 999;
  color: #000000;
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
