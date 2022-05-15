<template>
  <v-app>
    <!-- VIdeo player component -->
    <playerVue> </playerVue>
    <h2 class="slogan">WE DO WHAT WE LIKE</h2>
    <!-- Featured cards -->
    <v-card elevation="2" outlined class="feat-card feat-card-1">
      <div class="d-flex flex-no-wrap justify-space-around align-center">
        <div>
          <v-card-title class="featTitle text-h3 font-weight-bold"
            >{{ $t('featTitle1') }}
          </v-card-title>
          <v-card-actions>
            <v-btn
              class="mb-7"
              rounded
              x-large
              tile
              elevation="10"
              style="postion: relative; left: 28%"
            >
              {{ $t('featAction') }}
            </v-btn>
          </v-card-actions>
        </div>
        <v-carousel
          cycle
          hide-delimiter-background
          show-arrows-on-hover
          class="ma-3 featAvatar"
        >
        </v-carousel>
      </div>
    </v-card>
    <v-card elevation="2" outlined class="feat-card feat-card-2">
      <div class="d-flex flex-no-wrap justify-space-around align-center">
        <v-carousel
          cycle
          hide-delimiter-background
          show-arrows-on-hover
          class="ma-3 featAvatar"
        >
        </v-carousel>
        <div>
          <v-card-title class="text-h3 featTitle font-weight-bold color">
            {{ $t('featTitle2') }}
          </v-card-title>
          <v-card-actions>
            <v-btn
              class="mb-7 align-center"
              rounded
              x-large
              tile
              elevation="10"
              style="postion: relative; left: 25%; bottom: 15%"
            >
              {{ $t('featAction') }}
            </v-btn>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </v-app>
</template>

<script>
import PlayerVue from '../components/player/player.vue'
export default {
  path: '/',
  name: 'HomePage',
  components: { PlayerVue },
}
</script>

<style lang="scss" scoped src="../assets/css/index.scss"> </style>
