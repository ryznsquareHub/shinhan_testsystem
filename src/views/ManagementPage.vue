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

        <span class="text-accent-bold">시스템</span>
        <Dropdown :options="['계정계', '정보계', '실루엣', 'GIT']" v-model="selectedSystem"
          :on-select="(option) => selectedSystem = option" />

        <span class="text-accent-bold" style="margin-left: 25px;">업무코드</span>
        <BasicInput id="work-code" name="work-code" />

        <span class="text-accent-bold">업무명</span>
        <BasicInput id="work-name" name="work-name" />

        <span class="text-accent-bold">담당자</span>
        <BasicInput id="manager" name="manager" />

        <span class="text-accent-bold">등록자</span>
        <BasicInput id="reg-user" name="reg-user" />

        <div class="search-buttons">
          <BasicButton text="검색" class="search-btn" />
        </div>
      </div>

    </template>
  </SubHeader>

  <article class="page-area">
    <section style="margin-top: 12px">
      <div class="flex-btn-box" style="margin-bottom: 20px;">
        <BasicButton text="엑셀 다운로드" />
        <BasicButton text="레포-담당자등록" @click="openModal1" />
      </div>
      <BasicTableInfinite :columns="columns" :rows="tableList" enable-row-check />
    </section>
  </article>
  <!-- 레포지토리-담당자 등록-->
  <div>
    <Teleport to="body">
      <Modal v-if="isModalOpen1" @close="closeModal1">
        <template #header>
          <div class="modal-h3">
            <h3>레포지토리-담당자 등록</h3>
          </div>
        </template>
        <template #body>
          <div style="width: 600px" class="text-light modal-form">
            <div style="grid-column: 1 / 3">
              <BasicInput id="업무명" label="업무명*" placeholder="입력해주세요" />
            </div>

            <div class="modal-form-select" style="margin-top:4px">
              <span><b>시스템구분*</b></span>
              <Dropdown :options="['sys1', 'sys2', 'sys3']" :on-select="() => { }" style="" />
            </div>
            <div class="modal-form-select">
              <BasicInput id="업무코드" label="업무코드*" />
            </div>

            <span style="display: inline-flex; align-items: center;">
              <b>담당자</b>
              <BasicButton @click="openModal4" text="조직도" width="110px" style="margin-left: 10px;" />
            </span>
            <div style="grid-column: 1 / 3">
              <div
                style="display: grid; grid-template-columns: repeat(3, calc(100% / 3)); gap: 10px;margin: auto;margin-top: -29px;">
                <BasicInput id="부서" style="margin-top: 31px" />
                <BasicInput id="담당자2" style="margin-top:31px" />
                <BasicInput id="부서2" style="margin-top: 31px;" />
                <BasicInput id="부서2" style="margin-top: 31px;" />
                <BasicInput id="부서2" style="margin-top: 31px;" />
                <BasicInput id="부서2" style="margin-top: 31px;" />
              </div>
            </div>
            <div class="modal-form-select" style="grid-column: 1 / 3">
              <span><b>비고</b></span>
              <textarea name="note" id="note2" rows="5" placeholder="이상없음" class="basic-textarea"
                style="font-size: 12px" />
            </div>
          </div>

        </template>
        <template #footer>
          <div class="btn-group-2" style="width: 160px;margin: 0 auto;">
            <BasicButton @click="closeModal1" text="취소" width="80px" />
            <BasicButton @click="" text="저장" width="80px" />
          </div>
        </template>
      </Modal>
    </Teleport>
  </div>

  <!-- 레포지토리-담당자 수정-->
  <div>
    <Teleport to="body">
      <Modal v-if="isModalOpen2" @close="closeModal2">
        <template #header>
          <div class="modal-h3">
            <h3>레포지토리-담당자 수정</h3>
          </div>
        </template>
        <template #body>
          <div style="width: 600px" class="text-light modal-form">
            <div style="grid-column: 1 / 3">
              <BasicInput id="업무명" label="업무명*" placeholder="입력해주세요" />
            </div>

            <div class="modal-form-select">
              <BasicInput id="시스템구분" label="시스템구분*" />
            </div>
            <div class="modal-form-select">
              <BasicInput id="업무코드" label="업무코드*" />
            </div>

            <span style="display: inline-flex; align-items: center;">
              <b>담당자</b>
              <BasicButton @click="openModal4" text="조직도" width="110px" style="margin-left: 10px;" />
            </span>
            <div style="grid-column: 1 / 3">
              <div
                style="display: grid; grid-template-columns: repeat(3, calc(100% / 3)); gap: 10px;margin: auto;margin-top: -29px;">
                <BasicInput id="부서" style="margin-top: 31px" />
                <BasicInput id="담당자2" style="margin-top:31px" />
                <BasicInput id="부서2" style="margin-top: 31px;" />
                <BasicInput id="부서2" style="margin-top: 31px;" />
                <BasicInput id="부서2" style="margin-top: 31px;" />
                <BasicInput id="부서2" style="margin-top: 31px;" />
              </div>
            </div>

            <div class="modal-form-select" style="grid-column: 1 / 3">
              <span><b>비고</b></span>
              <textarea name="note" id="note2" rows="5" placeholder="이상없음" class="basic-textarea"
                style="font-size: 12px" />
            </div>
          </div>

        </template>
        <template #footer>
          <div class="btn-group-2" style="width: 160px;margin: 0 auto;">
            <BasicButton @click="closeModal2" text="취소" width="80px" />
            <BasicButton @click="" text="저장" width="80px" />
          </div>
        </template>
      </Modal>
    </Teleport>
  </div>

  <!-- 레포지토리-담당자 상세-->
  <div>
    <Teleport to="body">
      <Modal v-if="isModalOpen3" @close="closeModal3">
        <template #header>
          <div class="modal-h3">
            <h3>레포지토리-담당자 상세</h3>
          </div>
        </template>
        <template #body>
          <div style="width: 600px" class="text-light modal-form">
            <div style="grid-column: 1 / 3">
              <BasicInput id="업무명" label="업무명*" placeholder="입력해주세요" />
            </div>

            <div class="modal-form-select">
              <BasicInput id="시스템구분" label="시스템구분*" />
            </div>
            <div class="modal-form-select">
              <BasicInput id="업무코드" label="업무코드*" />
            </div>

            <BasicInput id="담당자" label="담당자" />
            <BasicInput id="부서" style="margin-top: 31px;" />
            <BasicInput id="담당자2" style="margin-top: -14px;" />
            <BasicInput id="부서2" style="margin-top: -14px;" />

            <div class="modal-form-select" style="grid-column: 1 / 3">
              <span><b>비고</b></span>
              <textarea name="note" id="note2" rows="5" placeholder="이상없음" class="basic-textarea"
                style="font-size: 12px" />
            </div>
          </div>

        </template>
        <template #footer>
          <BasicButton text="확인" width="80px" />
        </template>
      </Modal>
    </Teleport>
  </div>
  <!-- 조직조회 -->
  <div>
    <Teleport to="body">
      <Modal v-if="isModalOpen4" @close="closeModal4">
        <template #body>
          <div class="organization-modal">
            <div style="width: 225px">
              <div class="flex-btn-box">
                <img :src="require(`@/assets/icons/structure.svg`)" alt="조직" width="20px">
                <span>조직</span>
              </div>
              <div class="scrollable-area">
                <DataTree :nodes="treeData" />
              </div>
            </div>
            <div style="width: 460px">
              <div class="flex-box-center" style="margin-bottom: 24px">
                <button class="primary-btn">이름/사번</button>
                <button class="light-btn small-btn" style="width:80px">부서</button>

                <div class="search-input-btn">
                  <input type="text" placeholder="검색어 입력">
                  <button class="light-btn small-btn" type="button">검색</button>
                </div>
              </div>

              <div class="scrollable-area" style="max-height: 195px">
                <BasicTable :columns="orgColumns" :rows="orgRows" enable-row-check />
              </div>
              <div class="btn-group-2" style="width: 170px; margin: 18px auto;">
                <BasicButton class="small-btn" text="취소" button-style="cancel-btn" />
                <BasicButton class="small-btn" text="선택" />
              </div>
              <hr>
              <span class="selected-users"> • 선택된 사용자</span>
              <div class="scrollable-area" style="max-height: 150px; margin-top: 4px">
                <BasicTable :columns="orgColumns2" :rows="orgRows" />
              </div>
            </div>
          </div>
        </template>
        <template #footer>
          <div class="btn-group-2" style="width: 200px; margin: 0 auto;">
            <BasicButton text="취소" button-style="cancel-btn" width="94px" />
            <BasicButton text="확인" width="94px" />
          </div>
        </template>
      </Modal>
    </Teleport>
  </div>






</template>

<script setup>
import { ref } from 'vue'

const orgColumns = [
  { label: '이름', field: 'name', sortable: false },
  { label: '아이디', field: 'id', sortable: false },
  { label: '부서명', field: 'department', sortable: false },
  { label: '팀명', field: 'team', sortable: false }
]
const orgColumns2 = [{ label: '', field: 'delete', type: 'delete', sortable: false }, ...orgColumns]
const orgRows = [
  { name: "test", id: "test", department: "test", team: "test" },
  { name: "test", id: "test", department: "test", team: "test" },
  { name: "test", id: "test", department: "test", team: "test" },
  { name: "test", id: "test", department: "test", team: "test" },
  { name: "test", id: "test", department: "test", team: "test" },
  { name: "test", id: "test", department: "test", team: "test" },
  { name: "test", id: "test", department: "test", team: "test" },
  { name: "test", id: "test", department: "test", team: "test" },
  { name: "test", id: "test", department: "test", team: "test" },
  { name: "test", id: "test", department: "test", team: "test" },
]


const treeData = ref([
  {
    label: 'GIB2그룹',
    children: [
      { label: 'test' },
      { label: 'test' },
      { label: 'test' },
      { label: 'test' },
      { label: 'test' },
      { label: 'test' },
      { label: 'test' },
      { label: 'test' },
    ]
  },
  {
    label: 'ICT그룹',
    children: [
      { label: 'ICT기획부' },
      { label: '금융시스템부' },
      { label: '금융시스템부' },
      {
        label: 'ICT그룹2',
        children: [
          { label: '정보시스템부' },
          { label: '정보시스템부' },
          { label: '정보시스템부' },
          {
            label: '정보시스템부', children: [
              { label: '1팀' },
              { label: '2팀' },
            ]
          },
        ],
      },
    ],
  },
  {
    label: '리스크관리그룹',
    children: [
      { label: 'test' },
    ]
  },
  {
    label: '홀세일그룹',
    children: [
      { label: 'test' },
    ]
  },
  {
    label: '감사',
    children: [
      { label: 'test' },
    ]
  },
],
)

</script>


<script>
import SubHeader from "@/components/layout/SubHeader";
import BasicTable from "@/components/common/BasicTable";
import BasicTableInfinite from "@/components/common/BasicTableInfinite";
import Dropdown from "@/components/common/Dropdown";
import BasicInput from "@/components/common/BasicInput";
import BasicButton from "@/components/common/BasicButton";
import DatePicker from "@/components/common/DatePicker";
import Modal from "@/components/common/Modal";
import { ref } from "vue";
import DataTree from "@/components/common/DataTree"
import axios from 'axios';

let selectedSystem = ref("계정계");

export default {
  name: "ManagementPage",
  components: {
    BasicTable,
    BasicTableInfinite,
    SubHeader,
    Dropdown,
    BasicInput,
    BasicButton,
    DatePicker,
    Modal,
    DataTree
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
      isModalOpen4: false, // 모달 상태 변수
      columns: [
        {
          label: 'NO', field: 'repoManagerIdx', sortable: false,
          onClick: (row) => {
            console.log(row)
            this.openModal3();
          },
        },
        {
          label: '수정일',
          field: 'modifyDt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'yyyy/MM/dd'
        },
        { label: '시스템구분', field: 'moduleType' },
        { label: '업무코드', field: 'taskCode' },
        {
          label: '업무명', field: 'taskNm',
          onClick: (row) => {
            console.log(row)
            this.openModal3();
          },
        },
        { label: '담당자', field: 'userNameList' },
        { label: '부서', field: 'dbrnNmList' },
        { label: '팀명', field: 'dbrnNmList' },
        { label: '수정자', field: 'uploader' },
        { label: '비고', field: 'notes' },
        {
          label: '', field: 'modify', sortable: false, type: 'modify',
          onClickEdit: (row) => {
            console.log(row)
            this.openModal2();
          },
          onClickDelete: (row) => {
            console.log(row)
          }
        }
      ],

      tableList: [
        {
          NO: "1", createdAt: "2024-11-11 13:00", editedAt: "2024-11-11 13:00", system: "test",
          workCode: "test", workName: "test", manager: "test", regUser: "test", note: "test"
        }
      ],
      tempDataDump:
      {
        "code": 200,
        "message": "요청 성공",
        "data": [
          {
            "repoManagerIdx": 2,
            "moduleType": "COR",
            "taskCode": "ASDW",
            "taskNm": "영업부",
            "managerIds": "123456,123457",
            "userIdList": [
              123456,
              123457
            ],
            "userNameList": [
              "홍길동",
              "김철수"
            ],
            "dbrnNmList": [
              "테스트센터",
              "테스트전략부"
            ],
            "teamNmList": [
              "임시팀",
              "임시팀"
            ],
            "notes": "임시등록",
            "modifier": 0,
            "modifierName": "김성환",
            "modifyDt": "2024-11-15",
            "uploader": 1,
            "createDt": "2024-11-15"
          },
          {
            "repoManagerIdx": 2,
            "moduleType": "COR",
            "taskCode": "ASDW",
            "taskNm": "영업부",
            "managerIds": "123456,123457",
            "userIdList": [
              123456,
              123457
            ],
            "userNameList": [
              "홍길동",
              "김철수"
            ],
            "dbrnNmList": [
              "테스트센터",
              "테스트전략부"
            ],
            "teamNmList": [
              "임시팀",
              "임시팀"
            ],
            "notes": "임시등록",
            "modifier": 0,
            "modifierName": "김성환",
            "modifyDt": "2024-11-15",
            "uploader": 1,
            "createDt": "2024-11-15"
          },
          {
            "repoManagerIdx": 2,
            "moduleType": "COR",
            "taskCode": "ASDW",
            "taskNm": "영업부",
            "managerIds": "123456,123457",
            "userIdList": [
              123456,
              123457
            ],
            "userNameList": [
              "홍길동",
              "김철수"
            ],
            "dbrnNmList": [
              "테스트센터",
              "테스트전략부"
            ],
            "teamNmList": [
              "임시팀",
              "임시팀"
            ],
            "notes": "임시등록",
            "modifier": 0,
            "modifierName": "김성환",
            "modifyDt": "2024-11-15",
            "uploader": 1,
            "createDt": "2024-11-15"
          },
          {
            "repoManagerIdx": 2,
            "moduleType": "COR",
            "taskCode": "ASDW",
            "taskNm": "영업부",
            "managerIds": "123456,123457",
            "userIdList": [
              123456,
              123457
            ],
            "userNameList": [
              "홍길동",
              "김철수"
            ],
            "dbrnNmList": [
              "테스트센터",
              "테스트전략부"
            ],
            "teamNmList": [
              "임시팀",
              "임시팀"
            ],
            "notes": "임시등록",
            "modifier": 0,
            "modifierName": "김성환",
            "modifyDt": "2024-11-15",
            "uploader": 1,
            "createDt": "2024-11-15"
          },
          {
            "repoManagerIdx": 2,
            "moduleType": "COR",
            "taskCode": "ASDW",
            "taskNm": "영업부",
            "managerIds": "123456,123457",
            "userIdList": [
              123456,
              123457
            ],
            "userNameList": [
              "홍길동",
              "김철수"
            ],
            "dbrnNmList": [
              "테스트센터",
              "테스트전략부"
            ],
            "teamNmList": [
              "임시팀",
              "임시팀"
            ],
            "notes": "임시등록",
            "modifier": 0,
            "modifierName": "김성환",
            "modifyDt": "2024-11-15",
            "uploader": 1,
            "createDt": "2024-11-15"
          },
          {
            "repoManagerIdx": 2,
            "moduleType": "COR",
            "taskCode": "ASDW",
            "taskNm": "영업부",
            "managerIds": "123456,123457",
            "userIdList": [
              123456,
              123457
            ],
            "userNameList": [
              "홍길동",
              "김철수"
            ],
            "dbrnNmList": [
              "테스트센터",
              "테스트전략부"
            ],
            "teamNmList": [
              "임시팀",
              "임시팀"
            ],
            "notes": "임시등록",
            "modifier": 0,
            "modifierName": "김성환",
            "modifyDt": "2024-11-15",
            "uploader": 1,
            "createDt": "2024-11-15"
          }
        ],
        "page": 1,
        "size": 20,
        "totalPages": 1,
        "totalElements": 2
      }

    }
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
    openModal4() {
      this.closeModal3()
      console.log('isModalOpen2 ::: ')
      this.isModalOpen4 = true; // 모달 열기
    },
    closeModal4() {
      this.isModalOpen4 = false; // 모달 닫기
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