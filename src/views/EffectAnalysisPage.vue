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
      <BasicTable :columns="columnsTopTable" :rows="rowsTopTable" />
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
      <BasicTableInfinite :columns="columnsBottomTable" :rows="this.rowsBottomTable"
        :getBottomDataInfinite="this.getBottomDataInfinite" />
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
          label: '경로', field: 'wrFilePath',
          onClick: (row) => {
            console.log(row)
            this.getBottomData(row);
          }
        },

        { label: '파일명', field: 'wrFileName' },
        {
          label: '분석일시',
          field: 'analyzedAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd HH:mm',
          dateOutputFormat: 'yyyy/MM/dd HH:mm',
        },
        { label: '확인건수', field: 'checkedCount' },
        {
          label: '', field: 'button', sortable: false, type: 'button', btnText: "상세보기",
          onClick: (row) => {
            console.log(row)
          }
        },
        { label: 'impactList', field: 'impactList', hidden: true },
      ],
      rowsTopTable: [
        // {id: 1, path2: "/AAA/SERVICE_MODULE/", file: "kiba112.c", analyzedAt: "2024-11-11 13:00", checkedCount: "1/5"},
        // {id: 2, path2: "/AAA/SERVICE_MODULE/", file: "kiba112.c", analyzedAt: "2024-11-11 13:00", checkedCount: "1/5"},
        // {id: 3, path2: "/AAA/SERVICE_MODULE/", file: "kiba112.c", analyzedAt: "2024-11-11 13:00", checkedCount: "1/5"},
      ],
      columnsBottomTable: [
        { "label": "업무", "field": "prjKorNm" },
        { "label": "경로", "field": "wrFilePath" },
        { "label": "참조파일", "field": "wrCode" },
        { "label": "연관프로그램", "field": "wrFileName" },
        { "label": "설명", "field": "fileDesc" },
        { "label": "담당자", "field": "name" },
        { "label": "부서", "field": "dbrnName" },
        { "label": "팀명", "field": "dbrnName" },
        { "label": "확인상태", "field": "feedbackStatus" },
        { "label": "DBIO여부", "field": "dbioFlag" },
        {
          "label": "발송일",
          "field": "createDt",
          "type": "date",
          "dateInputFormat": "yyyy-MM-dd HH:mm",
          "dateOutputFormat": "yyyy/MM/dd HH:mm"
        },
        {
          "label": "확인일",
          "field": "checkedAt",
          "type": "date",
          "dateInputFormat": "yyyy-MM-dd HH:mm",
          "dateOutputFormat": "yyyy/MM/dd HH:mm"
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
      resultData: [],
      tempDataDump: {
        "code": 200,
        "message": "요청 성공",
        "data": [
          {
            "idx": 301,
            "wrCode": "WR99995-DP99",
            "wrFileName": "ss_proc",
            "wrFilePath": "/BDC/BIZ_MODULE/",
            "createDt": "2024-11-19T10:14:45.071301",
            "impactList": [
              {
                "docWrFileIdx": 301,
                "wrCode": "WR99995-DP99",
                "wrFileName": "퇴직 처리 1",
                "wrFilePath": "/ZZZ/TEST/1/",
                "wrFileVersion": 999,
                "moduleGroup": "99999",
                "silGroupId": "test_proc",
                "typeCd": "FILE",
                "prjKorNm": "테스트계",
                "fileDesc": "퇴직연금 지급 1"
              },
              {
                "docWrFileIdx": 302,
                "wrCode": "WR99995-DP99",
                "wrFileName": "퇴직 처리 2",
                "wrFilePath": "/ZZZ/TEST/2/",
                "wrFileVersion": 998,
                "moduleGroup": "99998",
                "silGroupId": "test_proc",
                "typeCd": "FILE",
                "prjKorNm": "테스트계",
                "fileDesc": "퇴직연금 지급 2"
              },
              {
                "docWrFileIdx": 303,
                "wrCode": "WR99995-DP99",
                "wrFileName": "퇴직 처리 3",
                "wrFilePath": "/ZZZ/TEST/3/",
                "wrFileVersion": 997,
                "moduleGroup": "99997",
                "silGroupId": "test_proc",
                "typeCd": "FILE",
                "prjKorNm": "테스트계",
                "fileDesc": "퇴직연금 지급 3"
              },
              {
                "docWrFileIdx": 304,
                "wrCode": "WR99995-DP99",
                "wrFileName": "퇴직 처리 4",
                "wrFilePath": "/ZZZ/TEST/4/",
                "wrFileVersion": 996,
                "moduleGroup": "99996",
                "silGroupId": "test_proc",
                "typeCd": "FILE",
                "prjKorNm": "테스트계",
                "fileDesc": "퇴직연금 지급 4"
              },
              {
                "docWrFileIdx": 305,
                "wrCode": "WR99995-DP99",
                "wrFileName": "퇴직 처리 5",
                "wrFilePath": "/ZZZ/TEST/5/",
                "wrFileVersion": 995,
                "moduleGroup": "99995",
                "silGroupId": "test_proc",
                "typeCd": "FILE",
                "prjKorNm": "테스트계",
                "fileDesc": "퇴직연금 지급 5"
              },
              {
                "docWrFileIdx": 306,
                "wrCode": "WR99995-DP99",
                "wrFileName": "퇴직 처리 6",
                "wrFilePath": "/ZZZ/TEST/6/",
                "wrFileVersion": 994,
                "moduleGroup": "99994",
                "silGroupId": "test_proc",
                "typeCd": "FILE",
                "prjKorNm": "테스트계",
                "fileDesc": "퇴직연금 지급 6"
              },
              {
                "docWrFileIdx": 307,
                "wrCode": "WR99995-DP99",
                "wrFileName": "퇴직 처리 7",
                "wrFilePath": "/ZZZ/TEST/7/",
                "wrFileVersion": 993,
                "moduleGroup": "99993",
                "silGroupId": "test_proc",
                "typeCd": "FILE",
                "prjKorNm": "테스트계",
                "fileDesc": "퇴직연금 지급 7"
              },
              {
                "docWrFileIdx": 308,
                "wrCode": "WR99995-DP99",
                "wrFileName": "퇴직 처리 8",
                "wrFilePath": "/ZZZ/TEST/8/",
                "wrFileVersion": 992,
                "moduleGroup": "99992",
                "silGroupId": "test_proc",
                "typeCd": "FILE",
                "prjKorNm": "테스트계",
                "fileDesc": "퇴직연금 지급 8"
              },
              {
                "docWrFileIdx": 309,
                "wrCode": "WR99995-DP99",
                "wrFileName": "퇴직 처리 9",
                "wrFilePath": "/ZZZ/TEST/9/",
                "wrFileVersion": 991,
                "moduleGroup": "99991",
                "silGroupId": "test_proc",
                "typeCd": "FILE",
                "prjKorNm": "테스트계",
                "fileDesc": "퇴직연금 지급 9"
              },
              {
                "docWrFileIdx": 310,
                "wrCode": "WR99995-DP99",
                "wrFileName": "퇴직 처리 10",
                "wrFilePath": "/ZZZ/TEST/10/",
                "wrFileVersion": 990,
                "moduleGroup": "99990",
                "silGroupId": "test_proc",
                "typeCd": "FILE",
                "prjKorNm": "테스트계",
                "fileDesc": "퇴직연금 지급 10"
              },
              {
                "docWrFileIdx": 311,
                "wrCode": "WR99995-DP99",
                "wrFileName": "퇴직 처리 11",
                "wrFilePath": "/ZZZ/TEST/11/",
                "wrFileVersion": 989,
                "moduleGroup": "99989",
                "silGroupId": "test_proc",
                "typeCd": "FILE",
                "prjKorNm": "테스트계",
                "fileDesc": "퇴직연금 지급 11"
              },
              {
                "docWrFileIdx": 312,
                "wrCode": "WR99995-DP99",
                "wrFileName": "퇴직 처리 12",
                "wrFilePath": "/ZZZ/TEST/12/",
                "wrFileVersion": 988,
                "moduleGroup": "99988",
                "silGroupId": "test_proc",
                "typeCd": "FILE",
                "prjKorNm": "테스트계",
                "fileDesc": "퇴직연금 지급 12"
              },
              {
                "docWrFileIdx": 313,
                "wrCode": "WR99995-DP99",
                "wrFileName": "퇴직 처리 13",
                "wrFilePath": "/ZZZ/TEST/13/",
                "wrFileVersion": 987,
                "moduleGroup": "99987",
                "silGroupId": "test_proc",
                "typeCd": "FILE",
                "prjKorNm": "테스트계",
                "fileDesc": "퇴직연금 지급 13"
              },
              {
                "docWrFileIdx": 314,
                "wrCode": "WR99995-DP99",
                "wrFileName": "퇴직 처리 14",
                "wrFilePath": "/ZZZ/TEST/14/",
                "wrFileVersion": 986,
                "moduleGroup": "99986",
                "silGroupId": "test_proc",
                "typeCd": "FILE",
                "prjKorNm": "테스트계",
                "fileDesc": "퇴직연금 지급 14"
              },
              {
                "docWrFileIdx": 315,
                "wrCode": "WR99995-DP99",
                "wrFileName": "퇴직 처리 15",
                "wrFilePath": "/ZZZ/TEST/15/",
                "wrFileVersion": 985,
                "moduleGroup": "99985",
                "silGroupId": "test_proc",
                "typeCd": "FILE",
                "prjKorNm": "테스트계",
                "fileDesc": "퇴직연금 지급 15"
              }
            ],
            "total": 1,
            "checked": 0
          }
        ]
      }
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
          // this.rowsTopTable = response.data.data;
          this.rowsTopTable = this.tempDataDump.data;
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