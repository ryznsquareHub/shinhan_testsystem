<template>
 
    <VueGoodTable
      styleClass="vgt-table condensed vgt-table-custom"
      row-style-class="vgt-row-custom"
      :select-options="{
        enabled: enableRowCheck,
        selectOnCheckboxOnly: true,
        disableSelectInfo: true
      }"
      v-on:selected-rows-change="selectionChanged"
      :sort-options="{
        enabled: true,
        multipleColumns: true
      }"
      :columns="columns"
      :rows="rows"
      :fixed-header="true"
      :max-height="'250px'">
      <template #table-row="props">
        <span v-if="props.column.type === 'button'">
          <BasicButton
            @click="props.column.onClick(props.formattedRow)"
            :text="props.column.btnText"
          />
        </span>
        <span v-if="props.column.type === 'modify'">
          <div class="modify-btn">
            <img :src="require(`@/assets/icons/pencil.svg`)"
                 @click="props.column.onClickEdit(props.formattedRow)"
                 alt="edit" width="18px">
            <img :src="require(`@/assets/icons/delete.svg`)"
                 @click="props.column.onClickDelete(props.formattedRow)"
                 alt="delete" width="18px">
          </div>
        </span>
        <span v-if="props.column.type === 'delete'">
          <div class="modify-btn">
            <img :src="require(`@/assets/icons/delete.svg`)"
                 @click="props.column.onClickDelete(props.formattedRow)"
                 alt="delete" width="18px">
          </div>
        </span>
        <span v-else @click="props.column.onClick && props.column.onClick(props.formattedRow)">
          {{props.formattedRow[props.column.field]}} ::
        </span>
      </template>
      kkkk
      <div class="table-container" v-infinite-scroll="onLoadMore"></div>
    </VueGoodTable>
   
</template>

<script setup>
import { vInfiniteScroll } from '@vueuse/components'
import { ref } from 'vue'

// const data = ref([1, 2, 3, 4, 5, 6])


  // const length = data.value.length + 1
  // data.value.push(...Array.from({ length: 5 }, (_, i) => length + i))
</script>




<script>
import 'vue-good-table-next/dist/vue-good-table-next.css'
import { VueGoodTable } from 'vue-good-table-next';
import BasicButton from "@/components/common/BasicButton";

export default {
  name: "BasicTableInfinite",
  props: {
    columns: Object,
    rows: Object,
    enableRowCheck: {
      type: Boolean,
      default: false
    },
    getBottomDataInfinite: Function,
  },
  components: {
    VueGoodTable,
    BasicButton
  },
  data() {
    return {

    };
  },
  methods: {
    selectionChanged({selectedRows}) {
      console.log(selectedRows)
    },
   onLoadMore() {
    console.log('111');
    // if (this.getBottomDataInfinite) {
    //   this.getBottomDataInfinite(this.rows);
    // }
  }
}}
</script>

<style>/* 테이블 컨테이너 */
.table-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  position: relative;
  overflow: hidden; /* 스크롤 제거 */
  box-sizing: border-box; /* 테두리와 패딩 포함 */
  max-height: 500px; /* 테이블 전체 높이 제한 */
}
.vgt-responsive{
  overflow: hidden;
}
.vgt-table-custom {
  width: 100%;
  border-collapse: collapse;
}

.vgt-table-custom thead {
  position: sticky; /* 헤더 고정 */
  top: 0;
  background: #f7f8fb; /* 헤더 배경 */
  z-index: 10;
}

.vgt-table-custom tbody {
  display: block;
  max-height: 200px !important; /* 테두리 높이를 고려하여 보정 */ 
  overflow-y: auto; /* 스크롤 활성화 */
  margin: 0; /* 불필요한 여백 제거 */
  padding: 0; /* 내부 여백 제거 */
}

.vgt-table-custom tbody tr {
  display: table; /* 테이블 행 스타일 유지 */
  width: 100%; /* 행 너비 고정 */
  table-layout: fixed;
}

.vgt-table-custom thead tr {
  display: table; /* 헤더 행 스타일 유지 */
  width: 100%; /* 헤더 너비 고정 */
  table-layout: fixed;
}
</style>