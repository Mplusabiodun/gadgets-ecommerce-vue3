<template>
  <div class="audiogear_container">
    <div id="audiogear_container2">
      <h2 class="gear_name">
        BRINGING YOU THE <span class="best">BEST</span> AUDIO GEAR
      </h2>
      <p class="gear_word">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
    <img
      id="audiogear_img"
      src="../Home/pics/audio_gear.jpg"
      alt="best audio gear"
    />
  </div>
</template>
<style scoped>
.audiogear_container {
  display: flex;
  flex-direction: row;
  /* height: 350px; */
  margin-top: 10rem;
  margin-bottom: 0;
}
#audiogear_container2 {
  width: 50%;
  color: black;
  padding: 3rem 0 0 4rem;
}
.gear_name {
  width: 16rem;
  font-family: Manrope;
  font-size: 23px;
  font-weight: 700;
  text-align: left;
  color: #000000;
  letter-spacing: 2px;
  word-spacing: 2px;
  line-height: 1.7rem;
}
.best {
  color: #fbaf85;
}
.gear_word {
  width: 24rem;
  font-family: Manrope;
  font-size: 13px;
  line-height: 25px;
  color: #000000;
  opacity: 80%;
  margin-top: 0.8rem;
}
#audiogear_img {
  width: 50%;
  padding-left: 2rem;
}
/* Tablets / iPad ----------- */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .audiogear_container {
    flex-direction: column;
    margin: 2rem 0;
  }
  #audiogear_container2 {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }
  .gear_name {
    width: 35rem;
    font-size: 40px;
    text-align: center;
    line-height: 2.6rem;
  }
  .gear_word {
    width: 35.6rem;
    font-size: 15px;
    margin-top: 2rem;
    line-height: 25px;
  }
  #audiogear_img {
    width: 100%;
    height: 18.7rem;
    padding-left: 0;
    /* margin-bottom: 2rem; */
  }
}

/* Mobile ----------- */
@media only screen and (max-width: 767px) {
  .audiogear_container {
    flex-direction: column;
    margin: 2rem 0;
  }
  #audiogear_container2 {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }
  .gear_name {
    width: 20rem;
    font-size: 28px;
    text-align: center;
    line-height: 2.6rem;
  }
  .gear_word {
    width: 20.4rem;
    font-size: 15px;
    margin-top: 2rem;
    line-height: 25px;
  }
  #audiogear_img {
    width: 100%;
    height: 18.7rem;
    padding-left: 0;
    /* margin-bottom: 2rem; */
  }
}
</style>
