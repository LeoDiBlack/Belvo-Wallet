<template>
  <nav v-if="isUserLogged">
    <router-link to="/">Home</router-link> |
    <router-link to="/dashboard">Dashboard</router-link>
  </nav>
  <router-view />
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    name: "LoginView",
    components: {
      ...mapGetters(["isUserLogged"]),
    },
    methods: {},
  };
</script>
