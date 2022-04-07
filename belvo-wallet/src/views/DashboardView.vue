<template>
  <div class="flex items-center justify-center">
    <div class="container max-w-6xl px-5 mx-auto my-28">
      <div class="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        <ContactList />
        <CardInfo />
      </div>
    </div>
  </div>
</template>

<script>
  import ContactList from "@/components/ContactList.vue";
  import CardInfo from "@/components/CardInfo.vue";
  export default {
    name: "LoginView",
    components: {
      ContactList,
      CardInfo,
    },
    data() {
      return {};
    },
    methods: {},
    created() {
      this.$http
        .get("/contacts", {
          headers: {
            Authorization: "Bearer ".concat(
              this.$store.getters.accessTokenApi.access_token
            ),
          },
        })
        .then((response) => {
          console.log("entering into contacts", response.data);
          this.$store.dispatch("setContacts", response.data);
        })
        .catch(function (error) {
          console.error(error.response);
        });

      this.$http
        .get("/wallet", {
          headers: {
            Authorization: "Bearer ".concat(
              this.$store.getters.accessTokenApi.access_token
            ),
          },
        })
        .then((response) => {
          console.log("entering into wallet", response.data);
          this.$store.dispatch("setWallet", response.data);
        })
        .catch(function (error) {
          console.error(error.response);
        });
    },
  };
</script>
