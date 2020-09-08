<template>
  <layout-default>
    <div class="home">
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </layout-default>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import LayoutDefault from "./LayoutDefault";

export default {
  name: "Home",
  components: {
    HelloWorld,
    LayoutDefault,
  },
};
</script>
