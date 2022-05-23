<template>
  <div class="lang-dropdown">

     <select v-model="$i18n.locale" @change="spain = !spain">
        <option
          v-for="locale in $i18n.locales"
          :key="locale.code"
          :value="locale.code"
        >
          {{ locale.name }}
        </option> 
    </select>

    <i v-if="!spain" class="sl-flag flag-usa"></i>
    <i v-else class="sl-flag flag-spain"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spain: true,
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales
    },
  },
}
</script>
<style scoped>
div {
  margin-left: 5px;
  color: white;
  position: relative;
  float: left;
}
select {
  color: white;
  padding: 0 5px 0 5px;
}
option {
  background: black;
}
.sl-flag {
  display: inline-block;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
  width: 15px;
  height: 15px;
  background: #aaa;
  border-radius: 50%;
  position: relative;
  top: 2px;
  overflow: hidden;
}
.flag-usa {
  background-size: cover;
  background-position: center center;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTM0A1t6AAABhUlEQVQ4T2Ows82PjGixsc4LD2tysC/09Kjw8622tyuICG8u0w/cpGSCBzF4e1VmZkzw9anOzOj38a4KCW4IC22ECHYk1l9tn4gHMeTlTnZxLikvm+XiUpKW2hvgX+vnV5OVOQEoOGfOtv94AYOzU3Fd7XxHh6Lq6rlurqUx0W0J8Z1AnbW18yotonaYuOJBDBXls4A+bGpaBCTz86YEBtQCvVBSPAPIbY0oP1/aiAcxABU1Ny+2tclvbFjo5FgUF9uenNwNDLnmpkWEnV1TPRcY1O1tS4H6i4umA/0MDK2K8tlAwRqHpP1uoXgQKKraWpcClTY3LQZaCLQ5NaUX5OaWJY3++SeTC/AgBmA4AXUClUJs9ver8fKsAAYEUJCws4G21dXNB1oFdD/Qz8DQTk4C+bm2dn6DZ9bRiDQ8iAEYt8CoBpK5YBIYw0AEEZwSXX4oMB4PYoC6gCzAcDqrjGzEsMfen2xEmbMv1rSTjRi26dqRjShz9o2+6WQjBrSShQSkZAIADvW/HLrLY6cAAAAASUVORK5CYII=');
}
.flag-spain {
  background-size: cover;
  background-position: center center;
  background-image: url('https://countryflagsapi.com/png/es');
}
</style>
