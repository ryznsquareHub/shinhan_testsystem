<template>
  <div class="custom-checkbox" :class="addClass">
    <input :id="id" :name="id" type="checkbox">
    <label :for="id">{{label}}</label>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: {
    id: String,
    label: String,
    addClass: {
      type: String,
      default: "",
      required: false
    }
  }
}
</script>

<style scoped>
  .custom-checkbox {
    height: 30px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .custom-checkbox label {
    font-size: 15px;
    font-weight: 500;
  }
</style>