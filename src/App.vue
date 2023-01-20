<style src="./assets/styles/index.css"></style>
<template>
  <headerTop />
  <Muscles />
  <foooter />
</template>

<script>
import headerTop from "./assets/components/header/header.vue";
import Muscles from "./assets/components/Muscles/muscles.vue";
import foooter from "./assets/components/footer/footer.vue";

export default {
  components: {
    foooter,
    headerTop,
    Muscles,
  },
  name: "App",
  data() {
    return {};
  },
};
</script>
