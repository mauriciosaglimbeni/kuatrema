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
            @click="(drawer = !drawer)"
          >
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </button>
        </v-flex>
        <!-- Standard navbar -->
        <v-flex mt-5 class="text-center cat cat1 hidden-sm-and-down">
          <nuxt-link :to="localePath('/releases')">
            <p>{{ $t('releases') }}</p></nuxt-link
          >
        </v-flex>
        <v-flex mt-5 class="text-center cat cat1 hidden-sm-and-down">
          <nuxt-link :to="localePath('/offers')">
            <p>{{ $t('offers') }}</p></nuxt-link
          >
        </v-flex>
        <v-flex mt-5 class="text-center cat cat1 hidden-sm-and-down">
          <nuxt-link :to="localePath('products')">
            {{ $t('header3') }}
          </nuxt-link>
        </v-flex>
        <nuxt-link :to="localePath('/')">
          <!-- logo -->
          <v-img
            src="https://kuatrema.sirv.com/logo.png"
            max-width="100px"
            max-height="100px"
            style="background-color: #68ffd1; border-radius: 100%"
            class="logo"
          ></v-img>
        </nuxt-link>
        <v-flex mt-5 class="text-center cat cat2 hidden-sm-and-down">
          <nuxt-link :to="localePath('/artists')">
            {{ $t('header4') }}
          </nuxt-link>
        </v-flex>
        <v-flex mt-5 class="text-center cat cat2 hidden-sm-and-down">
          <nuxt-link :to="localePath('/cart')"> {{ $t('header5') }} </nuxt-link>
          <font-awesome-icon
            icon="fa-solid fa-shopping-bag"
            font-size="1.25em"
          />
        </v-flex>
        <v-flex mt-5 class="text-center cat cat2 hidden-sm-and-down">
          <nuxt-link :to="localePath('/profile')">
            {{ $t('header6') }}
          </nuxt-link>
          <font-awesome-icon
            icon="fa-solid fa-circle-user"
            font-size="1.25em"
          />
        </v-flex>
        <v-flex class="text-center hidden-md-and-up"></v-flex>
      </v-layout>
    </v-app-bar>

    <!-- Navigation drawer for  xs and s devices -->
    <v-navigation-drawer
      v-model="drawer"
      app
      color="#0f0f0f"
      dark
      temporary
      class="drawer"
      @transitionend="openMenu = drawer"
    >
      <v-list-item class="drawer-title"> K U A T R E M A </v-list-item>

      <v-list dense>
        <v-list-item class="drawer-item">
          <nuxt-link :to="localePath('/products')">
            <v-list-item-content>
              {{ $t('header3') }}
            </v-list-item-content>
          </nuxt-link>
        </v-list-item>
        <v-list-item class="drawer-item">
          <nuxt-link :to="localePath('/releases')"
            ><v-list-item-content>
              {{ $t('releases') }}
            </v-list-item-content>
          </nuxt-link>
        </v-list-item>
        <v-list-item class="drawer-item">
          <nuxt-link :to="localePath('/offers')"
            ><v-list-item-content>
              {{ $t('offers') }}
            </v-list-item-content>
          </nuxt-link>
        </v-list-item>
        <v-list-item class="drawer-item">
          <nuxt-link :to="localePath('/artists')"
            ><v-list-item-content>
              {{ $t('header4') }}
            </v-list-item-content></nuxt-link
          >
        </v-list-item>

        <v-list-item class="drawer-item">
          <nuxt-link :to="localePath('/cart')"
            ><v-list-item-content>
              {{ $t('header5') }}
            </v-list-item-content></nuxt-link
          >
          <v-list-item-avatar>
            <font-awesome-icon icon="fa-solid fa-bag-shopping" />
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item class="drawer-item">
          <nuxt-link :to="localePath('/profile')"
            ><v-list-item-content>
              {{ $t('header6') }}
            </v-list-item-content></nuxt-link
          >
          <v-list-item-avatar>
            <font-awesome-icon icon="fa-solid fa-circle-user" />
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- The contents of each page, they are generated outside of the layouts -->
    <v-main>
      <Nuxt></Nuxt>
    </v-main>

    <!-- Footer part of the page -->
    <v-footer
      app
      padless
      absolute
      color="#0f0f0f"
      class="white--text text-center footer"
    >
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="(link, index) in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          <nuxt-link :to="localePath(routes[index])">
            {{ $t(link) }}
          </nuxt-link>
        </v-btn>
        <v-col cols="12">
          <v-btn icon dark>
            <a
              href="https://www.instagram.com/kuatrema"
              style="color=white; text-decoration=none"
            >
              <font-awesome-icon
                icon="fa-brands fa-instagram"
                font-size="1.5em"
              />
            </a>
          </v-btn>
          <v-btn icon dark>
            <a
              href="https://www.youtube.com/channel/UCid-Uf7LzHHaOxx-5x3TdZw"
              style="color=white; text-decoration=none"
            >
              <font-awesome-icon icon="fa-brands fa-youtube" font-size="1.5em"
            /></a>
          </v-btn>
          <v-btn icon dark>
            <font-awesome-icon icon="fa-brands fa-twitter" font-size="1.5em" />
          </v-btn>
        </v-col>
        <v-col cols="12">
          <v-divider></v-divider>
        </v-col>
        <v-col cols="12">
          <languageInput></languageInput>
          <span class="right-side">
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
          color="#0f0f0f"
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
      //  scroll value
      fab: false,
      title: 'KUATREMA',
      // exporting the footer link names and routes
      links: ['footer1', 'footer2', 'footer3', 'footer4', 'footer5'],
      routes: ['/', '/products', '/artists', '/about', '/contact'],
      // hamburger menu value
      openMenu: false,
      // drawer value
      drawer: false,
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
<style lang="scss" src="../assets/css/default.scss"></style>