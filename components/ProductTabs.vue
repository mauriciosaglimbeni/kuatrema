<template>
  <v-container>
    <v-row>
      <v-col v-for="n in 6" :key="n" cols="2.2">
        <nuxt-link
          :to="localePath(routes[n - 1])"
          class="button"
          exact-active-class="active"
        >
          {{ $t(routeNames[n - 1]) }}
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        '/sweats',
        '/tees',
        '/accesories',
        '/products',
        '/releases',
        '/offers',
      ],
      routeNames: [
        'header1',
        'header2',
        'accesories',
        'header3',
        'releases',
        'offers',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  text-align: center;
  font-size: 14px;
  color: white;
  background: rgb(32, 32, 32);
  &:hover {
    background: lightseagreen;
  }
}
.active {
  color: white;
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 0) 0%,
    rgba(185, 59, 152, 1) 0%,
    rgba(166, 120, 236, 1) 53%,
    rgba(5, 204, 212, 1) 100%
  );
  pointer-events: none;
}
</style>