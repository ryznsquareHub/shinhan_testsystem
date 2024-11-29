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
      <BasicTableInfinite :columns="columns" :rows="this.tableList" />
    </section>
  </article>
</template>

<script>
import BasicTable from "@/components/common/BasicTable";
import BasicTableInfinite from "@/components/common/BasicTableInfinite.vue";
import SubHeader from "@/components/layout/SubHeader";
import axios from 'axios';

export default {
  name: 'CodeTestPage',
  components: {
    BasicTable,
    BasicTableInfinite,
    SubHeader
  },
  data() {
    return {
      columns: [
        { label: '경로', field: 'filePath'/* , width: '190px' */ },
        { label: '파일명', field: 'fileName' },
        { label: '리비전(빌드버전)', field: 'fileVersion' },
        // {
        //   label: '완료일시',
        //   field: 'expectDt',
        //   type: 'date',
        //   dateInputFormat: 'yyyy-MM-dd  HH:mm:ss',
        //   dateOutputFormat: 'yyyy/MM/dd HH:mm:ss',
        // },
        { label: '완료일시', field: 'issueCount', type: 'number' },
        { label: '총이슈', field: 'issueCount', type: 'number' },
        { label: '매우위험', field: 'risk1IssueCount', type: 'number' },
        { label: '위험', field: 'risk2IssueCount', type: 'number' },
        { label: '보통', field: 'risk3IssueCount', type: 'number' },
        { label: '낮음', field: 'risk4IssueCount', type: 'number' },
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
        // { id: 1, path: "/CBB/SERVICE_MODULE/", file: 'kaba119.c', revision: 20, completedAt: "2024-11-11 13:00", total: 1000, extreme: 1000, dangerous: 1000, medium: 1000, low: 1000, report: "" },
        // { id: 2, path: "/CBB/SERVICE_MODULE/", file: 'kaba119.c', revision: 20, completedAt: "2024-11-11 13:00", total: 1000, extreme: 1000, dangerous: 1000, medium: 1000, low: 1000, report: "" },
        // { id: 3, path: "/CBB/SERVICE_MODULE/", file: 'kaba119.c', revision: 20, completedAt: "2024-11-11 13:00", total: 1000, extreme: 1000, dangerous: 1000, medium: 1000, low: 1000, report: "" },
      ],
      resultData: [],
      tableList: [
        /*       {
                NO: "1", createdAt: "2024-11-11 13:00", channel: "test", doc: "test", testName: "test", testResult: "test",
                regUser: "test", note: "test"
              } */
      ],
      tempDataDump: {
        "code": 200,
        "message": "요청 성공",
        "data": [
          {
            "inspectionResultIdx": 999,
            "vcsType": "SR_SILHOUETTE",
            "gitBranch": "main",
            "moduleGroup": "99999",
            "fileVersion": 99,
            "scanId": 9999,
            "fileName": "테스트파일",
            "searchParamName": "aaaaaaa7",
            "filePath": "/path/to/file",
            "wrFilePath": "/path/to/wrFile",
            "issueCount": 5,
            "risk1IssueCount": 0,
            "risk2IssueCount": 0,
            "risk3IssueCount": 2,
            "risk4IssueCount": 3,
            "risk5IssueCount": 0,
            "hash": "97fa85asdd1ejkaf25cb2217ca6d0622",
            "physicalLoc": 786,
            "buildLoc": 342,
            "commentLoc": 320,
            "expectDt": "2024-11-19T10:54:56.350652",
            "inspectDt": "2024-11-19T10:55:21.84046",
            "createDt": "2024-11-19T10:54:56.350652",
            "archivedFlag": "N",
            "wrCode": "WR-12345"
          }, {
            "inspectionResultIdx": 999,
            "vcsType": "SR_SILHOUETTE",
            "gitBranch": "main",
            "moduleGroup": "99999",
            "fileVersion": 99,
            "scanId": 9999,
            "fileName": "테스트파일",
            "searchParamName": "aaaaaaa7",
            "filePath": "/path/to/file",
            "wrFilePath": "/path/to/wrFile",
            "issueCount": 5,
            "risk1IssueCount": 0,
            "risk2IssueCount": 0,
            "risk3IssueCount": 2,
            "risk4IssueCount": 3,
            "risk5IssueCount": 0,
            "hash": "97fa85asdd1ejkaf25cb2217ca6d0622",
            "physicalLoc": 786,
            "buildLoc": 342,
            "commentLoc": 320,
            "expectDt": "2024-11-19T10:54:56.350652",
            "inspectDt": "2024-11-19T10:55:21.84046",
            "createDt": "2024-11-19T10:54:56.350652",
            "archivedFlag": "N",
            "wrCode": "WR-12345"
          }, {
            "inspectionResultIdx": 999,
            "vcsType": "SR_SILHOUETTE",
            "gitBranch": "main",
            "moduleGroup": "99999",
            "fileVersion": 99,
            "scanId": 9999,
            "fileName": "테스트파일",
            "searchParamName": "aaaaaaa7",
            "filePath": "/path/to/file",
            "wrFilePath": "/path/to/wrFile",
            "issueCount": 5,
            "risk1IssueCount": 0,
            "risk2IssueCount": 0,
            "risk3IssueCount": 2,
            "risk4IssueCount": 3,
            "risk5IssueCount": 0,
            "hash": "97fa85asdd1ejkaf25cb2217ca6d0622",
            "physicalLoc": 786,
            "buildLoc": 342,
            "commentLoc": 320,
            "expectDt": "2024-11-19T10:54:56.350652",
            "inspectDt": "2024-11-19T10:55:21.84046",
            "createDt": "2024-11-19T10:54:56.350652",
            "archivedFlag": "N",
            "wrCode": "WR-12345"
          }, {
            "inspectionResultIdx": 999,
            "vcsType": "SR_SILHOUETTE",
            "gitBranch": "main",
            "moduleGroup": "99999",
            "fileVersion": 99,
            "scanId": 9999,
            "fileName": "테스트파일",
            "searchParamName": "aaaaaaa7",
            "filePath": "/path/to/file",
            "wrFilePath": "/path/to/wrFile",
            "issueCount": 5,
            "risk1IssueCount": 0,
            "risk2IssueCount": 0,
            "risk3IssueCount": 2,
            "risk4IssueCount": 3,
            "risk5IssueCount": 0,
            "hash": "97fa85asdd1ejkaf25cb2217ca6d0622",
            "physicalLoc": 786,
            "buildLoc": 342,
            "commentLoc": 320,
            "expectDt": "2024-11-19T10:54:56.350652",
            "inspectDt": "2024-11-19T10:55:21.84046",
            "createDt": "2024-11-19T10:54:56.350652",
            "archivedFlag": "N",
            "wrCode": "WR-12345"
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
    async initData() {
      this.loading = true;
      this.error = null;

      axios.get('http://localhost:9000/api/test')
        .then(response => {
          const newRows = this.tempDataDump.data;
          // const newRows = response.data.data;
          let result_data;
          if (response?.data?.hasMore == true) {
            result_data = _.concat(newRows, { isMoreRow: true });
          } else {
            result_data = _.concat(newRows, { isMoreRow: false });
          }
          this.tableList = result_data;
          console.log(this.tableList);
        })
        .catch(error => {
          console.error(error);
        });

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
    this.initData();
  },

  beforeUnmount() {
    // 기존 beforeDestroy의 로직을 여기로 옮기면 됩니다.
    console.log('Component will be destroyed');
  },
}
</script>