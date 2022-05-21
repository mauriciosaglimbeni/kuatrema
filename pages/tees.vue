<template>
  <main>
    <ProductTabs></ProductTabs>
  </main>
</template>

<script>
import ProductTabs from '~/components/ProductTabs.vue'
export default {
  path: '../tees',
  name: 'TeesPage',
  components: { ProductTabs },
}
</script>

<style scoped lang="scss" src="../assets/css/products.scss">
</style>