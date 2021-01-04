<template>
  <header-navigation></header-navigation>
  <router-view></router-view>
</template>

<script>
import HeaderNavigation from "./components/HeaderNavigation.vue";

export default {
  components: {
    HeaderNavigation,
  },
};
</script>
