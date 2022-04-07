<template>
  <div class="p-5 bg-white rounded shadow-sm">
    <div class="text-base text-gray-400">Total Sales</div>
    <div class="flex items-center pt-1">
      <div class="text-2xl font-bold text-gray-900">$9850.90</div>
      <span
        class="flex items-center px-2 py-0.5 mx-2 text-sm text-green-600 bg-green-100 rounded-full"
      >
        <svg
          class="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 15L12 9L6 15"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <span>1.8%</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CardInfo",
    props: {
      msg: String,
    },
  };
</script>
