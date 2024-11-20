<template>
  <Transition name="modal">
    <div v-if="true" class="modal-mask">
      <div class="modal-container">
        <div class="modal-top-deco"/>
        <div class="modal-close">
          <img src="@assets/icons/close.png" alt="close-btn" @click="$emit('close')">
        </div>
        
        <div class="modal-header">
          <slot name="header"></slot>
        </div>

        <div class="modal-body">
          <slot name="body"> </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <BasicButton
              @click="$emit('close')"
              text="확인"
              width="198px"
            />
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
 import BasicButton from "@/components/common/BasicButton";

  export default {
    name: "Modal",
    components: {
      BasicButton
    },
    props: {
      show: Boolean
    }
  }
</script>


<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  position: relative;
  min-width: 300px;
  margin: auto;
  padding: 0 31px 30px;
  background: #fff;
  border: 1px solid #0D99FF;
  box-shadow: 0 2px 8px rgba(255,255,255, 0.1);
  transition: all 0.3s ease;
}

.modal-top-deco {
  width: 100%;
  height: 4px;
  left: 0;
  top: 0;
  position: absolute;
  background: linear-gradient(to right, #2254A5, #2254A5 75%, #6D94D5 75%, #6D94D5);
}

.modal-close {
  height: 40px;
  position: relative;
  justify-content: flex-end;
  padding: 18px 0;
}

.modal-close img {
  width: 12px;
  position: absolute;
  right: -16px;
}

.modal-header h3 {
  margin-top: 0;
  color: #2254A5;
  font-size: 16px;
  font-weight: bold;
}

.modal-body {
  margin: 20px 0;
}
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>