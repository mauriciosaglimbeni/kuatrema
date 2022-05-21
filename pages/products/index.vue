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
    <v-container v-else fluid>
      <v-row :key="x" d-flex justify="center" :v-for="(product,x) in products">
        
        <!-- <ProductCard
          :product-title="product.productName"
          :product-price="product.price"
          :product-img1="product.img1"
          :product-img2="product.img2"
        ></ProductCard> -->
         {{products[0].productName}}<br />
      </v-row>
    </v-container>
  </main>
</template>

<script>
import ProductTabs from '~/components/ProductTabs.vue'
// import ProductCard from '~/components/ProductCard.vue'
export default {
  path: '/',
  name: 'ProductsPage',
  components: { ProductTabs },
  // variables
  data() {
    return {
      products: [],
      productsLoading: false,
    }
  },
  // call the get Poducts method
  created() {
    this.getAllProducts()
  },
  // get products from api and save into products array
  methods: {
    async getAllProducts() {
      this.productsLoading = true
      try {
        const data = await this.$axios.$get('api/products')
        this.products = data
        this.productsLoading = false
      } catch (err) {
        this.productsLoading = false
        alert('Error getting data')
      }
    },
  },
}
</script>

<style scoped lang="scss" src="../../assets/css/products.scss">
</style>