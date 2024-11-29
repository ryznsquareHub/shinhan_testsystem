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
      <BasicTable :columns="columns" :rows="this.tableList" />
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
          field: 'kk', // Matches the 'link' field in JSON
          sortable: false,
          type: 'button',
          btnText: "다운",
          onClick: (row) => {
            console.log(row);
          }
        }
      ],

      rows: [
        // { id: 1, path: "/CBB/SERVICE_MODULE/", file: 'kaba119.c', function: 100, line: 100, changedLine: 100, server: '20011_INF', report: 'button' },
        // { id: 2, path: "/CBB/SERVICE_MODULE/", file: 'kaba119.c', function: 100, line: 100, changedLine: 100, server: '20011_INF', report: 'button' },
        // { id: 3, path: "/CBB/SERVICE_MODULE/", file: 'kaba119.c', function: 100, line: 100, changedLine: 100, server: '20011_INF', report: 'button' },
      ],
      tableList: [],
      tempDataDump: {
        "code": 200,
        "message": "요청 성공",
        "data": [
          {
            "docWrFileIdx": 123,
            "wrCode": "WR99995-DP99",
            "wrFileName": "tetsHHAI",
            "wrFilePath": "/TEST/BATCH/",
            "wrFileVersion": 99,
            "moduleGroup": 7999997,
            "silGroupId": "zzz4444",
            "searchFileName": "zzz4444",
            "path": "/running/tmtest/proframe/app/src/TEST/bat/zzzz4444.c",
            "requestPath": "zzz4444",
            "statement": 20.94,
            "branch": 14.28,
            "function": 21.73,
            "call": 21.27,
            "mdcc": 1.48,
            "line": 19.32,
            "entry": 1.0,
            "exit": -1.0,
            "modfunc": -1.0,
            "modline": 0.0,
            "link": "https://test.com:9443/module/source?moduleid=673ad50c08783b51c1434e61&readonly=guest",
            "createDt": "2024-11-19T10:00:17.518637",
            "isArchived": false,
            "isOK": null
          },
          {
            "docWrFileIdx": 123,
            "wrCode": "WR99995-DP99",
            "wrFileName": "tetsHHAI",
            "wrFilePath": "/TEST/BATCH/",
            "wrFileVersion": 99,
            "moduleGroup": 7999997,
            "silGroupId": "zzz4444",
            "searchFileName": "zzz4444",
            "path": "/running/tmtest/proframe/app/src/TEST/bat/zzzz4444.c",
            "requestPath": "zzz4444",
            "statement": 20.94,
            "branch": 14.28,
            "function": 21.73,
            "call": 21.27,
            "mdcc": 1.48,
            "line": 19.32,
            "entry": 1.0,
            "exit": -1.0,
            "modfunc": -1.0,
            "modline": 0.0,
            "link": "https://test.com:9443/module/source?moduleid=673ad50c08783b51c1434e61&readonly=guest",
            "createDt": "2024-11-19T10:00:17.518637",
            "isArchived": false,
            "isOK": null
          },
          {
            "docWrFileIdx": 123,
            "wrCode": "WR99995-DP99",
            "wrFileName": "tetsHHAI",
            "wrFilePath": "/TEST/BATCH/",
            "wrFileVersion": 99,
            "moduleGroup": 7999997,
            "silGroupId": "zzz4444",
            "searchFileName": "zzz4444",
            "path": "/running/tmtest/proframe/app/src/TEST/bat/zzzz4444.c",
            "requestPath": "zzz4444",
            "statement": 20.94,
            "branch": 14.28,
            "function": 21.73,
            "call": 21.27,
            "mdcc": 1.48,
            "line": 19.32,
            "entry": 1.0,
            "exit": -1.0,
            "modfunc": -1.0,
            "modline": 0.0,
            "link": "https://test.com:9443/module/source?moduleid=673ad50c08783b51c1434e61&readonly=guest",
            "createDt": "2024-11-19T10:00:17.518637",
            "isArchived": false,
            "isOK": null
          },
          {
            "docWrFileIdx": 123,
            "wrCode": "WR99995-DP99",
            "wrFileName": "tetsHHAI",
            "wrFilePath": "/TEST/BATCH/",
            "wrFileVersion": 99,
            "moduleGroup": 7999997,
            "silGroupId": "zzz4444",
            "searchFileName": "zzz4444",
            "path": "/running/tmtest/proframe/app/src/TEST/bat/zzzz4444.c",
            "requestPath": "zzz4444",
            "statement": 20.94,
            "branch": 14.28,
            "function": 21.73,
            "call": 21.27,
            "mdcc": 1.48,
            "line": 19.32,
            "entry": 1.0,
            "exit": -1.0,
            "modfunc": -1.0,
            "modline": 0.0,
            "link": "https://test.com:9443/module/source?moduleid=673ad50c08783b51c1434e61&readonly=guest",
            "createDt": "2024-11-19T10:00:17.518637",
            "isArchived": false,
            "isOK": null
          },
          {
            "docWrFileIdx": 123,
            "wrCode": "WR99995-DP99",
            "wrFileName": "tetsHHAI",
            "wrFilePath": "/TEST/BATCH/",
            "wrFileVersion": 99,
            "moduleGroup": 7999997,
            "silGroupId": "zzz4444",
            "searchFileName": "zzz4444",
            "path": "/running/tmtest/proframe/app/src/TEST/bat/zzzz4444.c",
            "requestPath": "zzz4444",
            "statement": 20.94,
            "branch": 14.28,
            "function": 21.73,
            "call": 21.27,
            "mdcc": 1.48,
            "line": 19.32,
            "entry": 1.0,
            "exit": -1.0,
            "modfunc": -1.0,
            "modline": 0.0,
            "link": "https://test.com:9443/module/source?moduleid=673ad50c08783b51c1434e61&readonly=guest",
            "createDt": "2024-11-19T10:00:17.518637",
            "isArchived": false,
            "isOK": null
          },
          {
            "docWrFileIdx": 123,
            "wrCode": "WR99995-DP99",
            "wrFileName": "tetsHHAI",
            "wrFilePath": "/TEST/BATCH/",
            "wrFileVersion": 99,
            "moduleGroup": 7999997,
            "silGroupId": "zzz4444",
            "searchFileName": "zzz4444",
            "path": "/running/tmtest/proframe/app/src/TEST/bat/zzzz4444.c",
            "requestPath": "zzz4444",
            "statement": 20.94,
            "branch": 14.28,
            "function": 21.73,
            "call": 21.27,
            "mdcc": 1.48,
            "line": 19.32,
            "entry": 1.0,
            "exit": -1.0,
            "modfunc": -1.0,
            "modline": 0.0,
            "link": "https://test.com:9443/module/source?moduleid=673ad50c08783b51c1434e61&readonly=guest",
            "createDt": "2024-11-19T10:00:17.518637",
            "isArchived": false,
            "isOK": null
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

      // try {
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