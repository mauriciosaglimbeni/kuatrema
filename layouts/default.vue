<!-- This layout/default file is to establish a layout template that is shared across multiple pages, it will be used by all pages unless they have another layout internally established. -->
<template>
  <!-- v-app is necessary to properly utilise Vuetify -->
  <v-app>
    <!-- Header part of the page -->
    <v-app-bar
      app
      class="navbar"
      shrink-on-scroll
      elevation="6"
      height="110px"
      fixed
    >
      <v-layout class="text-headline justify-smAndDown-space-between">
        <!-- Drawer hamburger button for small devices -->
        <v-flex mt-3 class="hidden-md-and-up">
          <button
            class="hamburger"
            d-lg
            :class="{ active: openMenu }"
            @click="openMenu = !openMenu"
          >
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </button>
        </v-flex>
        <!-- Standard navbar -->
        <v-flex mt-5 class="text-center cat cat1 hidden-sm-and-down">
          CATEGORIA</v-flex
        >
        <v-flex mt-5 class="text-center cat cat1 hidden-sm-and-down">
          CATEGORIA</v-flex
        >
        <v-flex mt-5 class="text-center cat cat1 hidden-sm-and-down">
          CATEGORIA</v-flex
        >
        <nuxt-link to="/">
          <!-- logo -->
          <v-img
            :lazy-src="logo"
            :src="logo"
            max-width="100px"
            max-height="100px"
            style="background-color: #68ffd1; border-radius: 100%"
            class="logo"
          ></v-img>
        </nuxt-link>
        <v-flex mt-5 class="text-center cat cat2 hidden-sm-and-down">
          CATEGORIA</v-flex
        >
        <v-flex mt-5 class="text-center cat cat2 hidden-sm-and-down">
          CATEGORIA</v-flex
        >
        <v-flex mt-5 class="text-center cat cat2 hidden-sm-and-down">
          <font-awesome-icon
            icon="fa-solid fa-circle-user"
            font-size="1.25em"
          />
        </v-flex>
        <v-flex class="text-center hidden-md-and-up"></v-flex>
      </v-layout>
    </v-app-bar>
    <!-- Navigation drawer for small xs and s devices -->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item> Kuatrema </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item>
          <v-list-item-content> CATEGORIA </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content> CATEGORIA </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content> CATEGORIA </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content> CATEGORIA </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content> CATEGORIA </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- The contents of each page, they are generated outside of the layouts -->
    <v-main>
      <Nuxt></Nuxt>
    </v-main>
    <!-- Footer part of the page -->
    <v-footer app padless color="#0f0f0f" class="white--text text-center">
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
        <v-col cols="12">
          <v-btn icon dark>
            <font-awesome-icon
              icon="fa-brands fa-instagram"
              font-size="1.5em"
            />
          </v-btn>
          <v-btn icon dark>
            <font-awesome-icon icon="fa-brands fa-youtube" font-size="1.5em" />
          </v-btn>
          <v-btn icon dark>
            <font-awesome-icon icon="fa-brands fa-twitter" font-size="1.5em" />
          </v-btn>
        </v-col>
        <v-col cols="12">
          <v-divider></v-divider>
        </v-col>
        <v-col cols="12">
          <span>
            {{ new Date().getFullYear() }} —
            <strong>Kuatrema &trade; </strong></span
          >
        </v-col>
      </v-row>
      <!-- go to top button -->
      <v-btn
        v-show="fab"
        v-scroll="onScroll"
        fab
        dark
        fixed
        bottom
        right
        color="#68FFD1"
        @click="toTop"
      >
        <font-awesome-icon
          icon="fa-solid fa-arrow-up"
          color="white"
          font-size="2em"
        />
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      fab: false,
      // exporting the logo from assets folder
      title: 'KUATREMA',
      logo: require('../assets/logo.png'),
      // exporting the footer link names
      links: [
        'Inicio',
        'Productos',
        'Diseños',
        'Sobre nosotros',
        'Contáctanos',
      ],
      // hamburger menu value
      openMenu: false,
    }
  },

  methods: {
    // go to top methods
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop() {
      this.$vuetify.goTo(0)
    },
  },
}
</script>
<style>
/* navbar styles */
.navbar {
  background: rgb(2, 0, 36);
  background: radial-gradient(
    circle,
    rgba(104, 255, 209, 1) 15%,
    rgba(5, 204, 212, 1) 99%
  );
}
.cat {
  transition: transform 0.2s;
  font-size: 0.9em;
  padding-top: 0.25em;
  width: 5em;
  font-weight: 500;
}
.cat1 {
  justify-self: flex-start;
}
.cat2 {
  justify-self: flex-end;
}
.cat:hover {
  color: gray;
  cursor: pointer;
  transform: scale(1.1, 1.1);
}
.logo {
  transition: transform 0.5s;
  justify-self: center;
  margin-bottom: 8px;
}
.logo:hover {
  opacity: 0.95;
  transform: scale(1.2, 1.2);
}
/* Hamburger icon styles */
.hamburger {
  border: none;
  outline: none;
  cursor: pointer;
}
.hamburger .line {
  display: block;
  width: 30px;
  height: 3px;
  background-color: white;
  margin-block: 8px;
  border-radius: 4px;
  transition: transform 0.5s, opacity 0.25s;
}
.hamburger.active .line:nth-child(1) {
  transform: translateY(10px) rotate(45deg);
}
.hamburger.active .line:nth-child(2) {
  opacity: 0;
}
.hamburger.active .line:nth-child(3) {
  transform: translateY(-10px) rotate(-45deg);
}
/* footer styles */
</style>
