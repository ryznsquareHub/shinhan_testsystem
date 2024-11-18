<template>
  <div class="custom-basic-input" :class="addClass">
    <label :for="id" class="basic-input-label" :style="label ? '' : 'display: none'">
      {{ label }}
    </label>
    <input :id="id" :name="id" :type="type ?? 'text'" :value="value" @change="handleChange">
  </div>
</template>

<script>
export default {
  name: "BasicInput",
  props: {
    id: String,
    label: String,
    type: String,
    value: String,
    addClass: {
      type: String,
      required: false
    },
    handleChange: Function
  }
}
</script>

<style>
  .custom-basic-input {
    width: 230px;
    margin: 6px 0;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .custom-basic-input input {
    width: 100%;
    min-height: 26px;
    /*margin-top: 10px;*/
    background: none;
    outline: none;
    border: 1px solid #BCBCBC;
    padding: 5px 9px !important;
    color: #090909;
    font-size: 14px;
    font-weight: 500;
  }

  .basic-input-label {
    color: #090909;
    font-weight: 700;
    font-size: 12px;
  }
</style>