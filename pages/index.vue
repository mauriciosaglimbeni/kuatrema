<template>
  <v-app>
    <!-- VIdeo player component -->
    <playerVue> </playerVue>
    <h2 class="slogan">WE DO WHAT WE LIKE</h2>
    <!-- Featured cards -->
    <v-card elevation="2" outlined class="feat-card feat-card-1">
      <div class="d-flex flex-no-wrap  flex-wrapper">
        <div class="card-info">
          <v-card-title class="featTitle -md font-weight-bold"
            >{{ $t('featTitle1') }}
          </v-card-title>
          <v-card-actions>
            <nuxt-link to="/offers">
              <v-btn
                class="mb-7"
                rounded
                x-large
                tile
                elevation="10"
              >
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
            class="featAvatar"
            height="100%"
          >
          </v-carousel>
        </div>
      </div>
    </v-card>
    <v-card elevation="2" outlined class="feat-card feat-card-2 ">
      <div class="d-flex flex-no-wrap flex-wrapper">
        <div class="carousel-wrapper">
          <v-carousel
            cycle
            hide-delimiter-background
            show-arrows-on-hover
            class="featAvatar"
            height="100%"
          >
          </v-carousel>
        </div>
        <div class="card-info">
          <v-card-title class=" featTitle font-weight-bold color">
            {{ $t('featTitle2') }}
          </v-card-title>
            <nuxt-link to="/">
              <v-btn
                class="mb-7"
                rounded
                x-large
                tile
                elevation="10"
              >
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
}
</script>

<style lang="scss"  src="../assets/css/index.scss">
</style>
