<template>
  <SubHeader>
    <template #content>
      <div class="eff-analysis-sub-header">
        <img :src="require(`@/assets/icons/refresh.svg`)" alt="초기화" width="20px">
        <BasicToggle :defaultActive="true" :handleChange="(v) => console.log(v)" label="헤더포함"/>
        <BasicButton text="영향도 수기발송"/>
      </div>
    </template>
  </SubHeader>
  <article class="page-area">
<!--    <section style="margin-top: 20px">-->
<!--      <BasicTableInfiniteTest-->
<!--        :columns="columnsTopTable"-->
<!--        :rows="rowsBottomTableTest"-->
<!--      />-->
<!--    </section>-->
    <section style="margin-top: 20px">
      <BasicTable :columns="columnsTopTable" :rows="rowsTopTable" enable-row-check/>
    </section>

    <hr class="blue-divider">

    <section style="margin-top: 20px">
      <div class="flex-btn-box" style="margin-bottom: 20px;">
        <BasicButton text="선택 피드백 요청"/>
        <BasicButton text="전체 피드백 요청"/>
      </div>
      <BasicTableInfinite
        :columns="columnsBottomTable"
        :rows="this.rowsBottomTable"
        enable-row-check
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
import BasicToggle from "@/components/common/BasicToggle";
import BasicButton from "@/components/common/BasicButton";
import axios from 'axios';
import BasicTableInfiniteTest from "@/components/common/BasicTableInfiniteTest.vue";

export default {
  name: 'EffectAnalysisPageNoHead',
  components: {
    BasicTable,
    BasicToggle,
    BasicButton,
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
            this.getBottomData();
            console.log(row)
          }
        },
        {label: 'impactList', field: 'impactList', hidden: true},
      ],
      rowsTopTable: [
        // {id: 1, path2: "/AAA/SERVICE_MODULE/", file: "kiba112.c", analyzedAt: "2024-11-11 13:00", checkedCount: "1/5"},
        // {id: 2, path2: "/AAA/SERVICE_MODULE/", file: "kiba112.c", analyzedAt: "2024-11-11 13:00", checkedCount: "1/5"},
        // {id: 3, path2: "/AAA/SERVICE_MODULE/", file: "kiba112.c", analyzedAt: "2024-11-11 13:00", checkedCount: "1/5"},
      ],
      columnsBottomTable: [
  { label: "NO", field: 'impactFeedbackIdx', sortable: false },
  { label: "업무", field: 'prjId', sortable: false },
  { label: "경로", field: 'wrFilePath', sortable: false },
  { label: "참조파일", field: 'tgPgm', sortable: false },
  { label: "연관프로그램", field: 'wrFileName', sortable: false },
  { label: "설명", field: 'senderOpinion', sortable: false },
  { label: "담당자", field: 'senderName', sortable: false },
  { label: "부서", field: 'senderDbrnNm', sortable: false },
  { label: "확인상태", field: 'feedbackStatus', sortable: false },
  { label: "DBIO여부", field: 'dbioFlag', sortable: false },
  {
    label: "발송일",
    field: 'dispatchDate',
    type: "date",
    dateInputFormat: "yyyy-MM-dd",
    dateOutputFormat: "yyyy/MM/dd",
    sortable: false
  },
  {
    label: "확인일",
    field: 'confirmationDate',
    type: "date",
    dateInputFormat: "yyyy-MM-dd",
    dateOutputFormat: "yyyy/MM/dd",
    sortable: false
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
      tempDataDump1: [
  {
    "wrFilePath": "/path/to/file1",
    "wrFileName": "file1.txt",
    "analyzedAt": "2024-11-10 12:30",
    "checkedCount": 12,
    "impactList": ["Impact A", "Impact B"]
  },
  {
    "wrFilePath": "/path/to/file2",
    "wrFileName": "file2.txt",
    "analyzedAt": "2024-11-11 15:45",
    "checkedCount": 7,
    "impactList": ["Impact C"]
  },
  {
    "wrFilePath": "/path/to/file3",
    "wrFileName": "file3.txt",
    "analyzedAt": "2024-11-12 09:20",
    "checkedCount": 5,
    "impactList": ["Impact D", "Impact E"]
  },
  {
    "wrFilePath": "/path/to/file4",
    "wrFileName": "file4.txt",
    "analyzedAt": "2024-11-13 17:10",
    "checkedCount": 3,
    "impactList": ["Impact F"]
  },
  {
    "wrFilePath": "/path/to/file5",
    "wrFileName": "file5.txt",
    "analyzedAt": "2024-11-14 11:00",
    "checkedCount": 9,
    "impactList": ["Impact G", "Impact H"]
  },
  {
    "wrFilePath": "/path/to/file6",
    "wrFileName": "file6.txt",
    "analyzedAt": "2024-11-15 14:25",
    "checkedCount": 15,
    "impactList": ["Impact I", "Impact J", "Impact K"]
  },
  {
    "wrFilePath": "/path/to/file7",
    "wrFileName": "file7.txt",
    "analyzedAt": "2024-11-16 16:50",
    "checkedCount": 8,
    "impactList": ["Impact L"]
  },
  {
    "wrFilePath": "/path/to/file8",
    "wrFileName": "file8.txt",
    "analyzedAt": "2024-11-17 10:05",
    "checkedCount": 4,
    "impactList": ["Impact M", "Impact N"]
  },
  {
    "wrFilePath": "/path/to/file9",
    "wrFileName": "file9.txt",
    "analyzedAt": "2024-11-18 18:40",
    "checkedCount": 10,
    "impactList": ["Impact O", "Impact P", "Impact Q"]
  },
  {
    "wrFilePath": "/path/to/file10",
    "wrFileName": "file10.txt",
    "analyzedAt": "2024-11-19 13:15",
    "checkedCount": 6,
    "impactList": ["Impact R"]
  }
],
tempDataDump2: [
  {
    "impactFeedbackIdx": 12,
    "wrCode": "WR1234-DP4",
    "wrFileName": "s1230041",
    "wrFilePath": "/KCC/SERVIC/",
    "tgPgm": "11231239.xml",
    "tgPath": "/target/path/1",
    "prjId": "PRJ001",
    "senderEmployee": "401732",
    "senderName": "홍길동",
    "senderDbrnCode": "D001",
    "senderDbrnNm": "금융시스템부",
    "senderEmail": "hong@example.com",
    "receiverEmployee": "401731",
    "receiverName": "김철수",
    "receiverDbrnCode": "R001",
    "receiverDbrnNm": "트레이딩시스템부",
    "receiverEmail": "kim@example.com",
    "directFlag": "Y",
    "dbioFlag": "Y",
    "senderOpinion": "확인 부탁드립니다.",
    "sentDt": "2024-11-20",
    "feedbackStatus": "DC",
    "replyDt": "2024-11-22",
    "receiverOpinion": "수정 필요",
    "assignerFlag": "N",
    "createDt": "2024-11-25 15:21:58",
    "dispatchDate": "2024-11-19",
    "targetPath": "/KCC/SERVIC/target_1",
    "department": "금융시스템부",
    "confirmationDate": "2024-11-22"
  },
  {
    "impactFeedbackIdx": 13,
    "wrCode": "WR1234-DP5",
    "wrFileName": "s1230042",
    "wrFilePath": "/KCC/SERVIC/",
    "tgPgm": "11231240.xml",
    "tgPath": "/target/path/2",
    "prjId": "PRJ002",
    "senderEmployee": "401733",
    "senderName": "이영희",
    "senderDbrnCode": "D002",
    "senderDbrnNm": "트레이딩시스템부",
    "senderEmail": "lee@example.com",
    "receiverEmployee": "401734",
    "receiverName": "박민수",
    "receiverDbrnCode": "R002",
    "receiverDbrnNm": "금융시스템부",
    "receiverEmail": "park@example.com",
    "directFlag": "N",
    "dbioFlag": "N",
    "senderOpinion": "다시 확인 부탁드립니다.",
    "sentDt": "2024-11-21",
    "feedbackStatus": "IC",
    "replyDt": "2024-11-24",
    "receiverOpinion": "확인 완료",
    "assignerFlag": "Y",
    "createDt": "2024-11-25 15:30:58",
    "dispatchDate": "2024-11-20",
    "targetPath": "/KCC/SERVIC/target_2",
    "department": "트레이딩시스템부",
    "confirmationDate": "2024-11-23"
  },
  {
    "impactFeedbackIdx": 14,
    "wrCode": "WR1234-DP6",
    "wrFileName": "s1230043",
    "wrFilePath": "/KCC/SERVIC/",
    "tgPgm": "11231241.xml",
    "tgPath": "/target/path/3",
    "prjId": "PRJ003",
    "senderEmployee": "401734",
    "senderName": "최수정",
    "senderDbrnCode": "D003",
    "senderDbrnNm": "금융시스템부",
    "senderEmail": "choi@example.com",
    "receiverEmployee": "401735",
    "receiverName": "정우성",
    "receiverDbrnCode": "R003",
    "receiverDbrnNm": "트레이딩시스템부",
    "receiverEmail": "jung@example.com",
    "directFlag": "Y",
    "dbioFlag": "N",
    "senderOpinion": "긴급 확인 부탁드립니다.",
    "sentDt": "2024-11-19",
    "feedbackStatus": "AP",
    "replyDt": "2024-11-20",
    "receiverOpinion": "완료",
    "assignerFlag": "N",
    "createDt": "2024-11-25 15:40:58",
    "dispatchDate": "2024-11-18",
    "targetPath": "/KCC/SERVIC/target_3",
    "department": "금융시스템부",
    "confirmationDate": "2024-11-20"
  },
  {
    "impactFeedbackIdx": 15,
    "wrCode": "WR1234-DP7",
    "wrFileName": "s1230044",
    "wrFilePath": "/KCC/SERVIC/",
    "tgPgm": "11231242.xml",
    "tgPath": "/target/path/4",
    "prjId": "PRJ004",
    "senderEmployee": "401735",
    "senderName": "김유진",
    "senderDbrnCode": "D004",
    "senderDbrnNm": "트레이딩시스템부",
    "senderEmail": "kimyu@example.com",
    "receiverEmployee": "401736",
    "receiverName": "장현석",
    "receiverDbrnCode": "R004",
    "receiverDbrnNm": "금융시스템부",
    "receiverEmail": "jang@example.com",
    "directFlag": "Y",
    "dbioFlag": "N",
    "senderOpinion": "내용 검토 부탁드립니다.",
    "sentDt": "2024-11-18",
    "feedbackStatus": "DC",
    "replyDt": "2024-11-19",
    "receiverOpinion": "확인 중",
    "assignerFlag": "N",
    "createDt": "2024-11-25 15:45:58",
    "dispatchDate": "2024-11-17",
    "targetPath": "/KCC/SERVIC/target_4",
    "department": "트레이딩시스템부",
    "confirmationDate": "2024-11-18"
  },
  {
    "impactFeedbackIdx": 16,
    "wrCode": "WR1234-DP8",
    "wrFileName": "s1230045",
    "wrFilePath": "/KCC/SERVIC/",
    "tgPgm": "11231243.xml",
    "tgPath": "/target/path/5",
    "prjId": "PRJ005",
    "senderEmployee": "401736",
    "senderName": "박지훈",
    "senderDbrnCode": "D005",
    "senderDbrnNm": "금융시스템부",
    "senderEmail": "parkji@example.com",
    "receiverEmployee": "401737",
    "receiverName": "이하나",
    "receiverDbrnCode": "R005",
    "receiverDbrnNm": "트레이딩시스템부",
    "receiverEmail": "leeha@example.com",
    "directFlag": "N",
    "dbioFlag": "Y",
    "senderOpinion": "최종 검토 부탁드립니다.",
    "sentDt": "2024-11-16",
    "feedbackStatus": "AP",
    "replyDt": "2024-11-18",
    "receiverOpinion": "확인 완료",
    "assignerFlag": "Y",
    "createDt": "2024-11-25 15:50:58",
    "dispatchDate": "2024-11-15",
    "targetPath": "/KCC/SERVIC/target_5",
    "department": "금융시스템부",
    "confirmationDate": "2024-11-17"
  }
]


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
          this.rowsTopTable = this.tempDataDump1;
          // this.rowsTopTable = response.data.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    async getBottomData(row) {
      this.loading = true;
      this.error = null;

      this.rowsBottomTable = this.tempDataDump2;
      // this.rowsBottomTable = row.impactList;
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

<style>
.eff-analysis-sub-header {
  display: flex;
  align-items: center;
}

.eff-analysis-sub-header img {
  margin-right: 32px;
}

.eff-analysis-sub-header .basic-button {
  margin-left: 18px;
}
</style>