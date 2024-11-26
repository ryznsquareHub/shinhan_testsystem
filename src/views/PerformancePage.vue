<template>
  <SubHeader>
    <template #content>
      <div class="view-select-btn">
        <div @click="selectedView = '요청'">
          <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.09277 2.16797H33.7178" :stroke="selectedView==='요청' ? '#2254A5' : '#6983C6'" stroke-width="3" stroke-linecap="round"/>
            <path :fill="selectedView==='요청' ? '#2254A5' : '#6983C6'" fill-rule="evenodd" clip-rule="evenodd" d="M30.2037 2.16797H5.60645V22.8999C5.60645 24.8677 5.60645 25.8516 5.98946 26.6036C6.32634 27.2647 6.86388 27.8022 7.52503 28.1391C8.277 28.5221 9.26089 28.5221 11.2287 28.5221H24.5814C26.5492 28.5221 27.5331 28.5221 28.2851 28.1391C28.9462 27.8022 29.4838 27.2647 29.8207 26.6036C30.2037 25.8516 30.2037 24.8677 30.2037 22.8999V2.16797ZM16.1481 21.4944V15.194L13.8764 17.4657C13.545 17.7857 13.1012 17.9628 12.6405 17.9588C12.1799 17.9548 11.7392 17.77 11.4135 17.4443C11.0877 17.1185 10.9029 16.6779 10.8989 16.2172C10.8949 15.7565 11.072 15.3127 11.3921 14.9814L16.4767 9.89677C16.5083 9.86514 16.5417 9.8341 16.5768 9.80365C16.7414 9.61264 16.9453 9.45938 17.1745 9.35433C17.4037 9.24927 17.6529 9.19489 17.9051 9.19489C18.1572 9.19489 18.4064 9.24927 18.6356 9.35433C18.8648 9.45938 19.0687 9.61264 19.2333 9.80365C19.2684 9.8341 19.3018 9.86514 19.3335 9.89677L24.418 14.9814C24.7381 15.3127 24.9152 15.7565 24.9112 16.2172C24.9072 16.6779 24.7224 17.1185 24.3966 17.4443C24.0709 17.77 23.6302 17.9548 23.1696 17.9588C22.7089 17.9628 22.2651 17.7857 21.9337 17.4657L19.662 15.194V21.4944C19.662 21.9603 19.4769 22.4072 19.1474 22.7367C18.8179 23.0662 18.371 23.2513 17.9051 23.2513C17.4391 23.2513 16.9922 23.0662 16.6627 22.7367C16.3332 22.4072 16.1481 21.9603 16.1481 21.4944Z"/>
          </svg>
          <span :class="{'activeView' : selectedView === '요청'}">요청한 목록</span>
        </div>
        <div @click="selectedView = '회신'">
          <svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path :stroke="selectedView==='회신' ? '#2254A5' : '#6983C6'" d="M1.54102 1.68896H30.941M16.241 19.6556V9.85563M4.80768 1.68896H27.6743V20.9623C27.6743 22.7916 27.6743 23.7063 27.3183 24.4054C27.0051 25.02 26.5054 25.5197 25.8908 25.8329C25.1917 26.189 24.277 26.189 22.4477 26.189H10.0343C8.20502 26.189 7.29035 26.189 6.59128 25.8329C5.97665 25.5197 5.47693 25.02 5.16375 24.4054C4.80768 23.7063 4.80768 22.7916 4.80768 20.9623V1.68896Z" stroke-width="3" stroke-linecap="round"/>
            <path d="M11.3408 14.7555L16.0677 10.0287C16.1136 9.9828 16.1759 9.95703 16.2408 9.95703C16.3057 9.95703 16.368 9.9828 16.414 10.0287L21.1408 14.7555" :stroke="selectedView==='회신' ? '#2254A5' : '#6983C6'" stroke-width="3" stroke-linecap="round"/>
          </svg>
          <span :class="{'activeView' : selectedView === '회신'}">회신할 목록</span>
        </div>
      </div>
    </template>
  </SubHeader>

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
          :options="['전체', 'WTS', 'MTS']"
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
    <section>
      <div class="flex-btn-box" style="margin-bottom: 20px;">
        <BasicButton text="엑셀 다운로드"/>
        <BasicButton @click="openModal1" text="성능검사기록" />
        <BasicButton text="선택삭제"/>
      </div>
      <BasicTable :columns="columns" :rows="rows" enable-row-check/>
    </section>
  </article>
<!-- 성능검사 등록/ 수정 -->
  <div>
      <Teleport to="body">
        <Modal v-if="isModalOpen1" @close="closeModal1">
          <template #header>
            <div class="modal-h3">
              <h3>성능검사 등록/수정</h3>
            </div>
          </template>
          <template #body>
            <div style="width: 600px" class="text-light modal-form">
              <div style="grid-column: 1 / 3">
                <BasicInput id="테스트명" label="테스트명"/>
              </div>

              <div class="modal-form-select">
                <span><b>채널구분</b></span>
                <Dropdown
                  :options="['전체', 'WTS', 'MTS']"
                  :on-select="() =>{}"
                />
              </div>
              <div class="modal-form-select">
                <span><b>테스트 결과</b></span>
                <Dropdown
                  :options="['전체', '성공', '실패']"
                  :on-select="() =>{}"
                />
              </div>

              <BasicInput id="문서번호" label="문서번호"/>
              <BasicInput id="등록자" label="등록자"/>

              <div class="modal-form-select" style="grid-column: 1 / 3">
                <span><b>비고</b></span>
                <textarea name="note" id="note" rows="5" placeholder="이상없음"
                          class="basic-textarea" style="font-size: 12px"/>
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
              <BasicButton text="취소" button-style="cancel-btn" width="80px"/>
              <BasicButton text="저장" width="80px"/>
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
import Modal from "@/components/common/Modal";
import {ref} from "vue";

let selectedView = ref("요청");
let selectedChannel = ref("전체");
let selectTestType = ref("전체");

export default {
  name: "PerformancePage",
  components: {
    BasicTable,
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
      isModalOpen3: false, // 모달 상태 변수
      columns: [
        {label: 'NO', field: 'NO', sortable: false},
        {
          label: '등록일',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd HH:mm',
          dateOutputFormat: 'yyyy/MM/dd HH:mm'
        },
        {label: '채널구분', field: 'channel'},
        {label: '문서번호', field: 'doc'},
        {label: '테스트명', field: 'testName'},
        {label: '테스트결과', field: 'testResult'},
        {label: '등록자', field: 'regUser'},
        {label: '비고', field: 'note', sortable: false},
        {
          label: '', field: 'modify', sortable: false, type: 'modify',
          onClickEdit: (row) => {
            console.log(row)
          },
          onClickDelete: (row) => {
            console.log(row)
          }
        }
      ],
      rows: [
        {
          NO: "1", createdAt: "2024-11-11 13:00", channel: "test", doc: "test", testName: "test", testResult: "test",
          regUser: "test", note: "test"
        }
      ],
    }
  },
  methods: {
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
  }
}
</script>

<style scoped>
.view-select-btn {
  display: flex;
}

.view-select-btn > div {
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

.view-select-btn > div span {
  color: #6983C6;
}
.view-select-btn > div span.activeView {
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