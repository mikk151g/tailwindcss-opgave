<template>
  <section class="mt-12">
    <ul>
      <li
        v-for="resource in getResources"
        :key="resource.id"
        class="bg-white mb-6 p-5 rounded-lg shadow transform hover:scale-105 hover:shadow-md transition delay-150 duration-500"
      >
        <div class="flex justify-between">
          <h2 class="font-semibold text-lg mb-2">{{ resource.title }}</h2>
          <button class="btn-delete">x</button>
        </div>
        <p class="text-gray-500">{{ resource.description }}</p>
      </li>
    </ul>
    <router-link class="btn-dashed" to="/add-resource"
      >Add resource</router-link
    >
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getResources"]),
  },
};
</script>