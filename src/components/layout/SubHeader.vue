<template>
  <div class="sub-header">
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "SubHeader"
}
</script>

<style scoped>
  .sub-header {
    display: flex;
    width: 100%;
    min-height: 68px;
    border-bottom: 1px solid #2254A5;
    padding: 17px 50px 20px;
  }
</style>