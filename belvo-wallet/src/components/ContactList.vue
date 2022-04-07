<template>
  <div class="max-w-md mx-auto space-y-6">
    <div class="dropdown-menu">
      <div
        class="bg-white rounded-lg shadow-xl flex items-center px-4 py-6 cursor-pointer"
      >
        <input
          type="text"
          placeholder="Juma Musa"
          readonly
          class="pointer-events-none text-base placeholder-gray-400 outline-none w-full h-full flex-1"
        />
        <svg
          width="20"
          height="10"
          viewBox="0 0 20 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0" y1="0" x2="10" y2="10" stroke="#9CA3AF" />
          <line x1="20" y1="0" x2="10" y2="10" stroke="#9CA3AF" />
        </svg>
      </div>

      <div class="bg-white rounded-lg shadow-xl px-4 relative mt-8">
        <svg
          class="absolute bottom-full right-4"
          width="30"
          height="20"
          viewBox="0 0 30 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="15, 0 30, 20 0, 20" fill="#FFFFFF" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ContactList",
    props: {
      msg: String,
    },
  };
</script>
