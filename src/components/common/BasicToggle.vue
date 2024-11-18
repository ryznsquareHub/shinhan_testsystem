<template>
  <div class="switch-wrapper">
    <div class="switch" @click="toggle"
         :class="{'active-toggle' : isActive}">
      <div :class="{'thumb': true, 'on': isActive}"></div>
    </div>
    <span v-if="label" class="toggle-label">{{ label }}</span>
  </div>

</template>

<script>
export default {
  name: 'BasicToggle',
  props: {
    defaultActive: Boolean,
    handleChange: Function,
    label: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      isActive: this.defaultActive ?? false,
    };
  },
  methods: {
    toggle() {
      if (this.handleChange) {
        this.handleChange(!this.isActive);
      }
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.switch-wrapper {
  display: flex;
  gap: 6px;
  align-items: center;
}

.switch {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 47px;
  height: 28px;
  background-color: #CCC;
  border-radius: 60px;
  transition: background-color 0.3s ease;
  padding: 2px 5px;
  box-sizing: border-box;
}

.switch.active-toggle {
  background-color: #6D94D5;
}

.thumb {
  width: 19px;
  height: 19px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.on {
  transform: translateX(18px);
}

.toggle-label {
  margin-left: 8px;
}
</style>