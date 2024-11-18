<template>
  <div :class="buttonStyle">
    <button :id="id" type="button" @click.stop="handleClick"
            class="basic-button" :style="{width: width ?? 'auto'}">
      <span>{{text}}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "BasicButton",
  props: {
    id: {
      type: String,
      required: false
    },
    buttonStyle: String,
    text: String,
    width: String,
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
}
</script>

<style scoped>
  .basic-button {
    cursor: pointer;
    outline: none;
    border: none;
    background: var(--secondary);
    color: #FFF;
    border-radius: 10px;
    min-height: 31px;
    min-width: 80px;
    padding: 4px 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin: 0 auto;
    font-size: 14px;
  }

  .basic-button:hover {
    background: #173D79;
  }

  .basic-button > span {
    color: #FFF;
  }
</style>