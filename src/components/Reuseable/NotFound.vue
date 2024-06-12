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
</style>
