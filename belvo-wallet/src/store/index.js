import { createStore } from "vuex";

export default createStore({
  state: {
    access_token_api: "",
    contacts: [],
    wallet: [],
  },
  getters: {
    accessTokenApi(state) {
      return state.access_token_api;
    },
    balance(state) {
      return state.wallet.balance;
    },
    contacts(state) {
      return state.contacts;
    },
    isUserLogged(state) {
      return state.access_token_api ? true : false;
    },
    walletTransactions(state) {
      return state.wallet.transactions;
    },
    walletEmail(state) {
      return state.wallet.email;
    },
  },
  mutations: {
    SET_ACCESS_TOKEN_API(state, access_token_api) {
      state.access_token_api = access_token_api;
    },
    SET_CONTACTS(state, contacts) {
      state.contacts = contacts;
    },
    SET_WALLET(state, wallet) {
      state.wallet = wallet;
    },
  },
  actions: {
    setAccessTokenApi({ commit }, access_token_api) {
      commit("SET_ACCESS_TOKEN_API", access_token_api);
    },
    setContacts({ commit }, contacts) {
      commit("SET_CONTACTS", contacts);
    },
    setWallet({ commit }, wallet) {
      commit("SET_WALLET", wallet);
    },
  },
  modules: {},
});
