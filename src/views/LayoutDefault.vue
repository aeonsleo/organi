<template>
  <div class="layout-default">
    <header-view />
    <hero-section />
    <!-- <slot /> -->
  </div>
</template>

<script>
import HeaderView from "./HeaderView";
import HeroSection from "./HeroSection";

export default {
  components: {
    HeaderView,
    HeroSection,
  },
};
</script>

<style></style>
