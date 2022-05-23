<template>
  <client-only>
    <div class="wrapper">
      <a
        class="overlay"
        href="https://www.youtube.com/watch?v=2CKyOQxg9sI"
        target="_blank"
        ><span>{{ $t('player') }}</span></a
      >
      <video
        autoplay
        muted
        loop
        poster="https://kuatrema.sirv.com/KuatremaAdd1.mp4?thumbnail=1920"
      >
        <source
          src="https://kuatrema.sirv.com/KuatremaAdd1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  </client-only>
</template>

<script>
export default {
  name: 'PlayerVue',
  // components: { VueVideoSection },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-bottom: 1.5em;
  height: auto;
  width: 100%;
  height: min-content;
  @media (min-width: 960px) {
    height: 80vh;
  }
}
video {
  object-fit: fill;
  width: 100%;
  height: 100%;
  z-index: 0;
  @media (min-width: 960px) {
    height: 100%;
    object-fit: fill;
  }
}

.overlay {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  margin-top: 35%;
  left: 0;
  right: 0;
  text-align: center;
  font-weight: bold;
  z-index: 2;
  text-decoration: none;
  & > span {
    border: 2px solid turquoise;
    padding: 10px;
    color: white;
    z-index: 5;
    cursor: pointer;
    transition: padding 0.5s;
    &:hover {
      padding: 20px 30px 20px 30px;
      background: radial-gradient(
        circle,
        rgba(2, 0, 36, 0) 0%,
        rgba(255, 255, 255, 0) 0%,
        rgba(5, 204, 212, 1) 100%
      );
      border: 2px solid turquoise;
      text-shadow: 1px 1px rgba(255, 255, 255, 0.719);
    }
  }
}
</style>
