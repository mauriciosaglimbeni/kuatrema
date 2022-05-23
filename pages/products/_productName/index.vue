<template>
  <div>
    Hola
    {{ product }}
  </div>
</template>

<script>
export default {
  path: '/',
  name: 'ProductPage',
  data() {
    return {
      product: [],
    }
  },
  // fetch data from api
  async fetch() {
    const data = await this.$axios.$get('api/products/' + this.productName)
    this.product = data
  },
}
</script>

<style>
</style>