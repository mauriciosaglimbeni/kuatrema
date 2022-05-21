<template>
  <main>
    <ProductTabs></ProductTabs>
    <v-container fluid>
      <v-row d-flex justify="center">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import ProductTabs from '~/components/ProductTabs.vue'
import ProductCard from '~/components/ProductCard.vue'
export default {
  path: '/',
  name: 'ProductsPage',
  components: { ProductTabs, ProductCard },
}
</script>

<style scoped lang="scss">
  main{
      @media (max-width: 560 ){
        margin-top: 40px;
     }
  }
</style>