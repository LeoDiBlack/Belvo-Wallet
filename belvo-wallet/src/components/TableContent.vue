<template>
  <table class="border-collapse w-full">
    <thead>
      <tr>
        <th
          class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
        >
          Receiver
        </th>
        <th
          class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
        >
          Crypto
        </th>
        <th
          class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
        >
          Status
        </th>
        <th
          class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
        >
          Amount
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(transaction, index) in formattedTransactions"
        :key="index"
        class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
      >
        <td
          class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Receiver</span
          >
          {{ transaction.receiver }}
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Crypto</span
          >
          {{ transaction.crypto.key }}
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Status</span
          >
          <span class="rounded bg-green-400 py-1 px-3 text-xs font-bold">{{
            transaction.status
          }}</span>
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Amount</span
          >
          {{ transaction.amount }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: "TableContent",
    props: {
      transactions: Array,
    },
    computed: {
      formattedTransactions() {
        let emptyTransactions = [
          {
            receiver: "Nothing here yet",
            crypto: { key: "Nothing here yet" },
            status: "Nothing here yet",
            amount: "Nothing here yet",
          },
        ];
        return this.transactions?.length
          ? this.transactions.slice(Math.max(this.transactions.length - 5, 0))
          : emptyTransactions;
      },
    },
  };
</script>
