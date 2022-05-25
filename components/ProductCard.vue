<template>
  <v-hover v-slot="{ hover }">
    <v-card elevation="0" class="card">
      <nuxt-link :to="localePath('/products/' + productId)">
        <v-img
          v-if="hovered"
          contain
          class="white--text responsive-img"
          :src="productImg2"
        />
        <v-img
          v-else
          contain
          class="white--text responsive-img"
          :src="productImg1"
        />

        <div class="card-info-1">
          <span class="boldish"> {{ productName }} </span>
          <br />
    <!-- Shows a different span if product is in offer  -->
          <span v-if="isOffer" >
            <span style="text-decoration: line-through; color: gray"> {{productPrice}} $</span>
            {{ productPrice2 }} $
            </span>
          <span v-else class="">{{ productPrice }} $</span>
        </div>
        <v-fade-transition>
          <v-overlay
            v-if="hover"
            class="overlay"
            absolute
            opacity="0"
            @mouseover="hovered = true"
            @mouseout="hovered = false"
          >
            <!-- <div class="button-holder">
              <button class="size-button">S</button>
              <button class="size-button">M</button>
              <button class="size-button">L</button>
              <button class="size-button">XL</button>
              <button class="size-button">XXL</button>
            </div>
            <div class="button-holder">
              <button class="add-button">{{ $t('addToCart') }}</button>
            </div> -->
          </v-overlay>
        </v-fade-transition>
      </nuxt-link>
    </v-card>
  </v-hover>
</template>

<script>
export default {

  // eslint-disable-next-line vue/require-prop-types
  props: ['productId','productName', 'productPrice', 'productImg1', 'productImg2','isOffer', 'productPrice2'],
  data() {
    return {
      hovered: false,
    }
  },
}
</script>

<style lang="scss" scoped src="../assets/css/productCard.scss">
