import { createStore } from "vuex";

const getDefaultState = () => {
  return {
    access_token_api: "",
    contacts: [],
    wallet: [],
  };
};

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
    ADD_TRANSACTION(state, transaction) {
      state.wallet.transactions.push(transaction);
    },
    RESET_STATE(state) {
      Object.assign(state, getDefaultState());
    },
    SET_ACCESS_TOKEN_API(state, access_token_api) {
      state.access_token_api = access_token_api;
    },
    SET_CONTACTS(state, contacts) {
      state.contacts = contacts;
    },
    SET_WALLET(state, wallet) {
      state.wallet = wallet;
    },
    UPDATE_BALANCE(state, transaction) {
      state.wallet.balance[transaction.crypto.key] = parseFloat(
        (
          state.wallet.balance[transaction.crypto.key] - transaction.amount
        ).toFixed(2)
      );
    },
  },
  actions: {
    addTransaction(context, transaction) {
      context.commit("ADD_TRANSACTION", transaction);
      context.commit("UPDATE_BALANCE", transaction);
    },
    updateBalance(context, crypto) {
      context.commit("UPDATE_BALANCE", crypto);
    },
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
