<template>
  <SubHeader>
    <template #content>
      <div class="common-sub-header">
        <span class="text-accent-bold">등록일</span>
        <div class="date-range-select">
          <DatePicker :on-select="(d) => console.log(d)"/>
          <span>~</span>
          <DatePicker :on-select="(d) => console.log(d)"/>
        </div>

        <span class="text-accent-bold">시스템</span>
        <Dropdown
          :options="['계정계', '정보계', '실루엣', 'GIT']"
          v-model="selectedSystem"
          :on-select="(option) => selectedSystem = option"
        />

        <span class="text-accent-bold" style="margin-left: 25px;">업무코드</span>
        <BasicInput id="work-code" name="work-code"/>

        <span class="text-accent-bold">업무명</span>
        <BasicInput id="work-name" name="work-name"/>

        <span class="text-accent-bold">담당자</span>
        <BasicInput id="manager" name="manager"/>

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
        <BasicButton text="엑셀 다운로드"/>
        <BasicButton text="레포-담당자등록" @click="openModal1" />
      </div>
      <BasicTable :columns="columns" :rows="rows" enable-row-check/>
    </section>
  </article>
<!-- 레포지토리-담당자 등록/수정 -->
  <div>
      <Teleport to="body">
        <Modal v-if="isModalOpen1" @close="closeModal1">
          <template #header>
            <div class="modal-h3">
              <h3>레포지토리-담당자 등록/수정</h3>
            </div>
          </template>
          <template #body>
            <div style="width: 600px" class="text-light modal-form">
              <div style="grid-column: 1 / 3">
                <BasicInput id="업무명" label="업무명*" placeholder="입력해주세요"/>
              </div>

              <div class="modal-form-select">
                <BasicInput id="시스템구분" label="시스템구분*"/>
              </div>
              <div class="modal-form-select">
                <BasicInput id="업무코드" label="업무코드*"/>
              </div>

              <BasicInput id="담당자" label="담당자"/>
              <BasicInput id="부서" style="margin-top: 31px;"/>
              <BasicInput id="담당자2" style="margin-top: -14px;"/>
              <BasicInput id="부서2" style="margin-top: -14px;"/>

              <div class="modal-form-select" style="grid-column: 1 / 3">
                <span><b>비고</b></span>
                <textarea name="note" id="note2" rows="5" placeholder="이상없음"
                          class="basic-textarea" style="font-size: 12px"/>
              </div>
            </div>

          </template>
          <template #footer>
            <BasicButton text="확인" width="80px"/>
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

let selectedSystem = ref("계정계");

export default {
  name: "ManagementPage",
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
      selectedSystem
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
        {
          label: '수정일',
          field: 'editedAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd HH:mm',
          dateOutputFormat: 'yyyy/MM/dd HH:mm'
        },
        {label: '시스템구분', field: 'system'},
        {label: '업부코드', field: 'workCode'},
        {label: '업부명', field: 'workName'},
        {label: '담당자', field: 'manager'},
        {label: '부서', field: 'department'},
        {label: '등록자', field: 'regUser'},
        {label: '비고', field: 'note'},
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
          NO: "1", createdAt: "2024-11-11 13:00", editedAt: "2024-11-11 13:00", system: "test",
          workCode: "test", workName: "test", manager: "test", regUser: "test", note: "test"
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