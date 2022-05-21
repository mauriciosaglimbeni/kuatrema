<template>
  <v-hover v-slot="{ hover }">
    <v-card elevation="0" class="card">
      <v-img
        contain
        class="white--text responsive-img"
        :src="productImg1"

      >
      </v-img>
      <div class="card-info-1">
        <span class="boldish"> {{ productName }} </span>
        <br />
        {{ productPrice }}
      </div>
      <v-fade-transition>
        <v-overlay
          v-if="hover"
          class="overlay"
          absolute
          opacity="0"

        >
          <div class="button-holder">
            <button class="size-button">S</button>
            <button class="size-button">M</button>
            <button class="size-button">L</button>
            <button class="size-button">XL</button>
            <button class="size-button">XXL</button>
          </div>
          <div class="button-holder">
            <button class="add-button">{{ $t('addToCart') }}</button>
          </div>
        </v-overlay>
      </v-fade-transition>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  // async asyncData(context) {
  //   const { data } = await context.$axios.get('/api/products')
  //   return{
  //     products: data,
  //     }
  // }, 
          //  @mouseover="img1 = img2"
          // @mouseout="img1 = img2"
  props: {
    productTitle: String,
    productPrice: Number,
    productImg1: String,
    productImg2: String
  },
  data() {
  //   return {
  //   //   currentImg:
  //   //     'https://horciong.sirv.com/products/TEARS/ktrm-tears-mock-back.png',
  //   //   myImage:
  //   //     'https://horciong.sirv.com/products/TEARS/ktrm-tears-mock-back.png',
  //   //   otherImage:
  //   //     'https://horciong.sirv.com/products/TEARS/ktrm-tears-photo.jpg',
  //   // }
  // },
}
}
</script>

<style lang="scss" scoped>
.responsive {
  max-width: auto;
  height: 100%;
}
.card {
  max-width: 25%;
  height: auto;
  position: relative;
  @media (max-width: 980px) {
    max-width: 33%;
  }
}
.card-info-1 {
  font-size: 1.1rem;
  text-align: center;
}
.boldish {
  font-weight: 500;
}
.overlay {
  height: 140%;
  display: flex;
  justify-content: center;
}
.button-holder {
  display: flex;
  gap: 5px;
  justify-content: center;
}
button {
  width: fit-content;
  height: 25px;
  padding: 2px 5px 2px 5px;
  text-align: center;
  display: flex;
  align-content: center;
  font-size: 14px;
}
.size-button {
  background-color: rgb(255, 251, 251);
  color: black;
  &:hover,
  &:focus {
    background-color: rgb(0, 0, 0);
    color: white;
  }
}
.add-button {
  margin-top: 15px;
  background-color: rgb(32, 32, 32);
  &:hover {
    background-color: rgb(70, 70, 70);
  }
}
</style>