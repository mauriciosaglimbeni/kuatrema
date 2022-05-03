<template>
  <v-app>
    <v-app-bar 
      class="navbar"
      shrink-on-scroll
      elevation="6"
      height="110px"
      fixed
      >
      <v-layout  class="text-headline" >
        <v-flex  mt-7 class="text-center cat "> CAT</v-flex>
        <v-flex  mt-7 class="text-center cat"> CAT</v-flex>
        <v-flex  mt-7 class="text-center cat"> CAT</v-flex>
        <nuxt-link to="/" > 
            <v-img
            :lazy-src="logo"
            :src="logo"
            max-width="100px"
            max-height="100px"
            style="background-color: #68FFD1;border-radius:100%"
            class="logo"
            ></v-img>
          </nuxt-link>
          <v-flex mt-7 class="text-center cat"> CAT</v-flex>
          <v-flex mt-7 class="text-center cat"> cat</v-flex>
          <v-flex mt-7 class="text-center cat"> cat</v-flex>
      </v-layout>
    </v-app-bar>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      title: 'KUATREMA',
      logo: require('../assets/logo.png'),
    }
  },

}
</script>
<style>
.navbar{
  background: rgb(2,0,36);
  background: radial-gradient(circle, rgba(104,255,209,1) 15%, rgba(5,204,212,1) 99%);

}
  .cat{
    transition: transform 0.2s ;
  }
  .cat:hover{
    color: gray;
    cursor: pointer;
    transform: scale(1.1,1.1);
  }
  .logo{
    transition: transform 0.5s ;
  }
  .logo:hover{
    opacity: 0.95;
    transform: scale(1.2,1.2);
  }
</style>