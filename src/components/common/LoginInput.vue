<template>
  <div class="login-input" :class="addClass">
    <label :for="id" class="login-input-label" :style="label ? '' : 'display: none'">
      {{ label }}
    </label>
    <input :id="id" :name="id" :type="type ?? 'text'"
           :value="value" @change="handleChange">
  </div>
</template>

<script>
export default {
  name: "LoginInput",
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
  .login-input {
    width: 230px;
    margin: 4px 0;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .login-input input {
    width: 100%;
    min-height: 26px;
    margin-top: 10px;
    background: #E2EDFE;
    text-align: center;
    border: none;
    outline: none;
    border-radius: 6px;
  }

  .login-input-label {
    color: var(--secondary);
    font-weight: 600;
    font-size: 12px;
  }
</style>