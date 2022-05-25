<template>
  <v-app>
    <!-- VIdeo player component -->
    <playerVue> </playerVue>
    <h2 class="slogan">WE DO WHAT WE LIKE</h2>
    <!-- Featured cards -->
    <v-card elevation="2" outlined class="feat-card feat-card-1">
      <div class="d-flex flex-no-wrap flex-wrapper">
        <div class="card-info">
          <v-card-title class="featTitle -md font-weight-bold"
            >{{ $t('featTitle1') }}
          </v-card-title>
          <v-card-actions>
            <nuxt-link :to="localePath('/releases')">
              <v-btn class="mb-7" rounded x-large tile elevation="10">
                {{ $t('featAction') }}
              </v-btn>
            </nuxt-link>
          </v-card-actions>
        </div>
        <div class="carousel-wrapper">
          <v-carousel
            cycle
            hide-delimiter-background
            show-arrows-on-hover
            class="box1"
            height="100%"
          >
            <!-- Cycle through releases  -->
            <nuxt-link
              v-for="product in releases"
              :key="product.id"
              :to="localePath('/products/' + product.name)"
            >
              <v-carousel-item
                :src="product.img2"
                reverse-transition="fade-transition"
                transition="fade-transition"
                style="cursor: pointer;"
              ></v-carousel-item
            ></nuxt-link>
          </v-carousel>
        </div>
      </div>
    </v-card>
    <v-card elevation="2" outlined class="feat-card feat-card-2">
      <div class="d-flex flex-no-wrap flex-wrapper">
        <div class="carousel-wrapper">
          <v-carousel
            cycle
            hide-delimiter-background
            show-arrows-on-hover
            height="100%"
            class="box2"
          >
            <!-- Cycle through offers  -->
            <nuxt-link
              v-for="product in offers"
              :key="product.id"
              :to="localePath('/products/' + product.name)"
            >
              <v-carousel-item
                :src="product.img1"
                reverse-transition="fade-transition"
                transition="fade-transition"
                style="cursor: pointer;"
              ></v-carousel-item>
            </nuxt-link>
          </v-carousel>
        </div>
        <div class="card-info">
          <v-card-title class="featTitle font-weight-bold color">
            {{ $t('featTitle2') }}
          </v-card-title>
          <nuxt-link :to="localePath('/offers')">
            <v-btn class="mb-7" rounded x-large tile elevation="10">
              {{ $t('featAction') }}
            </v-btn>
          </nuxt-link>
        </div>
      </div>
    </v-card>
  </v-app>
</template>

<script>
import PlayerVue from '~/components/player/player.vue'
export default {
  path: '/',
  name: 'HomePage',
  components: { PlayerVue },
  data() {
    return {
      releases: [],
      offers: [],
    }
  },
  // fetch offers and releases from api
  async fetch() {
    const releases = await this.$axios.$get('api/releases')
    this.releases = releases

    const offers = await this.$axios.$get('api/offers')
    this.offers = offers
  },
}
</script>

<style lang="scss"  src="../assets/css/index.scss">
</style>
