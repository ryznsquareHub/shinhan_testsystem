<template>
  <div :class="buttonStyle">
    <button type="button" @click.stop="handleClick" class="basic-button">
      <span>{{text}}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "BasicButton",
  props: {
    buttonStyle: String,
    text: String
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
    background: #2254A5;
    color: #FFF;
    border-radius: 10px;
    min-height: 31px;
    min-width: 80px;
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