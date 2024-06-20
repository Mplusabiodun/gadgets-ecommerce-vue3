<template>
  <div>
    <h2>This page you requested for does not exist.</h2>
    <p>
      Kindly checkout our <router-link to="/homepage">Homepage</router-link>
    </p>
  </div>
</template>
<style scoped>
div {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 5rem auto 20rem;
  max-width: 40rem;
  text-align: center;
  color: black;
}
a {
  text-decoration: none;
  color: #d87d4a;
  font-weight: bold;
}
h2,
p {
  color: black;
  font-weight: bold;
}
/* Tablets / iPad ----------- */
/* and (min-width: 768px) */
@media only screen and (max-width: 1024px) {
  div {
    margin: 5rem auto 20rem;
    max-width: 70%;
  }
  h2,
  p {
    line-height: 35px;
  }
}

/* Mobile ----------- */
@media only screen and (max-width: 767px) {
  div {
    margin: 5rem 2rem 20rem;
    max-width: 100%;
  }
}
</style>
