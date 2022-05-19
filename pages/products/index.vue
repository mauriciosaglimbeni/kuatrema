<template>
  <v-app>
    <ProductTabs></ProductTabs>
    hi
  </v-app>
</template>

<script>
import ProductTabs from '~/components/ProductTabs.vue'
export default {
  path: '/',
  name: 'ProductsPage',
  components: { ProductTabs },
}
</script>

<style>
</style>