<template>
  <section class="flex flex-col md:flex-row h-screen items-center">
    <div
      class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen"
    >
      <img
        src="https://source.unsplash.com/random"
        alt=""
        class="w-full h-full object-cover"
      />
    </div>

    <div
      class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center"
    >
      <div class="w-full h-100">
        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
          Log in to your account
        </h1>

        <form class="mt-6">
          <div>
            <label class="block text-gray-700">Username</label>
            <input
              v-model="username"
              name=""
              id=""
              placeholder="Enter Username"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              autofocus
              autocomplete
              required
            />
          </div>

          <div class="mt-4">
            <label class="block text-gray-700">Password</label>
            <input
              v-model="password"
              type="password"
              name=""
              id=""
              placeholder="Enter Password"
              minlength="6"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              required
            />
          </div>

          <div class="text-right mt-2">
            <a
              href="#"
              class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
              >Forgot Password?</a
            >
          </div>

          <button
            @click="login"
            type="submit"
            class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
          >
            Log In
          </button>
        </form>
        <hr class="my-6 border-gray-300 w-full" />
      </div>
    </div>
    <HelloWorld v-show="false" msg="Welcome to Your Vue.js App" />
  </section>
</template>

<script>
  import HelloWorld from "@/components/HelloWorld.vue";

  export default {
    name: "LoginView",
    components: {
      HelloWorld,
    },
    data() {
      return {
        password: "",
        username: "",
      };
    },
    methods: {
      login() {
        if (this.password.length > 0) {
          this.$http
            .post("/login", {
              password: this.password,
              username: this.username,
            })
            .then((response) => {
              console.log("entering into dashboard");
              this.$store.dispatch("setAccessTokenApi", response.data);
              localStorage.setItem("access_token", response.data);
              console.log(
                "entering into dashboard",
                this.$store.getters.isUserLogged
              );
              this.$router.push({ name: "dashboard" });
            })
            .catch(function (error) {
              console.error(error.response);
            });
        }
      },
    },
  };
</script>
