<template>
  <ul class="tree-view">
    <li v-for="(node, index) in nodes" :key="index">
      <div class="tree-node">
        <button
          v-if="node.children && node.children.length"
          @click="toggleNode(node)"
          class="toggle-button"
        >
          <template v-if="expandedNodes.has(node)">
            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.53909 9.1148C1.30218 9.1148 1.10452 9.0356 0.946122 8.8772C0.787722 8.7188 0.708351 8.52097 0.708008 8.28372V1.71732C0.708008 1.4804 0.787379 1.28274 0.946122 1.12434C1.10486 0.965945 1.30252 0.886573 1.53909 0.88623H8.10601C8.34258 0.88623 8.54024 0.965602 8.69898 1.12434C8.85772 1.28309 8.93692 1.48074 8.93658 1.71732V8.28423C8.93658 8.5208 8.85738 8.71846 8.69898 8.8772C8.54058 9.03594 8.34275 9.11514 8.10549 9.1148H1.53909ZM1.53909 8.60052H8.10601C8.18486 8.60052 8.25738 8.5676 8.32355 8.50177C8.38972 8.43594 8.42264 8.36326 8.42229 8.28372V1.71732C8.42229 1.63812 8.38938 1.56543 8.32355 1.49926C8.25772 1.43309 8.18504 1.40017 8.10549 1.40052H1.53909C1.45989 1.40052 1.38721 1.43343 1.32104 1.49926C1.25486 1.56509 1.22195 1.63777 1.22229 1.71732V8.28423C1.22229 8.36309 1.25521 8.4356 1.32104 8.50177C1.38686 8.56794 1.45938 8.60086 1.53858 8.60052" fill="#696969"/>
              <rect x="7.15234" y="4.71924" width="0.5625" height="4.66071" transform="rotate(90 7.15234 4.71924)" fill="#696969"/>
            </svg>
          </template>
          <template v-if="!expandedNodes.has(node)">
            <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.84445 6.45054H5.35873V4.3934H7.41588V3.87912H5.35873V1.82197H4.84445V3.87912H2.7873V4.3934H4.84445V6.45054ZM1.81839 8.25054C1.58148 8.25054 1.38382 8.17134 1.22542 8.01294C1.06702 7.85454 0.987648 7.65672 0.987305 7.41946V0.853058C0.987305 0.616144 1.06668 0.418487 1.22542 0.260087C1.38416 0.101687 1.58182 0.0223155 1.81839 0.0219727H8.3853C8.62188 0.0219727 8.81953 0.101344 8.97828 0.260087C9.13702 0.41883 9.21622 0.616487 9.21588 0.853058V7.41997C9.21588 7.65654 9.13668 7.8542 8.97828 8.01294C8.81988 8.17169 8.62205 8.25089 8.38479 8.25054H1.81839ZM1.81839 7.73626H8.3853C8.46416 7.73626 8.53668 7.70334 8.60285 7.63752C8.66902 7.57169 8.70193 7.499 8.70159 7.41946V0.853058C8.70159 0.773858 8.66868 0.701173 8.60285 0.635001C8.53702 0.56883 8.46433 0.535915 8.38479 0.536258H1.81839C1.73919 0.536258 1.6665 0.569173 1.60033 0.635001C1.53416 0.70083 1.50125 0.773516 1.50159 0.853058V7.41997C1.50159 7.49883 1.5345 7.57134 1.60033 7.63752C1.66616 7.70369 1.73868 7.7366 1.81788 7.73626" fill="#696969"/>
            </svg>
          </template>
        </button>
        <div v-else class="no-node-icon">
          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.822266 0.13623V3.13623H3.82227" stroke="#696969" stroke-width="0.3"/>
          </svg>
        </div>
        <span>{{ node.label }}</span>
      </div>

      <DataTree
        v-if="expandedNodes.has(node)"
        :nodes="node.children"
        class="child-nodes"
      />
    </li>
  </ul>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'DataTree',
  props: {
    nodes: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const expandedNodes = ref(new Set());

    const toggleNode = (node) => {
      if (expandedNodes.value.has(node)) {
        expandedNodes.value.delete(node);
      } else {
        expandedNodes.value.add(node);
      }
    };

    return {
      expandedNodes,
      toggleNode,
    };
  },
});
</script>

<style scoped>
.tree-view {
  list-style: none;
  padding-left: 1rem;
  font-weight: 400;
}

.tree-node {
  display: flex;
  align-items: center;
}

.toggle-button {
  margin-right: 4px;
  border: none;
  background: none;
  cursor: pointer;
}

.child-nodes {
  margin-left: 16px;
}

.no-node-icon {
  margin-right: 4px;
  width: 22px;
  display: flex;
}

.no-node-icon svg {
  margin: auto;
}
</style>
