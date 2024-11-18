<template>
  <SubHeader>
<!--    <template #content>-->
<!--      <div class="eff-analysis-sub-header">-->
<!--        <img :src="require(`@/assets/icons/refresh.svg`)" alt="초기화" width="20px">-->
<!--      </div>-->
<!--    </template>-->
  </SubHeader>
  <article class="page-area">
    <section>
      <BasicTable :columns="columns" :rows="this.resultData"/>
    </section>
  </article>
</template>

<script>
import BasicTable from "@/components/common/BasicTable";
import SubHeader from "@/components/layout/SubHeader";
import axios from 'axios';

export default {
  name: 'CodeCoveragePage',
  components: {
    BasicTable,
    SubHeader
  },
  data() {
    return {
      columns: [
        { label: '경로', field: 'wrFilePath' }, // Matches the 'wrFilePath' field in JSON
        { label: '파일명', field: 'wrFileName' }, // Matches the 'wrFileName' field in JSON
        { label: '함수', field: 'function' }, // Matches the 'function' field in JSON
        { label: '라인(%)', field: 'line', type: 'number' }, // Matches the 'line' field in JSON
        { label: '변경라인(%)', field: 'modline', type: 'number' }, // Matches the 'modline' field in JSON
        { label: '서버이름', field: 'silGroupId' }, // Matches the 'silGroupId' field in JSON
        {
          label: '보고서',
          field: 'link', // Assuming this represents the report link in JSON
          sortable: false,
          type: 'button',
          btnText: "다운",
          onClick: (row) => {
            console.log(row);
          }
        }
      ],
      rows: [
        { id:1, path:"/CBB/SERVICE_MODULE/", file: 'kaba119.c', function: 100, line: 100, changedLine: 100, server: '20011_INF', report: 'button' },
        { id:2, path:"/CBB/SERVICE_MODULE/", file: 'kaba119.c', function: 100, line: 100, changedLine: 100, server: '20011_INF', report: 'button' },
        { id:3, path:"/CBB/SERVICE_MODULE/", file: 'kaba119.c', function: 100, line: 100, changedLine: 100, server: '20011_INF', report: 'button' },
      ],
      resultData : [],
    }
  } ,
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
        this.resultData = [{"docWrFileIdx": 50, "wrCode": "WR000-DP5", "wrFileName": "ssssg", "wrFilePath": "/QQA/SERVICE_MODULE/", "wrFileVersion": 9, "moduleGroup": "20012", "silGroupId": "test", "searchFileName": "searchFileName", "path": "path", "requestPath": "requestPath", "statement": 88.0, "branch": 77.0, "function": 21.0, "call": 32.0, "mcdc": 11.0, "line": 55.0, "entry": 77.0, "exit": 68.0, "modfunc": 44.0, "modline": 22.0, "link": "www.test.com", "createDt": "2024-11-08T18:01:12.549", "isArchived": false, "isOK": false}, {"docWrFileIdx": 55, "wrCode": "WR0000-DP99", "wrFileName": "scr.g", "wrFilePath": "/24A/SERVICE_MODULE/", "wrFileVersion": 4, "moduleGroup": "20012", "silGroupId": "test", "searchFileName": "searchFileName", "path": "path", "requestPath": "requestPath", "statement": -1.0, "branch": -1.0, "function": -1.0, "call": -1.0, "mcdc": -1.0, "line": -1.0, "entry": -1.0, "exit": -1.0, "modfunc": -1.0, "modline": -1.0, "link": "www.test2.com", "createDt": "2024-11-08T18:01:12.549", "isArchived": false, "isOK": false}]

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