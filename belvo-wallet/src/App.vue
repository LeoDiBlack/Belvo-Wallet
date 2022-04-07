<template>
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
