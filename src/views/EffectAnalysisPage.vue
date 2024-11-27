<template>
  <SubHeader>
    <template #content>
<!--      <div class="eff-analysis-sub-header">-->
<!--        <img :src="require(`@/assets/icons/refresh.svg`)" alt="초기화" width="20px">-->
<!--        <BasicToggle :defaultActive="true" :handleChange="(v) => console.log(v)" label="헤더포함"/>-->
<!--        <BasicButton text="영향도 수기발송"/>-->
<!--      </div>-->
    </template>
  </SubHeader>
  <article class="page-area">
  <!--   <section style="margin-top: 20px">
    <BasicTableInfiniteTest
         :columns="columnsTopTable"
          :rows="rowsBottomTableTest"
        />
        </section> -->
    <section style="margin-top: 20px">
      <BasicTable :columns="columnsTopTable" :rows="rowsTopTable"/>
    </section>

    <hr class="blue-divider">

    <section style="margin-top: 20px">
<!--      <div class="flex-btn-box" style="margin-bottom: 20px;">-->
<!--        <BasicButton text="선택 피드백 요청"/>-->
<!--        <BasicButton text="전체 피드백 요청"/>-->
<!--      </div>-->
  <!--     <BasicTable
        :columns="columnsBottomTable" 
        :rows="this.rowsBottomTable"
        :pagination-options="{
          enabled: true,
          perPageDropdown: [3, 7, 9]
        }"
        /> -->
        <BasicTableInfinite
        :columns="columnsBottomTable" 
        :rows="this.rowsBottomTable"
        :getBottomDataInfinite="this.getBottomDataInfinite"
        />
    </section>
  </article>
</template>

<script setup>
import SubHeader from "@/components/layout/SubHeader";
</script>

<script>
import BasicTable from "@/components/common/BasicTable";
import BasicTableInfinite from "@/components/common/BasicTableInfinite";
// import BasicToggle from "@/components/common/BasicToggle";
// import BasicButton from "@/components/common/BasicButton";
import axios from 'axios';
import BasicTableInfiniteTest from "@/components/common/BasicTableInfiniteTest.vue";

export default {
  name: 'EffectAnalysisPage',
  components: {
    BasicTable,
    BasicTableInfinite,
    BasicTableInfiniteTest,
  },
  data() {
    return {
      selectedOption: null,
      columnsTopTable: [
        {
          label: '경로~~1', field: 'wrFilePath',
          onClick: (row) => {
            console.log(row)
            this.getBottomData(row);
          }
        },
        
        {label: '파일명', field: 'wrFileName'},
        {
          label: '분석일시',
          field: 'analyzedAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd HH:mm',
          dateOutputFormat: 'yyyy/MM/dd HH:mm',
        },
        {label: '확인건수', field: 'checkedCount'},
        {
          label: '', field: 'button', sortable: false, type: 'button', btnText: "상세보기",
          onClick: (row) => {
            console.log(row)
          }
        },
        {label: 'impactList', field: 'impactList',   hidden: true},
      ],
      rowsTopTable: [
        // {id: 1, path2: "/AAA/SERVICE_MODULE/", file: "kiba112.c", analyzedAt: "2024-11-11 13:00", checkedCount: "1/5"},
        // {id: 2, path2: "/AAA/SERVICE_MODULE/", file: "kiba112.c", analyzedAt: "2024-11-11 13:00", checkedCount: "1/5"},
        // {id: 3, path2: "/AAA/SERVICE_MODULE/", file: "kiba112.c", analyzedAt: "2024-11-11 13:00", checkedCount: "1/5"},
      ],
      columnsBottomTable: [
        {label: '업무', field: 'prjKorNm'}, // JSON의 prjKorNm에 해당
        {label: '경로', field: 'wrFilePath'}, // JSON의 wrFilePath에 해당
        {label: '참조파일', field: 'tgPgm'}, // JSON의 tgPgm에 해당
        {label: '연관프로그램', field: 'wrFileName'}, // JSON의 wrFileName에 해당
        {label: '설명', field: 'fileDesc'}, // JSON의 fileDesc에 해당
        {label: '담당자', field: 'name'}, // JSON의 name에 해당
        {label: '부서', field: 'dbrnName'}, // JSON의 dbrnName에 해당
        {label: '확인상태', field: 'feedbackStatus'}, // JSON의 feedbackStatus에 해당
        {label: 'DBIO여부', field: 'dbioFlag'}, // JSON의 dbioFlag에 해당
        {
          label: '발송일',
          field: 'createDt', // JSON의 createDt에 해당
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd HH:mm',
          dateOutputFormat: 'yyyy/MM/dd HH:mm',
        },
        {
          label: '확인일',
          field: 'checkedAt', // '확인일'에 해당하는 필드가 JSON에 없으므로 추가 필요 시 정의해야 함
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd HH:mm',
          dateOutputFormat: 'yyyy/MM/dd HH:mm',
        }
      ],
      rowsBottomTable: [
        // {
        //   id: 1,
        //   task: "/07.골드넷플러스_UI_플랫폼/03.Web_화면",
        //   path: "/21856/ABF/",
        //   attachedFile: "pgfram609.c",
        //   program: "liba123.c",
        //   description: "해외주식 알림톡발송",
        //   manager: "홍길동",
        //   department: "금융시스템부",
        //   isChecked: "ok",
        //   dbioYn: "없음",
        //   sentAt: "2024-11-11 13:00",
        //   checkedAt: "2024-11-11 13:00"
        // },
        // {
        //   id: 2,
        //   task: "/07.골드넷플러스_UI_플랫폼/03.Web_화면",
        //   path: "/21856/ABF/",
        //   attachedFile: "pgfram609.c",
        //   program: "liba123.c",
        //   description: "해외주식 알림톡발송",
        //   manager: "홍길동",
        //   department: "금융시스템부",
        //   isChecked: "ok",
        //   dbioYn: "없음",
        //   sentAt: "2024-11-11 13:00",
        //   checkedAt: "2024-11-11 13:00"
        // },
        // {
        //   id: 3,
        //   task: "/07.골드넷플러스_UI_플랫폼/03.Web_화면",
        //   path: "/21856/ABF/",
        //   attachedFile: "pgfram609.c",
        //   program: "liba123.c",
        //   description: "해외주식 알림톡발송",
        //   manager: "홍길동",
        //   department: "금융시스템부",
        //   isChecked: "ok",
        //   dbioYn: "없음",
        //   sentAt: "2024-11-11 13:00",
        //   checkedAt: "2024-11-11 13:00"
        // },
      ],
      rowsBottomTableTest: [
        {
          id: 1,
          task: "/07.골드넷플러스_UI_플랫폼/03.Web_화면",
          path: "/21856/ABF/",
        },
        {
          id: 2,
          task: "/07.골드넷플러스_UI_플랫폼/03.Web_화면",
          path: "/21856/ABF/",
        },
        {
          id: 3,
          task: "/07.골드넷플러스_UI_플랫폼/03.Web_화면",
          path: "/21856/ABF/",
        },
        {
          id: 1,
          task: "/07.골드넷플러스_UI_플랫폼/03.Web_화면",
          path: "/21856/ABF/",
        },
        {
          id: 2,
          task: "/07.골드넷플러스_UI_플랫폼/03.Web_화면",
          path: "/21856/ABF/",
        },
        {
          id: 3,
          task: "/07.골드넷플러스_UI_플랫폼/03.Web_화면",
          path: "/21856/ABF/",
        },
        {
          id: 1,
          task: "/07.골드넷플러스_UI_플랫폼/03.Web_화면",
          path: "/21856/ABF/",
        },
        {
          id: 2,
          task: "/07.골드넷플러스_UI_플랫폼/03.Web_화면",
          path: "/21856/ABF/",
        },
        {
          id: 3,
          task: "/07.골드넷플러스_UI_플랫폼/03.Web_화면",
          path: "/21856/ABF/",
        },
        {
          id: 1,
          task: "/07.골드넷플러스_UI_플랫폼/03.Web_화면",
          path: "/21856/ABF/",
        },
        {
          id: 2,
          task: "/07.골드넷플러스_UI_플랫폼/03.Web_화면",
          path: "/21856/ABF/",
        },
        {
          id: 3,
          task: "/07.골드넷플러스_UI_플랫폼/03.Web_화면",
          path: "/21856/ABF/",
        },
        {
          id: 1,
          task: "/07.골드넷플러스_UI_플랫폼/03.Web_화면",
          path: "/21856/ABF/",
        },
        {
          id: 2,
          task: "/07.골드넷플러스_UI_플랫폼/03.Web_화면",
          path: "/21856/ABF/",
        },
        {
          id: 3,
          task: "/07.골드넷플러스_UI_플랫폼/03.Web_화면",
          path: "/21856/ABF/",
        },
      ],
      resultData: []
    }
  },
  computed: {
    // 계산된 속성 정의
    reversedMessage() {
      return this.message.split('').reverse().join('');
    },
  },

  methods: {
    // 메서드 정의
    async fetchData() {
      this.loading = true;
      this.error = null;

      // try {
        axios.get('http://localhost:9000/api/EffectAnalsys')
        .then(response => {
          this.rowsTopTable = response.data.data;
        })
        .catch(error => {
        console.error(error);
    });
    },
    async getBottomData(row) {
      this.loading = true;
      this.error = null;

      this.rowsBottomTable = row.impactList;
    },
    async getBottomDataInfinite(row) {
      this.loading = true;
      this.error = null;

      this.rowsBottomTable.push(row.impactList);
    }
  },

  watch: {
    // 데이터 변경 감시
    message(newVal, oldVal) {
      console.log(`Message changed from ${oldVal} to ${newVal}`);
    },
  },

  mounted() {
    // 컴포넌트가 마운트된 후 호출되는 라이프사이클 훅
    console.log('Component mounted');
    this.fetchData();
  },

  beforeUnmount() {
    // 기존 beforeDestroy의 로직을 여기로 옮기면 됩니다.
    console.log('Component will be destroyed');
  },
}
</script>

<!--<style>-->
<!--.eff-analysis-sub-header {-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--}-->

<!--.eff-analysis-sub-header img {-->
<!--  margin-right: 32px;-->
<!--}-->

<!--.eff-analysis-sub-header .basic-button {-->
<!--  margin-left: 18px;-->
<!--}-->
<!--</style>-->