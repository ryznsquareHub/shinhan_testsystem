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
    <section style="margin-top: 20px">
      <BasicTable :columns="columnsTopTable" :rows="rowsTopTable"/>
    </section>

    <hr class="blue-divider">

    <section style="margin-top: 20px">
<!--      <div class="flex-btn-box" style="margin-bottom: 20px;">-->
<!--        <BasicButton text="선택 피드백 요청"/>-->
<!--        <BasicButton text="전체 피드백 요청"/>-->
<!--      </div>-->
      <BasicTable :columns="columnsBottomTable" :rows="this.resultData"/>
    </section>
  </article>
</template>

<script setup>
import SubHeader from "@/components/layout/SubHeader";
</script>

<script>
import BasicTable from "@/components/common/BasicTable";
// import BasicToggle from "@/components/common/BasicToggle";
// import BasicButton from "@/components/common/BasicButton";
import axios from 'axios';

export default {
  name: 'EffectAnalysisPage',
  components: {
    BasicTable
  },
  data() {
    return {
      selectedOption: null,
      columnsTopTable: [
        {label: '경로', field: 'path'},
        {label: '파일명', field: 'file'},
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
        }
      ],
      rowsTopTable: [
        {id: 1, path: "/AAA/SERVICE_MODULE/", file: "kiba112.c", analyzedAt: "2024-11-11 13:00", checkedCount: "1/5"},
        {id: 2, path: "/AAA/SERVICE_MODULE/", file: "kiba112.c", analyzedAt: "2024-11-11 13:00", checkedCount: "1/5"},
        {id: 3, path: "/AAA/SERVICE_MODULE/", file: "kiba112.c", analyzedAt: "2024-11-11 13:00", checkedCount: "1/5"},
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
        {
          id: 1,
          task: "/07.골드넷플러스_UI_플랫폼/03.Web_화면",
          path: "/21856/ABF/",
          attachedFile: "pgfram609.c",
          program: "liba123.c",
          description: "해외주식 알림톡발송",
          manager: "홍길동",
          department: "금융시스템부",
          isChecked: "ok",
          dbioYn: "없음",
          sentAt: "2024-11-11 13:00",
          checkedAt: "2024-11-11 13:00"
        },
        {
          id: 2,
          task: "/07.골드넷플러스_UI_플랫폼/03.Web_화면",
          path: "/21856/ABF/",
          attachedFile: "pgfram609.c",
          program: "liba123.c",
          description: "해외주식 알림톡발송",
          manager: "홍길동",
          department: "금융시스템부",
          isChecked: "ok",
          dbioYn: "없음",
          sentAt: "2024-11-11 13:00",
          checkedAt: "2024-11-11 13:00"
        },
        {
          id: 3,
          task: "/07.골드넷플러스_UI_플랫폼/03.Web_화면",
          path: "/21856/ABF/",
          attachedFile: "pgfram609.c",
          program: "liba123.c",
          description: "해외주식 알림톡발송",
          manager: "홍길동",
          department: "금융시스템부",
          isChecked: "ok",
          dbioYn: "없음",
          sentAt: "2024-11-11 13:00",
          checkedAt: "2024-11-11 13:00"
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

      try {
        const response = await axios.get('https://api.example.com/items'); // 서버의 URL로 변경

        // HTTP 상태 코드에 따른 분기 처리
        if (response.status === 200) {
          // 성공적으로 데이터를 가져온 경우
          // this.resultData = response.data;
          // this.resultData = {"inspectionResultIdx":20,"vcsType":"SR_SILHOUETTE","gitBranch":null,"moduleGroup":"90978","fileVersion":23,"scanId":9777,"fileName":"ICT예산집행","searchParamName":"SKKTSFT_098f","filePath":"/SKK/SERVICE_MODULE/","wrFilePath":"/SKK/VIEW/","issueCount":5,"risk1IssueCount":1,"risk2IssueCount":0,"risk3IssueCount":2,"risk4IssueCount":0,"risk5IssueCount":2,"hash":"asdasdavsdestrasdas","physicalLoc":500,"buildLoc":20,"commentLoc":45,"expectDt":"2024-11-08T18:19:04.707","inspectDt":"2024-11-07T18:19:04.707","createDt":"2024-11-08T18:19:04.707","archivedFlag":"N","wrCode":"WR00000-DP7"}
          console.log('Data fetched successfully:', this.items);
          console.log(this.resultData);

        } else if (response.status === 204) {
          // 데이터가 없을 경우 (No Content)
          console.warn('No data available.');
          this.errorMessage = '데이터가 없습니다.';
        }
      } catch (error) {
        this.resultData = [{
          "docWrFileIdx": 0,
          "wrCode": "WR00000-DP1",
          "wrFileName": "ca401233",
          "wrFilePath": "/BBBAAASS/SERVICE_MODULE/",
          "wrFileVersion": "8",
          "moduleGroup": "20077",
          "silGroupId": "계좌",
          "searchFileName": "sbca401231",
          "impactResultIdx": "8",
          "tgPgm": "1SSMS01",
          "tgPath": "/212/KBBS/",
          "typeCd": "FILE",
          "prjKorNm": "999.화면",
          "relPgm": "ssssas.c",
          "fileDesc": "작업요청사항",
          "prjCd": 0,
          "prjOrgNm": "/01_UI_플랫폼/999.화면/업무",
          "prjId": "9999999",
          "name": "홍길동",
          "dbrnName": "금융솔루션/부서",
          "teamNm": "금융시스템팀/부처",
          "email": "gs123456@shinhanTest.com",
          "createDt": "2024-11-08T18:19:04.707",
          "dbioFlag": "N",
          "feedbackStatus": "OK"
        }]

        this.error = '데이터를 불러오는 중 오류가 발생했습니다.';
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
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