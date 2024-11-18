<template>
  <div class="basic-date-picker">
    <Datepicker v-model="date" locale="ko"
                :enable-time-picker="false"
                :clearable="false"
                :auto-apply="true"
                :action-row="{ showSelect: false, showCancel: false}"
                @update:model-value="onSelect"
                format="yyyy-MM-dd">
      <template #input-icon>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.58008 11.1321H9.58008V13.1321H7.58008V11.1321ZM7.58008 15.1321H9.58008V17.1321H7.58008V15.1321ZM11.5801 11.1321H13.5801V13.1321H11.5801V11.1321ZM11.5801 15.1321H13.5801V17.1321H11.5801V15.1321ZM15.5801 11.1321H17.5801V13.1321H15.5801V11.1321ZM15.5801 15.1321H17.5801V17.1321H15.5801V15.1321Z" fill="#0D99FF"/>
          <path d="M5.58008 22.1321H19.5801C20.6831 22.1321 21.5801 21.2351 21.5801 20.1321V6.13208C21.5801 5.02908 20.6831 4.13208 19.5801 4.13208H17.5801V2.13208H15.5801V4.13208H9.58008V2.13208H7.58008V4.13208H5.58008C4.47708 4.13208 3.58008 5.02908 3.58008 6.13208V20.1321C3.58008 21.2351 4.47708 22.1321 5.58008 22.1321ZM19.5801 8.13208L19.5811 20.1321H5.58008V8.13208H19.5801Z" fill="#0D99FF"/>
        </svg>
      </template>
    </Datepicker>
  </div>
</template>

<script setup>
  import {ref} from 'vue'
  import '@vuepic/vue-datepicker/dist/main.css'
  import Datepicker from '@vuepic/vue-datepicker';
  const date = ref();
</script>

<script>
export default {
  name: 'DatePicker',
  props: {
    onSelect: Function
  }
};
</script>

<style>
.basic-date-picker {
  width: 150px;
  height: 31px;
}
.basic-date-picker .dp__input_wrap,
.basic-date-picker input {
  max-height: 31px;
  box-sizing: border-box;
  text-align: center;
  font-family: Noto Sans KR, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 500;
}

.basic-date-picker input {
  border: 1px solid #BCBCBC !important;
  border-radius: 0;
}

.basic-date-picker svg {
  margin: 4px 6px 0;
}
</style>