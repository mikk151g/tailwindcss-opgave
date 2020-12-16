<template>
  <header-navigation></header-navigation>
  <resource-list></resource-list>
</template>

<script>
import HeaderNavigation from "./components/HeaderNavigation.vue";
import ResourceList from "./components/ResourceList.vue";

export default {
  components: {
    HeaderNavigation,
    ResourceList,
  },
};
</script>
