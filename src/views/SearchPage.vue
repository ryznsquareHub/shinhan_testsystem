<template>
  <SubHeader>
    <template #content>
      <div class="search-sub-header">
        <Dropdown :options="['코드검사', '코드커버리지', '영향도 분석']" v-model="selectedView"
          :on-select="(option) => selectedView = option" />

        <div class="search-check-boxes">

          <RadioButton id="option1" name="radioGroup1" value="1" label="파일별" v-model="radioGroup1Option" />
          <RadioButton id="option2" name="radioGroup1" value="2" label="문서번호별" v-model="radioGroup1Option" />

          <!-- <CheckBox id="파일별2" label="파일별"/>
          <CheckBox id="문서번호별2" label="문서번호별"/> -->
          <BasicToggle v-if="selectedView === '영향도 분석'" :defaultActive="true" :handleChange="(v) => console.log(v)"
            label="헤더포함" />
        </div>
        <!-- <Dropdown :options="['계정계~~1', '정보계']" v-model="selectSystem" :on-select="(option) => selectSystem = option" /> -->
        <div v-if="selectedView === '코드검사'" class="doc-num doc-num1">

          <BasicInput v-if="radioGroup1Option == '2'" id="문서번호별" />

          <div class="resource-input" v-if="radioGroup1Option == '1'">
            <Dropdown v-if="radioGroup1Option === '1'" :options="['계정계', '정보계']" v-model="selectSystem"
              :on-select="(option) => selectSystem = option" />
            <span>리소스명</span>
            <textarea name="resource" id="resource" cols="15" rows="3" class="basic-textarea"></textarea>
            <span>리비전(빌드버전)명</span>
            <textarea name="resource" id="resource" cols="15" rows="3" class="basic-textarea"></textarea>
          </div>

        </div>

        <div v-if="selectedView === '코드커버리지'" class="doc-num">

          <BasicInput v-if="radioGroup1Option == '2'" id="문서번호별" />

          <div class="resource-input" v-if="radioGroup1Option == '1'">
            <Dropdown :options="['계정계', '정보계']" v-model="selectSystem" :on-select="(option) => selectSystem = option" />
            <!-- <Dropdown :options="['실루엣', 'GIT', '계정계', '정보계']" v-model="selectSystem"
              :on-select="(option) => selectSystem = option" /> -->
            <span>리소스명</span>
            <textarea name="resource" id="resource" cols="15" rows="3" class="basic-textarea"></textarea>
          </div>
        </div>

        <div class="resource-input" v-if="radioGroup1Option === '1'">
          <span>리소스명</span>
          <textarea name="resource" id="resource" cols="15" rows="3" class="basic-textarea"></textarea>
        </div>

        <div class="search-buttons">
          <BasicButton v-if="selectedView !== '코드커버리지'" @click="openModal" text="검색 파라미터 가변" id="param-search"
            class="search-btn" width="250px" />
          <BasicButton text="검색" class="search-btn" />
        </div>
      </div>

    </template>
  </SubHeader>

  <article class="page-area">
    <section v-if="selectedView === '코드검사'">
      <div class="flex-end" style="margin-bottom: 20px">
        <BasicButton text="코드검사 바로가기" />
      </div>
      <BasicTable :columns="codeTestColumns" :rows="codeTestRows" />
    </section>

    <section v-if="selectedView === '코드커버리지'">
      <div class="flex-end" style="margin-bottom: 20px">
        <BasicButton text="커버리지 바로가기" />
      </div>
      <BasicTable :columns="codeCoverageColumns" :rows="codeCoverageRows" />
    </section>

    <template v-if="selectedView === '영향도 분석'">
      <section>
        <div class="flex-end" style="margin-bottom: 20px">
          <BasicButton text="영향도 바로가기" />
        </div>
        <BasicTable :columns="effectColumnsTop" :rows="effectRowsTop" enable-row-check />
      </section>
      <hr class="blue-divider">
      <section>
        <BasicTable :columns="effectColumnsBottom" :rows="effectRowsTopBottom" />
      </section>
    </template>
  </article>

  <section class="modal-examples">
    <Teleport to="body">
      <Modal v-if="isModalOpen" @close="closeModal">
        <template #body>
          <div class="flex-box-center border-box text-light"
            style="flex-direction: column; margin-left: auto; width: 180px">
            <span>/50.제휴대출/01.싱크풀</span>
            <span>/50.제휴대출/02.유엔솔루션</span>
          </div>
          <hr>
          <div class="search-param-modal">
            <Dropdown :options="['실루엣', 'GIT', '계정계', '정보계']" :on-select="() => { }" style="margin-right: 18px" />
            <span class="mr-6"><b>상위프로젝트</b></span>
            <!--              <span class="mr-6"><b>GIT주소</b></span>-->
            <BasicInput id="문서번호명" />
          </div>
          <hr>
          <div class="search-param-modal">
            <div class="flex-box mr-18">
              <span class="mr-6"><b>경로</b></span>
              <BasicInput id="경로" style="width: 150px" />
            </div>
            <div class="flex-box mr-18">
              <span class="mr-6"><b>파일명</b></span>
              <BasicInput id="파일명" style="width: 120px" />
            </div>
          </div>

        </template>
        <template #footer>
        </template>
      </Modal>
    </Teleport>

  </section>

</template>
<script>

import SubHeader from "@/components/layout/SubHeader";
import Dropdown from "@/components/common/Dropdown";
import BasicTable from "@/components/common/BasicTable";
import CheckBox from "@/components/common/CheckBox";
import RadioButton from "@/components/common/RadioButton";
import BasicInput from "@/components/common/BasicInput";
import BasicButton from "@/components/common/BasicButton";
import BasicToggle from "@/components/common/BasicToggle";
import Modal from "@/components/common/Modal";
import { ref } from "vue";
import axios from 'axios';

let selectedView = ref("코드검사");
let selectSystem = ref("계정계");

export default {
  name: "SearchPage",
  components: {
    BasicTable,
    SubHeader,
    Dropdown,
    CheckBox,
    RadioButton,
    BasicInput,
    BasicButton,
    BasicToggle,
    Modal
  },
  setup() {
    return {
      selectedView,
      selectSystem
    }
  },
  data() {
    return {
      isModalOpen: false, // 모달 상태 변수
      radioGroup1Option: null,
      codeTestColumns: [
        { label: '경로', field: 'path', sortable: true },
        { label: '파일명', field: 'file', sortable: true },
        { label: '리비전(빌드버전)', field: 'revision', sortable: true },
        {
          label: '분석일시',
          field: 'analyzedAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd HH:mm',
          dateOutputFormat: 'yyyy/MM/dd HH:mm', sortable: true
        },
        { label: '총이슈', field: 'issueCount', type: 'number', sortable: true },
        { label: '매우위험', field: 'risk1IssueCount', type: 'number', sortable: true },
        { label: '위험', field: 'risk2IssueCount', type: 'number', sortable: true },
        { label: '보통', field: 'risk3IssueCount', type: 'number', sortable: true },
        { label: '낮음', field: 'risk4IssueCount', type: 'number', sortable: true },
        {
          label: '보고서', field: 'report', sortable: false, type: 'button', btnText: "다운", onClick: (row) => {
            console.log(row)
          }
        }
      ],
      codeTestRows: [
        {
          path: "test", file: "test", revision: "test", analyzedAt: "2024-11-11 13:00", issueCount: "test",
          risk1IssueCount: "test", risk2IssueCount: "test", risk3IssueCount: "test", risk4IssueCount: "test", report: ""
        }
      ],
      codeCoverageColumns: [
        { label: '경로', field: 'wrFilePath', sortable: true }, // Matches the 'wrFilePath' field in JSON
        { label: '파일명', field: 'wrFileName', sortable: true }, // Matches the 'wrFileName' field in JSON
        { label: '함수', field: 'function', sortable: true }, // Matches the 'function' field in JSON
        { label: '라인(%)', field: 'line', type: 'number', sortable: true }, // Matches the 'line' field in JSON
        { label: '변경라인(%)', field: 'modline', type: 'number', sortable: true }, // Matches the 'modline' field in JSON
        { label: '서버이름', field: 'silGroupId', sortable: true }, // Matches the 'silGroupId' field in JSON
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
      codeCoverageRows: [
        { wrFilePath: "test", wrFileName: "test", function: "test", line: 1, modline: 1, silGroupId: "test", link: "" }
      ],
      effectColumnsTop: [
        { label: '경로', field: 'path', sortable: false },
        { label: '파일명', field: 'file', sortable: false },
        {
          label: '분석일시',
          field: 'analyzedAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd HH:mm',
          dateOutputFormat: 'yyyy/MM/dd HH:mm', sortable: false
        }
      ],
      effectRowsTop: [
        { path: "test", file: "test", analyzedAt: "2024-11-11 13:00" }
      ],
      effectColumnsBottom: [
        { label: '업무', field: 'prjKorNm', sortable: false }, // JSON의 prjKorNm에 해당
        { label: '경로', field: 'wrFilePath', sortable: false }, // JSON의 wrFilePath에 해당
        { label: '참조파일', field: 'tgPgm', sortable: false }, // JSON의 tgPgm에 해당
        { label: '연관프로그램', field: 'wrFileName', sortable: false }, // JSON의 wrFileName에 해당
        { label: '설명', field: 'fileDesc', sortable: false }, // JSON의 fileDesc에 해당
        { label: '담당자', field: 'name', sortable: false }, // JSON의 name에 해당
        { label: '부서', field: 'dbrnName', sortable: false }, // JSON의 dbrnName에 해당
        { label: '확인상태', field: 'feedbackStatus', sortable: false }, // JSON의 feedbackStatus에 해당
        { label: 'DBIO여부', field: 'dbioFlag', sortable: false }, // JSON의 dbioFlag에 해당
        {
          label: '발송일',
          field: 'createDt', // JSON의 createDt에 해당
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd HH:mm',
          dateOutputFormat: 'yyyy/MM/dd HH:mm',
          sortable: false
        },
        {
          label: '확인일',
          field: 'checkedAt', // '확인일'에 해당하는 필드가 JSON에 없으므로 추가 필요 시 정의해야 함
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd HH:mm',
          dateOutputFormat: 'yyyy/MM/dd HH:mm',
          sortable: false
        }
      ],
      effectRowsTopBottom: [
        {
          prjKorNm: "test", wrFilePath: "test", tgPgm: "test", wrFileName: "test", fileDesc: "test",
          name: "test", dbrnName: "test", feedbackStatus: "test",
          dbioFlag: "test", createDt: "2024-11-11 13:00", checkedAt: "2024-11-11 13:00"
        }
      ],
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = true; // 모달 열기
    },
    closeModal() {
      this.isModalOpen = false; // 모달 닫기
    },
  },
}
</script>

<style>
.search-sub-header {
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.search-sub-header>.dropdown .dropdown-button span {
  color: var(--secondary) !important;
  font-weight: bold;
}
.resource-input>.dropdown .dropdown-button span {
  color: var(--secondary) !important;
  font-weight: bold;
}


.search-sub-header .dropdown {
  width: 130px;
}

.search-check-boxes {
  align-self: flex-start;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.doc-num {
  align-self: flex-start;
  padding-top: 4px;
  display: flex;
  flex-direction: column;
  row-gap: 6px;
}

.doc-num .custom-basic-input {
  margin-top: 0;
}

.search-buttons {
  display: flex;
  gap: 20px;
  margin-left: auto;
}

.search-sub-header>.search-buttons button {
  background-color: var(--blue);
}

.resource-input {
  display: flex;
  padding-top: 4px;
  align-self: flex-start;
  gap: 26px;
}

.modal-examples {
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding: 40px;
}
</style>