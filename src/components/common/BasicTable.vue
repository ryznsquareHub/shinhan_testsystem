<template>
  <VueGoodTable
    styleClass="vgt-table condensed vgt-table-custom"
    row-style-class="vgt-row-custom"
    :sort-options="{
      enabled: true,
      multipleColumns: true
    }"
    :columns="columns"
    :rows="rows">
    <template #table-row="props">
      <span v-if="props.column.type === 'button'">
        <BasicButton
          @click="props.column.onClick(props.formattedRow)"
          :text="props.column.btnText"
        />
      </span>
      <span v-else>
        {{props.formattedRow[props.column.field]}}
      </span>
    </template>
  </VueGoodTable>
</template>

<script>
import 'vue-good-table-next/dist/vue-good-table-next.css'
import { VueGoodTable } from 'vue-good-table-next';
import BasicButton from "@/components/common/BasicButton";

export default {
  name: "BasicTable",
  props: {
    columns: Object,
    rows: Object
  },
  components: {
    VueGoodTable,
    BasicButton
  },
  data() {
    return {

    };
  },
}
</script>

<style>
  .vgt-table {
    border: none !important;
  }

  .vgt-row-custom {
    height: 50px;
  }

  .vgt-table th.sortable button {
    width: 40px;
    position: relative;
    height: 10px;
    cursor: pointer;
    margin-right: -30px;

  }
  .vgt-table th.sortable button::before,
  .vgt-table th.sortable button::after {
    left: 4px;
    border-bottom-color: #090909;
    border-top-color: #090909;
  }
  .vgt-table th.sortable button::before,
  .vgt-table thead th.sorting-asc button:before,
  .vgt-table thead th.sorting-desc button:before {
    border-top-width: 7px;
  }
  .vgt-table th.sortable button::after,
  .vgt-table thead th.sorting-asc button:after,
  .vgt-table thead th.sorting-desc button:after{
    border-bottom-width: 7px;
    margin-top: -9px;
  }

  .vgt-table-custom thead th {
    background: #F7F8FB;
    font-size: 16px;
    color: #090909;
    border-top: 1px solid #09090950;
  }
  .vgt-table-custom tbody td span {
    font-size: 14px;
    color: #090909;
  }
  .vgt-table-custom th, .vgt-table-custom td {
    text-align: center;
    vertical-align: middle !important;
  }

  table.vgt-table th, table.vgt-table td {
    border-bottom: 1px solid #09090950;
  }
</style>