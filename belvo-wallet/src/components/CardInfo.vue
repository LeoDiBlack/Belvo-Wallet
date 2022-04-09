<template>
  <button
    v-for="(value, key, index) in cryptoBalance"
    :key="index"
    @click="returnSelection({ key, value })"
    type="button"
    class="p-5 bg-white rounded shadow-sm hover:shadow-lg"
  >
    <div class="text-base text-gray-400">{{ key }}</div>
    <div class="flex items-center pt-1">
      <div class="text-2xl font-bold text-gray-900">
        {{ value }}
      </div>
    </div>
  </button>
</template>

<script>
  export default {
    name: "CardInfo",
    props: {
      cryptoBalance: Object,
    },
    data() {
      return {
        selectedCrypto: "",
      };
    },
    methods: {
      returnSelection(crypto) {
        this.selectedCrypto = crypto;
        this.$emit("selectedElement", crypto);
      },
    },
    emits: ["selectedElement"],
  };
</script>
