<template>
  <div id="main">
    <nav>
      <button v-for="(item, index) in navMenu" :key="`menu-${index}`"
              @click="goTo(item.url)" class="nav-button" :class="{ activePage: isActiveRoute(item.url) }">
        <img :src="require(`@/assets/icons/${item.icon}`)" :alt="item.name">
        <span>{{ item.name }}</span>
      </button>
    </nav>
    <SubHeader />
    <router-view/>
  </div>
</template>

<script>
import {useRoute, useRouter} from 'vue-router';
import SubHeader from "@/components/layout/SubHeader";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const navMenu = [
      {
        name: '영향도분석',
        url: "/effect-analysis",
        icon: "effect.png"
      },
      {
        name: '코드검사',
        url: "/code-test",
        icon: "code-test.png"
      },
      {
        name: '코드커버리지',
        url: "/code-coverage",
        icon: "coverage.png"
      }
    ]

    const isActiveRoute = (path) => route.fullPath === path;

    const goTo = (path) => {
      router.push(path);
    };

    return {
      navMenu,
      isActiveRoute,
      goTo,
    };
  },
  name: 'App',
  components: {
    SubHeader
  }
}
</script>