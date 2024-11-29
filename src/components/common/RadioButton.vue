<template>
  <div class="custom-radio" :class="addClass">
    <input 
      :id="id" 
      :name="name" 
      type="radio" 
      :value="value" 
      :checked="modelValue === value"
      @change="emitChange"
    >
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    modelValue: {
      type: [String, Number],
      default: null
    },
    addClass: {
      type: String,
      default: "",
      required: false
    }
  },
  methods: {
    emitChange(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  }
};
</script>

<style scoped>
  .custom-radio {
    height: 30px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .custom-radio label {
    font-size: 15px;
    font-weight: 500;
  }
</style>
