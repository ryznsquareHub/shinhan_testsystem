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

    <template v-if="isActiveMenu(navMenu3)">
      <template v-for="(item, index) in navMenu3" :key="`menu-${index}`">
        <div v-if="isActiveRoute(item.url)" class="no-header">
          <img :src="require(`@/assets/icons/${item.icon}`)" :alt="item.name" height="45px">
          <span>{{ item.name }}</span>
        </div>
      </template>
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
        url: "/web/effect-analysis",
        icon: "effect.png"
      },
      {
        name: '코드검사',
        url: "/web/code-test",
        icon: "code-test.png"
      },
      {
        name: '코드커버리지',
        url: "/web/code-coverage",
        icon: "coverage.png"
      }
    ]

    const navMenu2 = [
      {
        name: '검색',
        url: "/web/search",
        icon: "search.png"
      },
      {
        name: '영향도 피드백',
        // url: "/web/effect-feedback",
        url: "/",
        icon: "effect.png"
      },
      {
        name: '성능검사',
        url: "/web/performance",
        icon: "performance.png"
      },
      {
        name: '테스트 자동화',
        url: "/web/test-automation",
        icon: "automation.png"
      },
      {
        name: '레포별-담당자관리',
        url: "/web/management",
        icon: "manager.png"
      },
    ]

    const navMenu3 = [
      {
        name: '영향도분석',
        url: "/web/effect-analysis-2",
        icon: "effect_white.png"
      },
      {
        name: '코드검사',
        url: "/web/code-test-2",
        icon: "search_white.png"
      },
      {
        name: '코드커버리지',
        url: "/web/code-coverage-2",
        icon: "coverage_white.png"
      }
    ]

    const isActiveRoute = (path) => route.fullPath === path;
    const isActiveMenu = (menu) => menu.filter(i => route.fullPath === i.url).length > 0;

    const goTo = (path) => {
      router.push(path);
    };

    return {
      navMenu,
      navMenu2,
      navMenu3,
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

  .no-header {
    display: flex;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 20px;
    gap: 35px;
    align-items: center;
    margin-bottom: 10px;
  }
</style>