<template>
  <aside
    :class="`ml-${
      asideMenuEnabled ? '[0%]' : '[-100%]'
    } fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]`"
  >
    <div v-show="false" class="utility-test ml-[0%] ml-[-100%]"></div>
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
            @click="selectOptionView('summary')"
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
            @click="selectOptionView('wallet-operations')"
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
          Dashboard -
          {{
            currentViewSelected.trim().replace(/^\w/, (c) => c.toUpperCase())
          }}
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
              <ContactList
                :contactList="contacts"
                @selectedContact="updateSelectedContact($event)"
              />
            </div>
          </div>
          <div class="mt-6">
            <h5 class="text-xl text-gray-700 text-center">
              Select balance source
            </h5>
            <div class="mt-2 flex justify-center gap-4">
              <CardInfo
                :cryptoBalance="balance"
                @selectedElement="updateSelectedCrypto($event)"
              />
            </div>
          </div>
          <div
            v-if="selectedCrypto"
            class="mt-6 flex flex-wrap justify-center gap-4"
          >
            <p class="text-xl w-full text-gray-700 text-center">
              You have selected {{ selectedCrypto.key }}
            </p>
            <div v-if="selectedCrypto.value > 0">
              <label for="crypto"
                >How much {{ selectedCrypto.key }} you want to Transfer?</label
              >
              <input
                class="mx-4"
                type="number"
                id="crypto"
                name="crypto"
                min="0"
                v-model="amountToTransfer"
                :max="selectedCrypto.value"
                step="0.1"
              />
              <button
                @click="transferCrypto"
                class="p-2 pl-5 pr-5 bg-green-500 text-gray-100 text-lg rounded-lg focus:border-4 border-green-300"
              >
                Send Crypto
              </button>
            </div>
            <p v-else>You dont have enough funds to transfer</p>
          </div>
        </div>
        <div
          v-if="currentViewSelected === 'wallet-operations'"
          class="lg:h-full py-8 px-6 text-gray-600 rounded-xl border border-gray-200 bg-white"
        >
          <div class="mt-6">
            <div class="mt-2 flex justify-center gap-4">
              <TableContent :transactions="walletTransactions" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import CardInfo from "@/components/CardInfo.vue";
  import ContactList from "@/components/ContactList.vue";
  import TableContent from "@/components/TableContent.vue";
  export default {
    name: "LoginView",
    components: {
      CardInfo,
      ContactList,
      TableContent,
    },
    data() {
      return {
        asideMenuEnabled: false,
        amountToTransfer: 0,
        currentViewSelected: "summary",
        selectedCrypto: "",
        selectedContact: 0,
      };
    },
    computed: {
      ...mapGetters([
        "balance",
        "contacts",
        "walletEmail",
        "walletTransactions",
      ]),
    },
    methods: {
      transferCrypto() {
        let transaction = {};
        let isValidAmountToTransfer =
          this.balance[this.selectedCrypto.key] - this.amountToTransfer >= 0;
        transaction.receiver = this.selectedContact.email;
        transaction.crypto = this.selectedCrypto;
        transaction.amount = this.amountToTransfer;
        transaction.status = "in progress";
        if (transaction.amount > 0 && isValidAmountToTransfer) {
          this.$store.dispatch("addTransaction", transaction);
        }
      },
      selectOptionView(view) {
        this.currentViewSelected = view;
        this.asideMenuEnabled = false;
      },
      logout() {
        this.$router.push({ name: "home" });
      },
      updateSelectedCrypto(crypto) {
        this.selectedCrypto = crypto;
      },
      updateSelectedContact(contactIndex) {
        this.selectedContact = this.contacts[contactIndex];
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
          this.$store.dispatch("setContacts", response.data);
          this.selectedContact = this.contacts[0];
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
          this.$store.dispatch("setWallet", response.data);
        })
        .catch(function (error) {
          console.error(error.response);
        });
    },
  };
</script>
