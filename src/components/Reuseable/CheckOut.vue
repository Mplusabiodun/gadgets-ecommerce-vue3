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
            <input
              id="name"
              type="text"
              placeholder="Alexei Ward"
              v-model.trim="userName"
            />
            <!-- :class="{ invalid: inputValidity === 'invalid' }" -->
          </div>
          <div class="email_div">
            <label for="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="alexei@mail.com"
              v-model.trim="userEmail"
            />
            <!-- :class="{ invalid: inputValidity === 'invalid' }" -->
          </div>
        </div>
        <div>
          <label for="phone">Phone Number</label>
          <input
            id="phone"
            type="number"
            placeholder="+1 202-555-0136"
            v-model="userNumber"
          />
        </div>

        <p class="shipping">SHIPPING INFO</p>
        <div>
          <label for="address">Address</label>
          <input
            id="address"
            type="text"
            placeholder="1137 Williams Avenue"
            v-model.trim="userAddress"
          />
        </div>
        <div class="zipcode_city">
          <div>
            <label for="zipcode">ZIP Code</label>
            <input
              id="zipcode"
              type="number"
              placeholder="10001"
              v-model="userZipCode"
            />
          </div>
          <div class="city_div">
            <label for="city">City</label>
            <input
              id="city"
              type="text"
              placeholder="New York"
              v-model.trim="userCity"
            />
          </div>
        </div>
        <div>
          <label for="Country">Country</label>
          <input
            id="Country"
            type="text"
            placeholder="United States"
            v-model.trim="userCountry"
          />
        </div>

        <p class="payment">PAYMENT DETAILS</p>
        <div class="payment_method">
          <label>Payment Method</label>
          <div class="e_money">
            <input
              name="payment_method"
              id="e_money"
              type="radio"
              value="e_money"
              v-model="userEcash"
            />
            <label for="e_money"> e-Money</label>
          </div>
        </div>
        <div class="c_delivery">
          <input
            name="payment_method"
            id="c_delivery"
            type="radio"
            value="c_delivery"
            v-model="userEcash"
          />
          <label for="c_delivery"> Cash on Delivery</label>
        </div>

        <div class="emoneyNumberPin">
          <div>
            <label for="eMoneyNumber">e-Money Number</label>
            <input
              id="eMoneyNumber"
              type="number"
              placeholder="238521993"
              v-model="userMoneyNumber"
            />
          </div>
          <div class="eMoneyPin">
            <label for="eMoneyPin">e-Money PIN</label>
            <input
              id="eMoneyPin"
              type="number"
              placeholder="6891"
              v-model="userMoneyPin"
            />
          </div>
        </div>
      </div>

      <div class="summary">
        <h3 class="summary_word">SUMMARY</h3>
        <ul class="products">
          <li v-for="eachproduct in cart" :key="eachproduct.cartName">
            <img :src="eachproduct.cartImage" :alt="eachproduct.cartName" />
            <div class="name_price">
              <h3 class="cart_name">{{ eachproduct.cartName }}</h3>
              <p class="cart_price">
                $ {{ eachproduct.cartPrice?.toLocaleString() }}
              </p>
            </div>
            <h3 class="required">x{{ eachproduct.cartPerProduct }}</h3>
          </li>
        </ul>
        <div class="total">
          <h3>TOTAL</h3>
          <p>$ {{ total?.toLocaleString() }}</p>
        </div>
        <div class="total">
          <h3>SHIPPING</h3>
          <p>$ {{ shipping?.toLocaleString() }}</p>
        </div>
        <div class="total">
          <h3>VAT (INCLUDED)</h3>
          <p>$ {{ vatIncluded?.toLocaleString() }}</p>
        </div>
        <div class="total">
          <h3>GRAND TOTAL</h3>
          <p class="grandtotal">$ {{ grandTotal?.toLocaleString() }}</p>
        </div>
        <button @click="proceedToPay" class="continue">CONTINUE & PAY</button>
        <p class="invalid_text" v-if="inputValidity === 'invalid'">
          Please, complete the payment details and try again. Thank you!
        </p>
      </div>
    </div>
  </div>

  <div v-if="continueToPay" @click="backDrop" class="backdrop"></div>
  <dialog open v-if="continueToPay">
    <div class="path_div"><img id="path" src="@/assets/Path.png" alt="" /></div>
    <h2 class="thankyou">
      THANK YOU <br />
      FOR YOUR ORDER
    </h2>
    <p class="confimationemail">
      You will receive an email confirmation shortly.
    </p>
    <div class="main_div">
      <div class="inner_div">
        <div class="firstInnerDiv">
          <img
            id="firstProduct"
            :src="firstOfCart.cartImage"
            :alt="firstOfCart.cartName"
          />
          <div class="dialog_name_price">
            <h3>{{ firstOfCart.cartName }}</h3>
            <p>$ {{ firstOfCart.cartPrice?.toLocaleString() }}</p>
          </div>
          <p class="number">x{{ firstOfCart.cartPerProduct }}</p>
        </div>
        <hr />
        <p v-if="cart.length > 1" class="andothers">
          and {{ cart.length - 1 }} other item(s)
        </p>
      </div>
      <div class="inner_div2">
        <h3>Grand total</h3>
        <p>$ {{ grandTotal?.toLocaleString() }}</p>
      </div>
    </div>
    <button @click="goBack" class="continue">BACK TO HOME</button>
  </dialog>
</template>
<script>
export default {
  inject: ["cart"],
  data() {
    return {
      userName: "",
      userEmail: "",
      userNumber: null,
      userAddress: "",
      userZipCode: null,
      userCity: "",
      userCountry: "",
      userEcash: "",
      userMoneyNumber: null,
      userMoneyPin: null,
      inputValidity: "pending",
      continueToPay: false,
      total: 0,
      shipping: 50,
      vatIncluded: 1079,
      grandTotal: 0,
      firstOfCart: null,
    };
  },
  methods: {
    goBack() {
      this.$router.push("/homepage");
      this.cart.splice(0, this.cart.length);
    },
    backDrop() {
      this.continueToPay = false;
      this.$router.push("/homepage");
      this.cart.splice(0, this.cart.length);
    },
    proceedToPay() {
      if (
        this.userName === "" ||
        this.userEmail === "" ||
        this.userNumber === null ||
        this.userAddress === "" ||
        this.userZipCode === null ||
        this.userCity === "" ||
        this.userCountry === "" ||
        this.userEcash === "" ||
        this.userMoneyNumber === null ||
        this.userMoneyPin === null
      ) {
        this.inputValidity = "invalid";
        return;
      } else {
        // this.inputValidity = "valid";
        this.continueToPay = true;
        console.log(this.cart);
      }
    },
  },
  created() {
    for (const products of this.cart) {
      this.total += products.cartPrice;
    }
    this.firstOfCart = this.cart[0];
    this.grandTotal = this.total + this.shipping;
  },
};
</script>
<style scoped>
* {
  color: #000000;
  box-sizing: border-box;
  overflow: hidden;
}
.invalid {
  border: 2px solid red;
}
.valid {
  border: 1px solid #cfcfcf;
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
.go_back:hover {
  color: #d87d4a;
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
  padding: 0.8rem;
  margin: 10px 0;
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
}
#e_money,
#c_delivery {
  width: 2rem;
}
.c_delivery {
  margin: 0 0 1rem 14.5rem;
}

/* SUMMARY */
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
  overflow-y: auto;
  scroll-behavior: smooth;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
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
  width: 4rem;
  height: 4rem;
}
.name_price {
  margin-right: 2rem;
  text-align: left;
}
.cart_name {
  font-size: 15px;
  font-weight: 700;
  text-align: left;
}
.cart_price {
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  opacity: 50%;
  margin-top: 3px;
}
.required {
  opacity: 25%;
  font-size: 18px;
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
  font-weight: bold;
  letter-spacing: 1px;
}
.grandtotal {
  color: #d87d4a;
}
.continue {
  width: 100%;
  padding: 0.7rem;
  background-color: #d87d4a;
  border: 1px solid #d87d4a;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
}
.invalid_text {
  margin-top: 5px;
  font-weight: bold;
  color: red;
  text-align: center;
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
  z-index: 100;
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.25);
  /* backdrop-filter: blur(1px); */
  cursor: pointer;
  z-index: 50;
}
.path_div {
  width: 3rem;
  height: 3rem;
  background: #d87d4a;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#path {
  color: #fff;
  width: 24.55px;
  height: 16.8px;
}
.thankyou {
  width: 17rem;
  font-size: 26px;
  font-weight: 700;
  line-height: 30px;
  text-align: left;
  margin: 1rem 0;
}
.confimationemail {
  font-size: 15px;
  text-align: left;
  opacity: 50%;
}
.main_div {
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: 9px;
  margin: 1.4rem 0;
}
.inner_div {
  width: 60%;
  background: #f1f1f1;
  padding: 1.2rem;
}
.firstInnerDiv {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}
#firstProduct {
  width: 2.8rem;
  height: 2.8rem;
}
.dialog_name_price {
  margin-right: 2rem;
  text-align: left;
}
.dialog_name_price h3 {
  font-size: 15px;
  text-align: left;
  font-weight: 700;
}
.dialog_name_price p {
  font-size: 14px;
  text-align: left;
  opacity: 50%;
  margin-top: 3px;
}
.number {
  font-size: 14px;
  opacity: 50%;
  font-weight: bold;
}
hr {
  opacity: 50%;
  margin: 0.5rem 0;
}
.andothers {
  opacity: 50%;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
}
.inner_div2 {
  background: #000000;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  width: 40%;
  padding-left: 1rem;
}

.inner_div2 h3 {
  color: #fff;
  margin-bottom: 5px;
  font-size: 15px;
  opacity: 50%;
}
.inner_div2 p {
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
}
/* Tablets / iPad ----------- */
/* and (min-width: 768px) */
@media only screen and (max-width: 1024px) {
  .container {
    margin: 3rem 4.5rem 0 4.5rem;
  }
  .container2 {
    flex-direction: column;
  }
  .checkout {
    width: 100%;
    margin-bottom: 3rem;
  }
  .go_back {
    margin-bottom: 3rem;
  }
  input {
    width: 16.8rem;
  }
  .checkout_text {
    font-size: 32px;
  }
  .billing,
  .shipping,
  .payment {
    letter-spacing: 0.9px;
  }
  .name_email input {
    width: 16.8rem;
  }
  .e_money,
  .c_delivery {
    width: 16.8rem;
    margin: 0 0 1rem 11.8rem;
  }
  .c_delivery {
    margin: 0 0 1rem 17.9rem;
  }

  /* SUMMARY */
  .summary {
    width: 100%;
  }
  .name_price {
    margin: 0 0 0 -22rem;
  }
  .cart_name {
    letter-spacing: 1px;
  }
  .cart_price {
    letter-spacing: 1px;
  }
  .total {
    margin: 1rem 0;
    letter-spacing: 1px;
  }
  .total h3 {
    font-size: 15px;
  }
  .continue {
    letter-spacing: 2px;
  }

  /* Dialog */
  dialog {
    width: 65%;
    letter-spacing: 1px;
  }
  .thankyou {
    font-size: 32px;
  }
  .confimationemail {
    font-size: 17px;
  }

  .dialog_name_price h3 {
    font-size: 17px;
  }
  .dialog_name_price p {
    font-size: 16px;
  }
  .number {
    font-size: 16px;
  }
  .andothers {
    letter-spacing: 0.5px;
  }
  .inner_div2 h3 {
    font-size: 17px;
    letter-spacing: 1px;
  }
}

/* Mobile ----------- */
@media only screen and (max-width: 767px) {
  .container {
    margin: 2rem 2rem 0 2rem;
  }
  .go_back {
    margin-bottom: 1.5rem;
  }
  .checkout {
    padding: 1.5rem;
  }
  input {
    width: 100%;
  }
  .checkout_text {
    font-size: 26px;
  }
  label {
    margin: 0.5rem 0 0 0;
  }
  .name_email,
  .zipcode_city,
  .emoneyNumberPin {
    flex-direction: column;
  }
  .name_email input {
    width: 100%;
  }
  .email_div,
  .city_div,
  .eMoneyPin {
    margin-left: 0rem;
    margin-top: 0.5rem;
  }
  .payment_method {
    flex-direction: column;
  }
  .payment_method label {
    margin-bottom: 1rem;
  }
  .payment_method {
    flex-direction: column;
  }
  .e_money,
  .c_delivery {
    width: 100%;
    margin: 0 0 1rem 0rem;
  }
  .c_delivery {
    margin: 0 0 1rem 0;
  }

  /* SUMMARY */
  .summary {
    width: 100%;
    height: 36rem;
  }
  .name_price {
    margin: 0 0 0 -5rem;
  }
  /* Dialog */
  dialog {
    top: 45%;
    width: 80%;
    letter-spacing: 1px;
  }
  .thankyou {
    font-size: 26px;
  }
  .confimationemail {
    font-size: 14px;
    opacity: 90%;
  }
  .main_div {
    flex-direction: column;
  }
  .inner_div {
    width: 100%;
  }
  #firstProduct {
    width: 3.5rem;
    height: 3.5rem;
  }
  .inner_div2 {
    width: 100%;
    padding: 2rem 0 2rem 2rem;
  }
  .dialog_name_price h3 {
    font-size: 17px;
  }
  .dialog_name_price p {
    font-size: 16px;
  }
  .number {
    font-size: 16px;
  }
  .andothers {
    letter-spacing: 0.5px;
  }
  .inner_div2 h3 {
    font-size: 17px;
    letter-spacing: 1px;
  }
}
</style>
