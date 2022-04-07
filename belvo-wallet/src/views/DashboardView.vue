<template>
  <aside
    :class="`ml-${
      asideMenuEnabled ? '[0%]' : '[-100%]'
    } fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]`"
  >
    <div>
      <div class="-mx-6 px-6 py-4">
        <a href="https://belvo.com/" title="Belvo">
          <img
            src="https://belvo.com/wp-content/themes/belvo/assets/img/belvo.svg"
            class="w-32"
            alt="belvo logo"
          />
        </a>
      </div>

      <div class="mt-8 text-center">
        <img
          src="https://i.pinimg.com/564x/4d/d8/ca/4dd8ca386bb8bd80e9187c0b905b9f1a.jpg"
          alt=""
          class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
        />
        <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
          {{ walletEmail }}
        </h5>
      </div>

      <ul class="space-y-2 tracking-wide mt-8">
        <li>
          <button
            @click="currentViewSelected = 'summary'"
            class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                class="fill-current text-gray-600 group-hover:text-cyan-600"
                fill-rule="evenodd"
                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                clip-rule="evenodd"
              />
              <path
                class="fill-current text-gray-300 group-hover:text-cyan-300"
                d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
              />
            </svg>
            <span class="group-hover:text-gray-700">Summary</span>
          </button>
        </li>
        <li>
          <button
            @click="currentViewSelected = 'wallet-operations'"
            class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                class="fill-current text-gray-600 group-hover:text-cyan-600"
                d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
              />
              <path
                class="fill-current text-gray-300 group-hover:text-cyan-300"
                d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
              />
            </svg>
            <span class="group-hover:text-gray-700">Wallet Operations</span>
          </button>
        </li>
      </ul>
    </div>

    <div class="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
      <button
        @click="logout"
        class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
        <span class="group-hover:text-gray-700">Logout</span>
      </button>
    </div>
  </aside>
  <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    <div class="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
      <div
        class="px-0 lg:px-6 flex items-center justify-between space-x-4 2xl:container"
      >
        <h5 hidden class="text-2xl text-gray-600 font-medium lg:block">
          Dashboard
        </h5>
        <button
          @click="asideMenuEnabled = !asideMenuEnabled"
          class="w-12 h-16 border-r lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 my-auto ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="px-6 pt-6 2xl:container">
      <div class="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
        <div
          v-if="currentViewSelected === 'summary'"
          class="lg:h-full py-8 px-6 text-gray-600 rounded-xl border border-gray-200 bg-white"
        >
          <div class="mt-6">
            <h1 class="text-xl text-gray-700 text-center">Summary</h1>
            <h5 class="text-xl text-gray-700 text-center">
              Select a contact to send Crypto
            </h5>
            <div class="mt-2 flex justify-center gap-4">
              <ContactList :contactList="contacts" />
            </div>
          </div>
          <div class="mt-6">
            <h5 class="text-xl text-gray-700 text-center">
              Select balance source
            </h5>
            <div class="mt-2 flex justify-center gap-4">
              <CardInfo :cryptoBalance="balance" />
            </div>
          </div>
        </div>
        <div
          v-if="currentViewSelected === 'wallet-operations'"
          class="lg:h-full py-8 px-6 text-gray-600 rounded-xl border border-gray-200 bg-white"
        >
          <div class="mt-6">
            <h1 class="text-xl text-gray-700 text-center">Wallet Operations</h1>
            <h5 class="text-xl text-gray-700 text-center">
              Select a contact to send Crypto
            </h5>
            <div class="mt-2 flex justify-center gap-4">
              <ContactList :contactList="contacts" />
            </div>
          </div>
          <div class="mt-6">
            <h5 class="text-xl text-gray-700 text-center">
              Select balance source
            </h5>
            <div class="mt-2 flex justify-center gap-4">
              <CardInfo :cryptoBalance="balance" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import ContactList from "@/components/ContactList.vue";
  import CardInfo from "@/components/CardInfo.vue";
  export default {
    name: "LoginView",
    components: {
      ContactList,
      CardInfo,
    },
    data() {
      return {
        asideMenuEnabled: false,
        currentViewSelected: "summary",
      };
    },
    computed: {
      ...mapGetters(["balance", "contacts", "walletEmail"]),
    },
    methods: {
      logout() {
        this.$router.push({ name: "login" });
      },
    },
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
