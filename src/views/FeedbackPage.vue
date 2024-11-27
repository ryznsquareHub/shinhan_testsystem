<template>
  <SubHeader>
    <template #content>
      <div class="view-select-btn">
        <div @click="selectedView = '요청'">
          <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.09277 2.16797H33.7178" :stroke="selectedView === '요청' ? '#2254A5' : '#6983C6'" stroke-width="3"
              stroke-linecap="round" />
            <path :fill="selectedView === '요청' ? '#2254A5' : '#6983C6'" fill-rule="evenodd" clip-rule="evenodd"
              d="M30.2037 2.16797H5.60645V22.8999C5.60645 24.8677 5.60645 25.8516 5.98946 26.6036C6.32634 27.2647 6.86388 27.8022 7.52503 28.1391C8.277 28.5221 9.26089 28.5221 11.2287 28.5221H24.5814C26.5492 28.5221 27.5331 28.5221 28.2851 28.1391C28.9462 27.8022 29.4838 27.2647 29.8207 26.6036C30.2037 25.8516 30.2037 24.8677 30.2037 22.8999V2.16797ZM16.1481 21.4944V15.194L13.8764 17.4657C13.545 17.7857 13.1012 17.9628 12.6405 17.9588C12.1799 17.9548 11.7392 17.77 11.4135 17.4443C11.0877 17.1185 10.9029 16.6779 10.8989 16.2172C10.8949 15.7565 11.072 15.3127 11.3921 14.9814L16.4767 9.89677C16.5083 9.86514 16.5417 9.8341 16.5768 9.80365C16.7414 9.61264 16.9453 9.45938 17.1745 9.35433C17.4037 9.24927 17.6529 9.19489 17.9051 9.19489C18.1572 9.19489 18.4064 9.24927 18.6356 9.35433C18.8648 9.45938 19.0687 9.61264 19.2333 9.80365C19.2684 9.8341 19.3018 9.86514 19.3335 9.89677L24.418 14.9814C24.7381 15.3127 24.9152 15.7565 24.9112 16.2172C24.9072 16.6779 24.7224 17.1185 24.3966 17.4443C24.0709 17.77 23.6302 17.9548 23.1696 17.9588C22.7089 17.9628 22.2651 17.7857 21.9337 17.4657L19.662 15.194V21.4944C19.662 21.9603 19.4769 22.4072 19.1474 22.7367C18.8179 23.0662 18.371 23.2513 17.9051 23.2513C17.4391 23.2513 16.9922 23.0662 16.6627 22.7367C16.3332 22.4072 16.1481 21.9603 16.1481 21.4944Z" />
          </svg>
          <span :class="{ 'activeView': selectedView === '요청' }">요청한 목록</span>
        </div>
        <div @click="selectedView = '회신'">
          <svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path :stroke="selectedView === '회신' ? '#2254A5' : '#6983C6'"
              d="M1.54102 1.68896H30.941M16.241 19.6556V9.85563M4.80768 1.68896H27.6743V20.9623C27.6743 22.7916 27.6743 23.7063 27.3183 24.4054C27.0051 25.02 26.5054 25.5197 25.8908 25.8329C25.1917 26.189 24.277 26.189 22.4477 26.189H10.0343C8.20502 26.189 7.29035 26.189 6.59128 25.8329C5.97665 25.5197 5.47693 25.02 5.16375 24.4054C4.80768 23.7063 4.80768 22.7916 4.80768 20.9623V1.68896Z"
              stroke-width="3" stroke-linecap="round" />
            <path
              d="M11.3408 14.7555L16.0677 10.0287C16.1136 9.9828 16.1759 9.95703 16.2408 9.95703C16.3057 9.95703 16.368 9.9828 16.414 10.0287L21.1408 14.7555"
              :stroke="selectedView === '회신' ? '#2254A5' : '#6983C6'" stroke-width="3" stroke-linecap="round" />
          </svg>
          <span :class="{ 'activeView': selectedView === '회신' }">회신할 목록</span>
        </div>
      </div>
    </template>
  </SubHeader>

  <SubHeader>
    <template #content>
      <div class="common-sub-header">
        <span>피드백상태 : (4/5건)</span>
        <span class="text-accent-bold" style="margin-left: 60px;">파일명</span>
        <Dropdown :options="['참조파일', '대상파일']" v-model="selectedFile" :on-select="(option) => selectedFile = option" />
        <BasicInput id="file-name" name="file-name" />

        <span class="text-accent-bold" style="margin-left: 25px;">일자조회</span>
        <Dropdown :options="['발송일', '확인일']" v-model="selectDateType" :on-select="(option) => selectDateType = option" />

        <div class="date-range-select">
          <DatePicker :on-select="(d) => console.log(d)" />
          <span>~</span>
          <DatePicker :on-select="(d) => console.log(d)" />
        </div>

        <BasicToggle :defaultActive="true" :handleChange="(v) => console.log(v)" label="중적 완료 포함" />

        <span class="text-accent-bold" style="margin-left: 25px;">
          {{ selectedView === '요청' ? '담당자' : '발송인' }}
        </span>
        <BasicInput id="manager" name="manager" />
        <span class="text-accent-bold">부서</span>
        <BasicInput id="department" name="department" />

        <div class="search-buttons">
          <BasicButton text="검색" class="search-btn" />
        </div>
      </div>

    </template>
  </SubHeader>

  <article class="page-area">
    <section v-if="selectedView === '요청'">
      <div class="flex-btn-box" style="margin-bottom: 20px; ">
        <BasicButton @click="openModal1" text="선택 피드백 요청" />
        <BasicButton @click="openModal1" text="전체 피드백 요청~~5" />
      </div>
      <BasicTableInfinite 
      :columns="requestColumns" 
      :rows="replyRows" 
      :getInifiniteDataAdd="getInifiniteDataAdd"
      enable-row-check />
    </section>

    <!--    <section v-if="selectedView==='회신'">
      <div class="flex-btn-box" style="margin-bottom: 20px;">
        <BasicButton text="선택 피드백"/>
        <BasicButton text="전체 피드백"/>
      </div>
      <BasicTableInfinite 
        :columns="replyColumns" 
        :rows="replyRows" 
        :getInifiniteDataAdd="getInifiniteDataAdd"
        enable-row-check
        />
    </section>
 -->
  </article>
  <!-- 모달 -->
  <section class="modal-examples">
    <Teleport to="body">
      <Modal v-if="isModalOpen1" @close="closeModal1">
        <template #body>
          <div class="text-center text-m-center text-light" style="width: 240px">
            <p>영향도 피드백을 하시겠습니까?</p>
          </div>
        </template>
        <template #footer>
          <div class="btn-group-3">
            <BasicButton text="취소" button-style="cancel-btn" width="100%" />
            <BasicButton text="피드백" width="100%" />
            <BasicButton text="대결요청" width="100%" @click="openModal3" />
          </div>
        </template>
      </Modal>
    </Teleport>
  </section>

  <div>
    <Teleport to="body">
      <Modal v-if="isModalOpen2" @close="closeModal2">
        <template #body>
          <div style="width: 300px" class="text-light">
            <div class="flex-box-center">
              <span style="margin-right:12px">참조파일 :</span>
              <div class="attached-file-list flex-box-center">
                <span class="text-light">pgfram609.c</span>
                <span class="text-light">pgfram609.c</span>
              </div>
            </div>
            <div class="text-center" style="margin: 24px auto;">
              <p>에 대해 OK는 영향도 없음,<br />
                개발필요는 영향도 있음으로 담당자에 확인메일을<br />
                처리합니다. 발송 하시겠습니까?</p>
            </div>
            <div class="flex-box-center">
              <span style="margin-right:6px">변경내용</span>
              <BasicInput style="width: 158px" />
            </div>
          </div>
        </template>
        <template #footer>
          <div class="btn-group-3">
            <BasicButton text="취소" button-style="cancel-btn" width="100%" />
            <BasicButton text="피드백" width="100%" @click="openModal2" />
            <BasicButton text="대결요청" width="100%" @click="openModal1" />
          </div>
        </template>
      </Modal>
    </Teleport>
  </div>

  <div>
    <Teleport to="body">
      <Modal v-if="isModalOpen3" @close="closeModal3">
        <template #body>
          <div class="info-box text-light" style="width: 300px;margin: -12px auto 24px;">
            <p><b>제목:</b> [영향도분석 취소알림] WR123-DP1</p>
            <p><b>보낸이:</b> 홍길동</p>
            <br />
            <span>내용 :</span>
            <br />
            <div style="margin-left:20px">
              <p><b>문서 DP번호:</b> WR1213-DP1</p>
              <p><b>경로:</b> 2024-03-07 23:42</p>
              <p><b>참조파일:</b> 2024-03-07 23:42</p>
              <p><b>연관프로그램:</b> 2024-03-07 23:42</p>
            </div>
            <br />
            <div class="flex-box text-light">
              <span style="margin-right:6px">변경내용</span>
              <div class="flex-box-center border-box text-light">
                <span style="width: 120px;">Start0 함수에 회원종류
                  param 추가해 주시면
                  영향성 패스.</span>
              </div>
            </div>
            <br />
            <p>에 대해 OK는 영향도분석 결과는</p>
            <p>(OK/개발필요) 입니다.</p>
          </div>
        </template>
        <template #footer>
          <div />
          <!--            <div class="btn-group-2">-->
          <!--              <BasicButton text="취소" button-style="cancel-btn" width="100%"/>-->
          <!--              <BasicButton text="대리결제요청" width="100%"/>-->
          <!--            </div>-->
        </template>
      </Modal>
    </Teleport>
  </div>


</template>

<script>
import SubHeader from "@/components/layout/SubHeader";
import Dropdown from "@/components/common/Dropdown";
import BasicTable from "@/components/common/BasicTable";
import BasicInput from "@/components/common/BasicInput";
import BasicButton from "@/components/common/BasicButton";
import BasicToggle from "@/components/common/BasicToggle";
import DatePicker from "@/components/common/DatePicker";
import Modal from "@/components/common/Modal";
import { ref } from "vue";
import BasicTableInfinite from "@/components/common/BasicTableInfinite.vue";
import axios from 'axios';

let selectedView = ref("요청");
let selectedFile = ref("참조파일");
let selectDateType = ref("발송일");

export default {
  name: "FeedbackPage",
  components: {
    BasicTable,
    SubHeader,
    Dropdown,
    BasicInput,
    BasicButton,
    BasicToggle,
    DatePicker,
    Modal,
    BasicTableInfinite
  },
  setup() {
    return {
      selectedView,
      selectDateType,
      selectedFile
    }
  },
  data() {
    return {
      isModalOpen1: false, // 모달 상태 변수
      isModalOpen2: false, // 모달 상태 변수
      isModalOpen3: false, // 모달 상태 변수
      requestColumns: [
        { label: 'NO', field: 'impactFeedbackIdx', sortable: false },
        {
          label: '발송일',
          field: 'dispatchDate',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          // dateOutputFormat: 'yyyy/MM/dd HH:mm',
          dateOutputFormat: 'yyyy/MM/dd',
          sortable: false,
        },
        { label: '연관프로그램', field: 'wrFileName', sortable: false },
        { label: '대상경로', field: 'tgPath', sortable: false },
        { label: '참조파일', field: 'tgPgm', sortable: false },
        { label: '설명', field: 'senderOpinion', sortable: false },
        { label: '발송인', field: 'senderName', sortable: false },
        { label: '부서', field: 'senderDbrnNm', sortable: false },
        { label: '확인상태', field: 'feedbackStatus', sortable: false },
        {
          label: '확인일',
          field: 'confirmationDate',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'yyyy/MM/dd',
          sortable: false,
        },
        { label: 'DBIO여부', field: 'dbioFlag', sortable: false },
        {
          label: '링크',
          field: 'link',
          sortable: false,
          type: 'button',
          btnText: '링크',
          onClick: (row) => {
            console.log(row);
          },
        },
        {
          label: '',
          field: 'feedback',
          sortable: false,
          type: 'button',
          btnText: '피드백',
          onClick: (row) => {
            console.log(row);
          },
        },
        { label: 'isMoreRow', field: 'isMoreRow', type: 'isMoreRow', hidden: true },
      ],
      requestRows: [
        {
          NO: "1", sentAt: "2024-11-11 13:00", program: "test", path: "test", file: "test", description: "test",
          manager: "test", department: "test", state: "test", checkedAt: "2024-11-11 13:00", DBIO: "test", resend: ""
        }
      ],
      replyColumns: [
        { label: 'NO', field: 'NO', sortable: false },
        {
          label: '발송일',
          field: 'sentDt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd HH:mm',
          dateOutputFormat: 'yyyy/MM/dd HH:mm',
          sortable: false
        },
        { label: '연관프로그램', field: 'wrFileName', sortable: false },
        { label: '대상경로', field: 'tgPath', sortable: false },
        { label: '참조파일', field: 'tgPgm', sortable: false },
        { label: '설명', field: 'description', sortable: false },
        { label: '발송인', field: 'sender', sortable: false },
        { label: '부서', field: 'department', sortable: false },
        { label: '확인상태', field: 'state', sortable: false },
        {
          label: '확인일',
          field: 'checkedAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd HH:mm',
          dateOutputFormat: 'yyyy/MM/dd HH:mm',
          sortable: false
        },
        { label: 'DBIO여부', field: 'DBIO', sortable: false },
        {
          label: '링크', field: 'link', sortable: false, type: 'button', btnText: "링크", onClick: (row) => {
            console.log(row)
          }
        },
        {
          label: '', field: 'feedback', sortable: false, type: 'button', btnText: "피드백", onClick: (row) => {
            console.log(row)
          }
        },
      ],
      replyRows: [
      ],
      tempDataDump : [
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
  methods: {

    async fetchData() {
      this.loading = true;
      this.error = null;

      // try {
      axios.get('http://localhost:9000/api/effect-feedback')
        .then(response => {
          const newRows =  this.tempDataDump;
          // const newRows = response.data.data;
          let result_data;
          if(response?.data?.hasMore == true){
            result_data = _.concat(newRows, { isMoreRow: true });
          } else {
            result_data = _.concat(newRows, { isMoreRow: false });
          }
          this.replyRows = result_data;
          console.log(this.replyRows);
        })
        .catch(error => {
          console.error(error);
        });
    },
    async getInifiniteDataAdd(row) {
      this.loading = true;
      this.error = null;

      axios.get('http://localhost:9000/api/effect-feedback')
        .then(response => {
          const newRows = this.tempDataDump;
          // const newRows = response.data.data;
          let result_data;
          if(response?.data?.hasMore == true && this.replyRows.length < 50){
            result_data = _.concat(newRows, { isMoreRow: true });
          } else {
            result_data = _.concat(newRows, { isMoreRow: false });
          } 
        const oldRows = [...this.replyRows]; // 기존 데이터를 복사
        const filteredRows = _.filter(this.replyRows, (row) => !(row.isMoreRow == true || row.isMoreRow == false));

        this.replyRows = _.concat(filteredRows, result_data);

          // this.replyRows = result_data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    // 영향도피드백
    openModal1() {
      console.log('isModalOpen ::: ')
      this.isModalOpen1 = true; // 모달 열기
    },
    closeModal1() {
      this.isModalOpen1 = false; // 모달 닫기
    },
    // 피드백발송
    openModal2() {
      this.closeModal1()
      console.log('isModalOpen2 ::: ')
      this.isModalOpen2 = true; // 모달 열기
    },
    closeModal2() {
      this.isModalOpen2 = false; // 모달 닫기
    },
    // 피드백 요청알림
    openModal3() {
      this.closeModal2()
      console.log('isModalOpen2 ::: ')
      this.isModalOpen3 = true; // 모달 열기
    },
    closeModal3() {
      this.isModalOpen3 = false; // 모달 닫기
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

<style>
.common-sub-header {
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.common-sub-header * {
  font-size: 15px;
}

.common-sub-header .dropdown {
  width: 130px;
  margin-top: 0;
}

.common-sub-header>span {
  margin-top: 3px;
  margin-right: 8px;
}

.search-buttons {
  display: flex;
  gap: 20px;
  margin-left: auto;
}

.common-sub-header .search-btn button {
  background-color: var(--blue);
}

.common-sub-header .custom-basic-input {
  max-width: 100px;
  margin-top: 0;
}

.view-select-btn {
  display: flex;
}

.view-select-btn>div {
  display: grid;
  grid-template-columns: 30px 175px;
  gap: 10px;
  text-align: start;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
}

.view-select-btn * {
  transition-duration: 100ms;
}

.view-select-btn>div span {
  color: #6983C6;
}

.view-select-btn>div span.activeView {
  color: #2254A5;
}

.date-range-select {
  display: flex;
  gap: 6px;
  align-items: center;
}

.modal-examples {
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding: 40px;
}
</style>