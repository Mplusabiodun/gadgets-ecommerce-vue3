<template>
  <div class="container">
    <button @click="goBack" class="go_back">Go Back</button>
    <div></div>
    <div class="container2">
      <div class="checkout">
        <h2 class="checkout_text">CHECKOUT</h2>
        <p class="billing">BILLING DETAILS</p>
        <div class="name_email">
          <div>
            <label for="name">Name</label>
            <input id="name" type="text" placeholder="Alexei Ward" />
          </div>
          <div class="email_div">
            <label for="email">Email Address</label>
            <input id="email" type="email" placeholder="alexei@mail.com" />
          </div>
        </div>
        <div>
          <label for="phone">Phone Number</label>
          <input id="phone" type="number" placeholder="+1 202-555-0136" />
        </div>

        <p class="shipping">SHIPPING INFO</p>
        <div>
          <label for="address">Address</label>
          <input id="address" type="text" placeholder="1137 Williams Avenue" />
        </div>
        <div class="zipcode_city">
          <div>
            <label for="zipcode">ZIP Code</label>
            <input id="zipcode" type="number" placeholder="10001" />
          </div>
          <div class="city_div">
            <label for="city">City</label>
            <input id="city" type="text" placeholder="New York" />
          </div>
        </div>
        <div>
          <label for="Country">Country</label>
          <input id="Country" type="text" placeholder="United States" />
        </div>

        <p class="payment">PAYMENT DETAILS</p>
        <div class="payment_method">
          <label>Payment Method</label>
          <div class="e_money">
            <input name="e_cash" id="e_money" type="radio" />
            <label for="e_money"> e-Money</label>
          </div>
        </div>
        <div class="c_delivery">
          <input name="e_cash" id="c_delivery" type="radio" />
          <label for="c_delivery"> Cash on Delivery</label>
        </div>

        <div class="emoneyNumberPin">
          <div>
            <label for="eMoneyNumber">e-Money Number</label>
            <input id="eMoneyNumber" type="number" placeholder="238521993" />
          </div>
          <div class="eMoneyPin">
            <label for="eMoneyPin">e-Money PIN</label>
            <input id="eMoneyPin" type="number" placeholder="6891" />
          </div>
        </div>
      </div>

      <div class="summary">
        <h3 class="summary_word">SUMMARY</h3>
        <ul class="products">
          <cart-list :cartList="cart"></cart-list>
        </ul>
        <div class="total">
          <h3>TOTAL</h3>
          <p>$ {{}}</p>
        </div>
        <div class="total">
          <h3>SHIPPING</h3>
          <p>$ {{}}</p>
        </div>
        <div class="total">
          <h3>VAT (INCLUDED)</h3>
          <p>$ {{}}</p>
        </div>
        <div class="total">
          <h3>GRAND TOTAL</h3>
          <p>$ {{}}</p>
        </div>
        <button @click="proceedToPay" class="continue">CONTINUE & PAY</button>
      </div>
    </div>
  </div>

  <dialog open v-if="continueToPay">
    <div><img src="#" alt="" /></div>
    <h2>THANK YOU FOR YOUR ORDER</h2>
    <p>You will receive an email confirmation shortly.</p>
    <div>
      <div>
        <div>
          <img src="#" alt="" />
          <div>
            <h3>XX99 MK II</h3>
            <p>$ 2,999</p>
          </div>
          <p>x1</p>
        </div>
        <hr />
        <p>and 2 other item(s)</p>
      </div>
      <div>
        <h3>Grand total</h3>
        <p>$5,446</p>
      </div>
    </div>
    <button @click="goBack" class="continue">BACK TO HOME</button>
  </dialog>
</template>
<script>
import CartList from "./CartList.vue";
export default {
  components: {
    CartList,
  },
  data() {
    return {
      continueToPay: false,
    };
  },
  methods: {
    goBack() {
      this.$router.push("/homepage");
    },
    proceedToPay() {
      this.continueToPay = true;
    },
  },
};
</script>
<style scoped>
.summary {
  padding: 2rem 1.5rem 2rem 1.5rem;
  border-radius: 6px;
  width: 30%;
  height: 35rem;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
}
.summary_word {
  font-size: 18px;
  margin-bottom: 1rem;
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
  margin: 0.8rem 0;
}
.total h3 {
  opacity: 50%;
  font-size: 13px;
}
.total p {
  /* font-size: 13px; */
  font-weight: bold;
}
.continue {
  width: 100%;
  padding: 0.7rem;
  background-color: #d87d4a;
  border: 1px solid #d87d4a;
  color: #fff;
  font-weight: bold;
}
* {
  color: #000000;
  box-sizing: border-box;
  overflow: hidden;
}
.container {
  margin: 2rem 0 0 13rem;
}
.container2 {
  display: flex;
  flex-direction: row;
}
.checkout {
  padding: 2rem 2rem 2rem 2rem;
  border-radius: 6px;
  width: 49%;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  margin-right: 1rem;
}

.go_back {
  font-weight: bold;
  text-align: center;
  background-color: inherit;
  border: none;
  opacity: 50%;
  margin-bottom: 2rem;
}

label {
  font-size: 12px;
  font-weight: 700;
  text-align: left;
  display: block;
}
input {
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  width: 13.6rem;
  padding: 0.7rem;
  margin: 5px 0;
}
input:focus {
  border: 1px solid #d87d4a;
  border-color: #d87d4a;
}
.checkout_text {
  font-size: 28px;
}
.billing,
.shipping,
.payment {
  color: #d87d4a;
  font-size: 13px;
  margin: 1.5rem 0 0.6rem 0;
  font-weight: bold;
}
.name_email,
.zipcode_city,
.emoneyNumberPin {
  display: flex;
  width: 100%;
  margin: 0 0 0.6rem 0;
}
.name_email input {
  width: 13.6rem;
}
.email_div,
.city_div,
.eMoneyPin {
  margin-left: 1rem;
}
#address {
  width: 100%;
  margin: 0.3rem 0 0.8rem 0;
}
.payment_method {
  display: flex;
}
.e_money,
.c_delivery {
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  width: 13.6rem;
  padding: 0.7rem 0;
  margin: 0 0 1rem 8.3rem;
  align-items: center;
}
.e_money label,
.c_delivery label {
  display: inline;
  /* margin: 0 0 8px 0; */
}
#e_money,
#c_delivery {
  width: 2rem;
}
.c_delivery {
  margin: 0 0 1rem 14.5rem;
}

/* Dialog */
dialog {
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35%;
  background-color: #fff;
  border: 2px solid #ccc;
  padding: 25px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}
</style>
