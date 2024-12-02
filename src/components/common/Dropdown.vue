<template>
  <div class="dropdown">
    <button class="dropdown-button" @click="toggleDropdown">
      <span>{{ selected || placeholder }}</span>
      <img src="@/assets/icons/down.svg" alt="Icon" />
    </button>

    <ul v-if="isOpen" class="dropdown-menu">
      <li
        v-for="(option, index) in options"
        :key="index"
        @click="selectOption(option)"
        class="dropdown-item"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: "== 선택 ==",
    },
    modelValue: {
      type: String,
      default: null,
    },
    onSelect: Function
  },
  data() {
    return {
      isOpen: false,
      selected: this.modelValue,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selected = option;
      this.isOpen = false;
      this.$emit("update:modelValue", option);
      this.onSelect(option);
    },
  },
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
  min-width: 110px;
  font-weight: 500;
  margin: 4px 0;
  text-align: start;
}

.dropdown-button {
  width: 100%;
  padding: 4px 10px;
  background-color: #FFFFFF;
  border: 1px solid #BCBCBC;
  text-align: left;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dropdown-button span {
  margin-right: 8px;
  min-height: 22px;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% - 3px);
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #BCBCBC;
  border-top: none;
  z-index: 1000;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  font-size: 15px;
  max-height: 94px;
  overflow-y: overlay;
}
.resource-input .dropdown-menu {
  position: absolute;
  top: calc(100% - 35px) !important;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #BCBCBC;
  border-top: none;
  z-index: 1000;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  font-size: 15px;
  max-height: 94px;
  overflow-y: overlay;
}

.dropdown-item {
  padding: 4px 10px;
  cursor: pointer;
  list-style: none;
  font-size: 15px;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}
</style>