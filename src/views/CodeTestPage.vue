<template>
  <SubHeader>
<!--    <template #content>-->
<!--      <div class="eff-analysis-sub-header">-->
<!--        <img :src="require(`@/assets/icons/refresh.svg`)" alt="초기화" width="20px">-->
<!--      </div>-->
<!--    </template>-->
  </SubHeader>
  <article class="page-area">
    <section style="margin-top: 20px">
      <BasicTable :columns="columns" :rows="this.resultData" />
    </section>
  </article>
</template>

<script>
import BasicTable from "@/components/common/BasicTable";
import SubHeader from "@/components/layout/SubHeader";
import axios from 'axios';

export default {
  name: 'CodeTestPage',
  components: {
    BasicTable,
    SubHeader
  },
  data() {
    return {
      columns: [
        { label: '경로', field: 'wrFilePath' },
        { label: '파일명', field: 'fileName' },
        { label: '리비전(빌드버전)', field: 'fileVersion' },
        {
          label: '완료일시',
          field: 'expectDt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd HH:mm',
          dateOutputFormat: 'yyyy/MM/dd HH:mm',
        },
        { label: '총이슈', field: 'issueCount', type: 'number' },
        { label: '매우위험', field: 'risk1IssueCount', type: 'number' },
        { label: '위험', field: 'risk2IssueCount', type: 'number' },
        { label: '보통', field: 'risk3IssueCount', type: 'number' },
        { label: '낮음', field: 'risk4IssueCount', type: 'number' },
        {
          label: '보고서', field: 'report', sortable: false, type: 'button', btnText: "다운",
          onClick: (row) => {
            console.log(row)
          }
        }
      ],
      rows: [
        { id: 1, path: "/CBB/SERVICE_MODULE/", file: 'kaba119.c', revision: 20, completedAt: "2024-11-11 13:00", total: 1000, extreme: 1000, dangerous: 1000, medium: 1000, low: 1000, report: "" },
        { id: 2, path: "/CBB/SERVICE_MODULE/", file: 'kaba119.c', revision: 20, completedAt: "2024-11-11 13:00", total: 1000, extreme: 1000, dangerous: 1000, medium: 1000, low: 1000, report: "" },
        { id: 3, path: "/CBB/SERVICE_MODULE/", file: 'kaba119.c', revision: 20, completedAt: "2024-11-11 13:00", total: 1000, extreme: 1000, dangerous: 1000, medium: 1000, low: 1000, report: "" },
      ],
      resultData: [],
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
          this.resultData = {"inspectionResultIdx":20,"vcsType":"SR_SILHOUETTE","gitBranch":null,"moduleGroup":"90978","fileVersion":23,"scanId":9777,"fileName":"ICT예산집행","searchParamName":"SKKTSFT_098f","filePath":"/SKK/SERVICE_MODULE/","wrFilePath":"/SKK/VIEW/","issueCount":5,"risk1IssueCount":1,"risk2IssueCount":0,"risk3IssueCount":2,"risk4IssueCount":0,"risk5IssueCount":2,"hash":"asdasdavsdestrasdas","physicalLoc":500,"buildLoc":20,"commentLoc":45,"expectDt":"2024-11-08T18:19:04.707","inspectDt":"2024-11-07T18:19:04.707","createDt":"2024-11-08T18:19:04.707","archivedFlag":"N","wrCode":"WR00000-DP7"}
          console.log('Data fetched successfully:', this.items);
          console.log(this.resultData);

        } else if (response.status === 204) {
          // 데이터가 없을 경우 (No Content)
          console.warn('No data available.');
          this.errorMessage = '데이터가 없습니다.';
        }

      } catch (error) {
        this.resultData = [{"inspectionResultIdx":20,"vcsType":"SR_SILHOUETTE","gitBranch":null,"moduleGroup":"90978","fileVersion":23,"scanId":9777,"fileName":"ICT예산집행","searchParamName":"SKKTSFT_098f","filePath":"/SKK/SERVICE_MODULE/","wrFilePath":"/SKK/VIEW/","issueCount":5,"risk1IssueCount":1,"risk2IssueCount":0,"risk3IssueCount":2,"risk4IssueCount":0,"risk5IssueCount":2,"hash":"asdasdavsdestrasdas","physicalLoc":500,"buildLoc":20,"commentLoc":45,"expectDt":"2024-11-08T18:19:04.707","inspectDt":"2024-11-07T18:19:04.707","createDt":"2024-11-08T18:19:04.707","archivedFlag":"N","wrCode":"WR00000-DP7"}]
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