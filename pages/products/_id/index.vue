<template>
  <section class="main-container">
    <div class="image-showcase">
      <div
        :style="{ backgroundImage: 'url(' + product.img1 + ')' }"
        style="background-size: cover; height: auto"
      ></div>
      <div
        :style="{ backgroundImage: 'url(' + product.img2 + ')' }"
        style="background-size: cover; height: auto"
      ></div>
      <div
        :style="{ backgroundImage: 'url(' + product.img3 + ')' }"
        style="background-size: cover; height: auto"
      ></div>
      <div
        :style="{ backgroundImage: 'url(' + product.img4 + ')' }"
        style="background-size: cover; height: auto"
      ></div>
    </div>
    <div class="information">
      <!-- go to products link -->
      <nuxt-link :to="localePath('/products')" style="font-size:14px; color:gray; cursor: pointer">{{$t('return')}} </nuxt-link>
      <h1 class="product-name">{{ product.productName }}</h1>
      <h2 class="artist-name">by {{ product.artist }}</h2>
      <!-- Checks if the product is in offer and prints someting -->
      <h2 v-if="product.isOffer">
        <span class="old-price"> {{ product.price }} $</span>
        <span class="offer-price">{{ product.offerPrice }} $ </span>
      </h2>
      <h2 v-else class="price">{{ product.price }} $</h2>
      <!-- buttons for sizes -->
      <h2 v-if="!product.isClothing" class="artist-name" >{{$t('qtyChoose')}} :</h2>
      <h2 v-else class="artist-name" >{{$t('sizeChoose')}} :</h2>

      <div  class="button-holder">
        <button v-for="(size, index) in product.sizes" :key="index" class="size-button">{{ size }}</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  path: '/',
  name: 'ProductPage',
  // fetch data from api

async asyncData(context){
    const {data} = await context.$axios.get('/api/products/' + context.route.params.id)
    return {
      product : data
    }
  },
  data() {
    return {
      
    }
  },
}
</script>

<style lang="scss" scoped src="../../../assets/css/product.scss">
</style>