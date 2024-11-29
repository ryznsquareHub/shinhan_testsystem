<template>
  <SubHeader>
    <template #content>
      <div class="common-sub-header">
        <span class="text-accent-bold">등록일</span>
        <div class="date-range-select">
          <DatePicker :on-select="(d) => console.log(d)" />
          <span>~</span>
          <DatePicker :on-select="(d) => console.log(d)" />
        </div>

        <span class="text-accent-bold">채널구분</span>
        <Dropdown
          :options="['전체', 'APP', 'WEB']"
          v-model="selectedChannel"
          :on-select="(option) => selectedChannel = option"
        />

        <span class="text-accent-bold" style="margin-left: 25px;">테스트결과</span>
        <Dropdown
          :options="['전체', '성공', '실패']"
          v-model="selectTestType"
          :on-select="(option) => selectTestType = option"
        />

        <span class="text-accent-bold" style="margin-left: 25px;">문서번호</span>
        <BasicInput id="doc-num" name="doc-num"/>

        <span class="text-accent-bold">테스트명</span>
        <BasicInput id="test-name" name="test-name"/>

        <span class="text-accent-bold">등록자</span>
        <BasicInput id="reg-user" name="reg-user"/>

        <div class="search-buttons">
          <BasicButton text="검색" class="search-btn"/>
        </div>
      </div>

    </template>
  </SubHeader>

  <article class="page-area">
    <section style="margin-top: 12px">
      <div class="flex-btn-box" style="margin-bottom: 20px;">
        <BasicButton text="엑셀 다운로드" />
        <BasicButton @click="openModal1" text="테스트자동화등록" />
        <BasicButton text="선택삭제" />
      </div>
      <BasicTableInfinite :columns="columns" :rows="tableList" enable-row-check />
    </section>
  </article>
<!-- 테스트자동화 등록 -->
 <!-- 성능검사 상세/수정 -->

 <div>
    <Teleport to="body">
      <Modal v-if="isModalOpen1" @close="closeModal1">
        <template #header>
          <div class="modal-h3">
            <h3>테스트자동화 등록</h3>
          </div>
        </template>
        <template #body>
          <div style="width: 600px" class="text-light modal-form">
            <div style="grid-column: 1 / 3">
              <BasicInput id="테스트명" label="테스트명" />
            </div>

            <div class="modal-form-select">
              <span><b>채널구분</b></span>
              <Dropdown :options="['전체', 'WTS', 'MTS']" :on-select="() => { }" />
            </div>
            <div class="modal-form-select">
              <span><b>테스트 결과</b></span>
              <Dropdown :options="['전체', '성공', '실패']" :on-select="() => { }" />
            </div>

            <BasicInput id="문서번호" label="문서번호" />
            <BasicInput id="등록자" label="등록자" />

            <div class="modal-form-select" style="grid-column: 1 / 3">
              <span><b>비고</b></span>
              <textarea name="note" id="note" rows="5" placeholder="이상없음" class="basic-textarea"
                style="font-size: 12px" />
            </div>

            <div class="modal-form-select" style="grid-column: 1 / 3">
              <span><b>파일첨부</b></span>
              <div class="form-file-list">
                <div class="flex-box-center">
                  <img :src="require(`@/assets/icons/attachment.svg`)" alt="file" width="9px">
                  <span>성능검사결과1.pdf</span>
                </div>
                <div class="flex-box-center">
                  <img :src="require(`@/assets/icons/attachment.svg`)" alt="file" width="9px">
                  <span>성능검사결과1.pdf</span>
                </div>
                <div class="flex-box-center">
                  <img :src="require(`@/assets/icons/attachment.svg`)" alt="file" width="9px">
                  <span>성능검사결과1.pdf</span>
                </div>
              </div>
            </div>
          </div>

        </template>
        <template #footer>
          <div class="btn-group-2" style="width: 160px;margin: 0 auto;">
            <BasicButton text="취소" button-style="cancel-btn" width="80px" />
            <BasicButton text="저장" width="80px" />
          </div>
        </template>
      </Modal>
    </Teleport>
  </div>
 <!-- 테스트자동화 상세/수정 -->

 <div>
    <Teleport to="body">
      <Modal v-if="isModalOpen2" @close="closeModal2">
        <template #header>
          <div class="modal-h3">
            <h3>테스트자동화 상세/수정</h3>
          </div>
        </template>
        <template #body>
          <div style="width: 600px" class="text-light modal-form">
            <div style="grid-column: 1 / 3">
              <BasicInput id="테스트명" label="테스트명" />
            </div>

            <div class="modal-form-select">
              <span><b>채널구분</b></span>
              <Dropdown :options="['전체', 'WTS', 'MTS']" :on-select="() => { }" />
            </div>
            <div class="modal-form-select">
              <span><b>테스트 결과</b></span>
              <Dropdown :options="['전체', '성공', '실패']" :on-select="() => { }" />
            </div>

            <BasicInput id="문서번호" label="문서번호" />
            <BasicInput id="등록자" label="등록자" />

            <div class="modal-form-select" style="grid-column: 1 / 3">
              <span><b>비고</b></span>
              <textarea name="note" id="note" rows="5" placeholder="이상없음" class="basic-textarea"
                style="font-size: 12px" />
            </div>

            <div class="modal-form-select" style="grid-column: 1 / 3">
              <span><b>파일첨부</b></span>
              <div class="form-file-list">
                <div class="flex-box-center">
                  <img :src="require(`@/assets/icons/attachment.svg`)" alt="file" width="9px">
                  <span>성능검사결과1.pdf</span>
                </div>
                <div class="flex-box-center">
                  <img :src="require(`@/assets/icons/attachment.svg`)" alt="file" width="9px">
                  <span>성능검사결과1.pdf</span>
                </div>
                <div class="flex-box-center">
                  <img :src="require(`@/assets/icons/attachment.svg`)" alt="file" width="9px">
                  <span>성능검사결과1.pdf</span>
                </div>
              </div>
            </div>
          </div>

        </template>
        <template #footer>
          <div class="btn-group-2" style="width: 160px;margin: 0 auto;">
            <BasicButton text="취소" button-style="cancel-btn" width="80px" />
            <BasicButton text="저장" width="80px" />
          </div>
        </template>
      </Modal>
    </Teleport>
  </div>



</template>

<script>
import SubHeader from "@/components/layout/SubHeader";
import BasicTable from "@/components/common/BasicTable";
import Dropdown from "@/components/common/Dropdown";
import BasicInput from "@/components/common/BasicInput";
import BasicButton from "@/components/common/BasicButton";
import DatePicker from "@/components/common/DatePicker";

import { ref } from "vue";
import axios from 'axios';
import BasicTableInfinite from "@/components/common/BasicTableInfinite.vue";
import Modal from "@/components/common/Modal";

let selectedView = ref("요청");
let selectedChannel = ref("전체");
let selectTestType = ref("전체");

export default {
  name: "TestAutoPage",
  components: {
    BasicTable,
    BasicTableInfinite,
    SubHeader,
    Dropdown,
    BasicInput,
    BasicButton,
    DatePicker,
    Modal
  },
  setup() {
    return {
      selectedView,
      selectedChannel,
      selectTestType
    }
  },
  data() {
    return {
      isModalOpen1: false, // 모달 상태 변수
      isModalOpen2: false, // 모달 상태 변수
      isModalOpen2: false, // 모달 상태 변수
      columns: [
        { label: "NO", field: "rpaResultIdx", sortable: false },
        {
          label: "등록일",
          field: "createDt",
          type: "date",
          dateInputFormat: "yyyy-MM-dd",
          dateOutputFormat: "yyyy/MM/dd"
        },
        { label: "채널구분", field: "taskChannel" },
        { label: "문서번호", field: "docNo" },
        { label: "테스트명", field: "testName" },
        { label: "테스트결과", field: "testResult" },
        { label: "등록자", field: "uploader" },
        { label: "비고", field: "notes", sortable: false },
        {
          label: "",
          field: "modify",
          sortable: false,
          type: "modify",
          onClickEdit: (row) => {
            this.openModal2()
            console.log(row);
          },
          onClickDelete: (row) => {
            console.log(row);
          }
        }
      ],

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
            "rpaResultIdx": 606,
            "createDt": "2024-11-13",
            "taskChannel": "WEB",
            "docNo": "문서 2",
            "testName": "WEB TEST 1",
            "testResult": "성공",
            "uploader": "홍길동",
            "notes": "임시결과"
          },
          {
            "rpaResultIdx": 606,
            "createDt": "2024-11-13",
            "taskChannel": "WEB",
            "docNo": "문서 2",
            "testName": "WEB TEST 1",
            "testResult": "성공",
            "uploader": "홍길동",
            "notes": "임시결과"
          },
          {
            "rpaResultIdx": 606,
            "createDt": "2024-11-13",
            "taskChannel": "WEB",
            "docNo": "문서 2",
            "testName": "WEB TEST 1",
            "testResult": "성공",
            "uploader": "홍길동",
            "notes": "임시결과"
          },
          {
            "rpaResultIdx": 606,
            "createDt": "2024-11-13",
            "taskChannel": "WEB",
            "docNo": "문서 2",
            "testName": "WEB TEST 1",
            "testResult": "성공",
            "uploader": "홍길동",
            "notes": "임시결과"
          },
          {
            "rpaResultIdx": 606,
            "createDt": "2024-11-13",
            "taskChannel": "WEB",
            "docNo": "문서 2",
            "testName": "WEB TEST 1",
            "testResult": "성공",
            "uploader": "홍길동",
            "notes": "임시결과"
          },
          {
            "rpaResultIdx": 606,
            "createDt": "2024-11-13",
            "taskChannel": "WEB",
            "docNo": "문서 2",
            "testName": "WEB TEST 1",
            "testResult": "성공",
            "uploader": "홍길동",
            "notes": "임시결과"
          }
        ],
        "page": 1,
        "size": 20,
        "totalPages": 1,
        "totalElements": 1
      }
    };
  },
  methods: {
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
  mounted() {
    // 컴포넌트가 마운트된 후 호출되는 라이프사이클 훅
    console.log('Component mounted');
    this.initData();
  },
  beforeUnmount() {
    // 기존 beforeDestroy의 로직을 여기로 옮기면 됩니다.
    console.log('Component will be destroyed');
  }
};
</script>


<style scoped>
.date-range-select {
  display: flex;
  gap: 6px;
  align-items: center;
}
</style>