<template>
  <div class="container_header">
    <the-header></the-header>
  </div>
  <router-view></router-view>
  <div class="container_footer">
    <the-footer></the-footer>
  </div>
</template>
<script>
import TheHeader from "./components/Reuseable/TheHeader.vue";
import TheFooter from "./components/Reuseable/TheFooter.vue";
// import headphonemarkII from "./components/Home/pics/headphonemarkII.png";
import headphonemarkIIUpgrade from "./components/Home/pics/headphonemarkII_upgrade.png";
import headphonemarkI from "./components/Home/pics/headphonemarkI.png";
import headphoneXX59 from "./components/Home/pics/headphoneXX59.png";
import ZX9SpeakerUpgrade from "./components/Home/pics/ZX9_Speaker_upgrade.png";
import ZX7SpeakerUpgrade from "./components/Home/pics/ZX7_Speaker_upgrade.png";
import YX1EarphoneUpgrade from "./components/Home/pics/YX1_Earphone_upgrade.png";
import audioGear from "./components/Home/pics/audio_gear.jpg";
import HD11 from "./components/Home/pics/HD11.png";
import HD12 from "./components/Home/pics/HD12.png";
import HD21 from "./components/Home/pics/HD21.png";
import HD22 from "./components/Home/pics/HD22.png";
import HD23 from "./components/Home/pics/HD23.png";
import HD31 from "./components/Home/pics/HD31.png";
import HD32 from "./components/Home/pics/HD32.png";
import HD33 from "./components/Home/pics/HD33.png";
import SD11 from "./components/Home/pics/SD11.png";
import SD12 from "./components/Home/pics/SD12.png";
import SD13 from "./components/Home/pics/SD13.png";
import SD21 from "./components/Home/pics/SD21.png";
import SD22 from "./components/Home/pics/SD22.png";
import SD23 from "./components/Home/pics/SD23.png";
import EP11 from "./components/Home/pics/EP11.png";
import EP12 from "./components/Home/pics/EP12.png";
import EP13 from "./components/Home/pics/EP13.png";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      products: [
        {
          name: "XX99 MARK II HEADPHONES",
          alias: "XX99 MK II",
          image: headphonemarkIIUpgrade,
          new: true,
          description:
            "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
          price: 2999,
          perProduct: 1,
          id: "XX99MarkII",
          type: "headphones",
          features: [
            "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.",
            "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
          ],
          in_box: [
            {
              quantity: 1,
              title: "Headphone Unit",
            },
            {
              quantity: 2,
              title: "Replacement Earcups",
            },
            {
              quantity: 1,
              title: "User Manual",
            },
            {
              quantity: 1,
              title: "3.5mm 5m Audio Cable",
            },
            {
              quantity: 1,
              title: "Travel Bag",
            },
          ],
          live_image: [audioGear, HD11, HD12],
          may_also_like: [
            {
              pName: "XX99 MARK I",
              pPics: headphonemarkI,
            },
            {
              pName: "XX59",
              pPics: headphoneXX59,
            },
            {
              pName: "ZX9 SPEAKER",
              pPics: ZX9SpeakerUpgrade,
            },
          ],
        },
        {
          name: "XX99 MARK I HEADPHONES",
          alias: "XX99 MK I",
          image: headphonemarkI,
          description:
            "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
          price: 1750,
          perProduct: 1,
          id: "XX99MarkI",
          type: "headphones",
          features: [
            " As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
            "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
          ],
          in_box: [
            {
              quantity: 1,
              title: "Headphone Unit",
            },
            {
              quantity: 2,
              title: "Replacement Earcups",
            },
            {
              quantity: 1,
              title: "User Manual",
            },
            {
              quantity: 1,
              title: "3.5mm 5m Audio Cable",
            },
          ],
          live_image: [HD21, HD22, HD23],
          may_also_like: [
            {
              pName: "XX99 MARK II",
              pPics: headphonemarkIIUpgrade,
            },
            {
              pName: "XX59",
              pPics: headphoneXX59,
            },
            {
              pName: "ZX9 SPEAKER",
              pPics: ZX9SpeakerUpgrade,
            },
          ],
        },
        {
          name: "XX59 HEADPHONES",
          alias: "XX59",
          image: headphoneXX59,
          description:
            "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
          price: 899,
          perProduct: 1,
          id: "XX59",
          type: "headphones",
          features: [
            "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
            " More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
          ],
          in_box: [
            {
              quantity: 1,
              title: "Headphone Unit",
            },
            {
              quantity: 2,
              title: "Replacement Earcups",
            },
            {
              quantity: 1,
              title: "User Manual",
            },
            {
              quantity: 1,
              title: "3.5mm 5m Audio Cable",
            },
          ],
          live_image: [HD31, HD32, HD33],
          may_also_like: [
            {
              pName: "XX99 MARK II",
              pPics: headphonemarkIIUpgrade,
            },
            {
              pName: "XX99 MARK I",
              pPics: headphonemarkI,
            },
            {
              pName: "ZX9 SPEAKER",
              pPics: ZX9SpeakerUpgrade,
            },
          ],
        },
        {
          name: "ZX9 SPEAKER",
          alias: "ZX9",
          image: ZX9SpeakerUpgrade,
          new: true,
          description:
            "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
          price: 4500,
          perProduct: 1,
          id: "ZX9",
          type: "speakers",
          features: [
            "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
            "Discover clear, more natural sounding highs than the competition with ZX9's signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You'll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
          ],
          in_box: [
            {
              quantity: 2,
              title: "Speaker Unit",
            },
            {
              quantity: 2,
              title: "Speaker Cloth Panel",
            },
            {
              quantity: 1,
              title: "User Manual",
            },
            {
              quantity: 1,
              title: "3.5mm 10m Audio Cable",
            },
            {
              quantity: 1,
              title: "10m Optical Cable",
            },
          ],
          live_image: [SD11, SD12, SD13],
          may_also_like: [
            {
              pName: "ZX7 SPEAKER",
              pPics: ZX7SpeakerUpgrade,
            },
            {
              pName: "XX99 MARK I",
              pPics: headphonemarkI,
            },
            {
              pName: "XX59",
              pPics: headphoneXX59,
            },
          ],
        },
        {
          name: "ZX7 SPEAKER",
          alias: "ZX7",
          image: ZX7SpeakerUpgrade,
          description:
            "Stream high quality sound wirelessly with minimal to no loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
          price: 3500,
          perProduct: 1,
          id: "ZX7",
          type: "speakers",
          features: [
            "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
            "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
          ],
          in_box: [
            {
              quantity: 2,
              title: "Speaker Unit",
            },
            {
              quantity: 2,
              title: "Speaker Cloth Panel",
            },
            {
              quantity: 1,
              title: "User Manual",
            },
            {
              quantity: 1,
              title: "3.5mm 7.5m Audio Cable",
            },
            {
              quantity: 1,
              title: "7.5m Optical Cable",
            },
          ],
          live_image: [SD21, SD22, SD23],
          may_also_like: [
            {
              pName: "ZX9 SPEAKER",
              pPics: ZX9SpeakerUpgrade,
            },
            {
              pName: "XX99 MARK I",
              pPics: headphonemarkI,
            },
            {
              pName: "XX59",
              pPics: headphoneXX59,
            },
          ],
        },
        {
          name: "YX1 WIRELESS EARPHONES",
          alias: "YX1",
          image: YX1EarphoneUpgrade,
          new: true,
          description:
            "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
          price: 599,
          perProduct: 1,
          id: "YX1",
          type: "earphones",
          features: [
            "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
            "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
          ],
          in_box: [
            {
              quantity: 2,
              title: "Earphone Unit",
            },
            {
              quantity: 6,
              title: "Multi-size Earplugs",
            },
            {
              quantity: 1,
              title: "User Manual",
            },
            {
              quantity: 1,
              title: "USB-C Charging Cable",
            },
            {
              quantity: 1,
              title: "Travel Pouch",
            },
          ],
          live_image: [EP11, EP12, EP13],
          may_also_like: [
            {
              pName: "XX99 MARK I",
              pPics: headphonemarkI,
            },
            {
              pName: "XX59",
              pPics: headphoneXX59,
            },
            {
              pName: "ZX9 SPEAKER",
              pPics: ZX9SpeakerUpgrade,
            },
          ],
        },
      ],
      cart: [],
      // total: 0,
      // numberOfProduct: 0,
    };
  },
  provide() {
    return {
      products: this.products,
      cart: this.cart,
    };
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Nerko+One&display=swap");

* {
  margin: 0;
  box-sizing: border-box;
  color: white;
  font-family: Manrope, sans-serif;
}
.container_header {
  width: 100%;
  color: #ffffff;
  background: #0e0e0e;
  padding: 20px 50px 50px 50px;
}
.container_footer {
  width: 100%;
  background-color: #0e0e0e;
  padding: 2rem 10rem 2rem 10rem;
  margin-top: 5rem;
  bottom: 0;
  left: 0;
  right: 0;
  color: #ffffff;
}
/* Tablets / iPad ----------- */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .container_footer {
    padding: 2rem 3rem;
  }
}

/* Mobile ----------- */
@media only screen and (max-width: 767px) {
  .container_footer {
    padding: 3rem 2rem;
  }
}
</style>
