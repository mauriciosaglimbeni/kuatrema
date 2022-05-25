<template>
  <main>
    <ProductTabs></ProductTabs>
    <div
      v-if="productsLoading"
      class="spinner-border"
      style="width: 3rem; height: 3rem"
      role="status"
    >
      <span class="sr-only">Loading...</span>
    </div>
    <v-container fluid>
      <v-row justify="center">
        <ProductCard
          v-for="product in products"
          :key="product._id"
          d-flex
          :product-id="product._id"
          :product-name="product.productName"
          :product-price="product.price"
          :is-offer="product.isOffer"
          :product-img1="product.img1"
          :product-img2="product.img2"
        ></ProductCard>
      </v-row>
    </v-container>
  </main>
</template>
<script>
import ProductTabs from '~/components/ProductTabs.vue'
import ProductCard from '~/components/ProductCard.vue'
export default {
  path: '../tees',
  name: 'TeesPage',
  components: { ProductTabs, ProductCard },
  // variables
  data() {
    return {
      products: [],
      productsLoading: false,
    }
  },
  // fetch data from api
  async fetch() {
    this.productsLoading = true
    const data = await this.$axios.$get('api/tees')
    this.products = data
    this.productsLoading = false
  },
}
</script>

<style scoped lang="scss" src="../assets/css/products.scss">
</style>
