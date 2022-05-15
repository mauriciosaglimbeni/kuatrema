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

<style lang="scss" scoped>
.slogan {
  letter-spacing: 0.5rem;
  text-align: center;
  background-image: linear-gradient(
    -225deg,
    #0ecec5 0%,
    #3b7cd6 29%,
    #5911a7 67%,
    #cf1d8b 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  background-clip: text;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 5s linear infinite;
  display: inline-block;
}
@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
.feat-card {
  margin: 1.5em 0 1.5em 0;
  padding: 2em;
  align-content: center;
  justify-content: center;
}
.featTitle {
  color: white;
  background-color: rgba(0, 0, 0, 0.112);
  letter-spacing: 2px;
  margin-bottom: 2em;
}
.feat-card-1 {
  background: url('https://horciong.sirv.com/bannerbg1.jpg');
  background-size: cover;
  background-position: center;
}
.feat-card-2 {
  background: url('https://horciong.sirv.com/bannerbg2.jpg');
  background-size: cover;
  background-position: center;
}
.featAvatar {
  height: 20em;
  width: 20em;
  background-color: blue;
}
</style>
