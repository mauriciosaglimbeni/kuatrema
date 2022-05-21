<template>
  <main>
    <ProductTabs></ProductTabs>
  </main>
</template>

<script>
import ProductTabs from '~/components/ProductTabs.vue'
export default {
  path: '../offers',
  name: 'OffersPage',
  components: { ProductTabs },
}
</script>

<style scoped lang="scss" src="../assets/css/products.scss">
</style>