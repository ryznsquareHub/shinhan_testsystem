<template>
  <nav>
    <template v-if="isActiveMenu(navMenu)">
      <button  v-for="(item, index) in navMenu" :key="`menu-${index}`"
               @click="goTo(item.url)"
               class="nav-button"
               :class="{ activePage: isActiveRoute(item.url) }">
        <img :src="require(`@/assets/icons/${item.icon}`)" :alt="item.name">
        <span>{{ item.name }}</span>
      </button>
    </template>

    <template v-if="isActiveMenu(navMenu2)">
      <button v-for="(item, index) in navMenu2" :key="`menu-${index}`"
              @click="goTo(item.url)"
              class="nav-button"
              :class="{ activePage: isActiveRoute(item.url) }">
        <img :src="require(`@/assets/icons/${item.icon}`)" :alt="item.name">
        <span>{{ item.name }}</span>
      </button>
    </template>

    <div v-if="isActiveMenu(navMenu)" class="logout-btn" @click="console.log('logout')">
      <img :src="require(`@/assets/icons/logout.png`)" alt="로그아웃" width="26px">
      <span>로그아웃</span>
    </div>
  </nav>
</template>


<script>
import {useRoute, useRouter} from 'vue-router';

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

    const navMenu2 = [
      {
        name: '검색',
        url: "/search",
        icon: "search.png"
      },
      {
        name: '영향도 피드백',
        url: "/effect-feedback",
        icon: "effect.png"
      },
      {
        name: '성능검사',
        url: "/performance",
        icon: "performance.png"
      },
      {
        name: '테스트 자동화',
        url: "/test-automation",
        icon: "automation.png"
      },
      {
        name: '레포별-담당자관리',
        url: "/management",
        icon: "manager.png"
      },
    ]

    const isActiveRoute = (path) => route.fullPath === path;
    const isActiveMenu = (menu) => menu.filter(i => route.fullPath === i.url).length > 0;

    const goTo = (path) => {
      router.push(path);
    };

    return {
      navMenu,
      navMenu2,
      isActiveRoute,
      isActiveMenu,
      goTo,
    };
  },
  name: 'Header'
}
</script>

<style scoped>
  .logout-btn {
    position: absolute;
    right: 50px;
    top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 9px;
    cursor: pointer;
  }

  .logout-btn span {
    color: #FFFFFF;
    font-weight: 800;
    background: none;
  }
</style>