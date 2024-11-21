<!-- eslint-disable no-unused-vars -->
<template>
  <!--  영향도 분석, 코드 검사, 코드 커버리지 화면  -->
  <!--  검색 등 화면  -->
  <section class="modal-examples">
    <div>
      <BasicButton @click="showSearchParam = true" text="검색 파라미터 가변"/>
      <Teleport to="body">
        <Modal :show="showSearchParam" @close="showSearchParam = false">
          <template #body>
            <div class="flex-box-center border-box text-light"
                 style="flex-direction: column; margin-left: auto; width: 180px">
              <span>/50.제휴대출/01.싱크풀</span>
              <span>/50.제휴대출/02.유엔솔루션</span>
            </div>
            <hr>
            <div class="search-param-modal">
              <Dropdown
                :options="['실루엣', 'GIT', '계정계', '정보계']"
                :on-select="() => {}"
                style="margin-right: 18px"
              />
              <span class="mr-6"><b>상위프로젝트</b></span>
              <!--              <span class="mr-6"><b>GIT주소</b></span>-->
              <BasicInput id="문서번호명"/>
            </div>
            <hr>
            <div class="search-param-modal">
              <div class="flex-box mr-18">
                <span class="mr-6"><b>경로</b></span>
                <BasicInput id="경로" style="width: 150px"/>
              </div>
              <div class="flex-box mr-18">
                <span class="mr-6"><b>파일명</b></span>
                <BasicInput id="파일명" style="width: 120px"/>
              </div>
            </div>

          </template>
          <template #footer>
            <div/>
          </template>
        </Modal>
      </Teleport>
    </div>
  </section>
</template>

<script setup>
import {ref} from 'vue'
import Modal from "@/components/common/Modal2";
import BasicButton from "@/components/common/BasicButton";
import BasicInput from "@/components/common/BasicInput";
import Dropdown from "@/components/common/Dropdown";

const showFeedback = ref(false)
const showFeedbackError = ref(false)
const showCodeTestEnd = ref(false)
const showTestEnd = ref(false)
const showOrganization = ref(false)
const showFileAnalysisRequest = ref(false)
const showAnalysisCancel = ref(false)


const showSearchParam = ref(false)
const showFeedbackConfirm = ref(false)
const showSendConfirm = ref(false)
const showFeedbackRequest = ref(false)

const showTestEdit = ref(false)
const showRepoManager = ref(true)


//조직 트리 뷰
const treeData = ref([
    {
      label: 'GIB2그룹',
      children: [
        {label: 'test'},
        {label: 'test'},
        {label: 'test'},
        {label: 'test'},
        {label: 'test'},
        {label: 'test'},
        {label: 'test'},
        {label: 'test'},
      ]
    },
    {
      label: 'ICT그룹',
      children: [
        {label: 'ICT기획부'},
        {label: '금융시스템부'},
        {label: '금융시스템부'},
        {
          label: 'ICT그룹2',
          children: [
            {label: '정보시스템부'},
            {label: '정보시스템부'},
            {label: '정보시스템부'},
            {
              label: '정보시스템부', children: [
                {label: '1팀'},
                {label: '2팀'},
              ]
            },
          ],
        },
      ],
    },
    {
      label: '리스크관리그룹',
      children: [
        {label: 'test'},
      ]
    },
    {
      label: '홀세일그룹',
      children: [
        {label: 'test'},
      ]
    },
    {
      label: '감사',
      children: [
        {label: 'test'},
      ]
    },
  ],
)

//조직 테이블
const orgColumns = [
  {label: '이름', field: 'name', sortable: false},
  {label: '아이디', field: 'id', sortable: false},
  {label: '부서명', field: 'department', sortable: false},
  {label: '팀명', field: 'team', sortable: false}
]
const orgColumns2 = [{label: '', field: 'delete', type: 'delete', sortable: false}, ...orgColumns]
const orgRows = [
  {name: "test", id: "test", department: "test", team: "test"},
  {name: "test", id: "test", department: "test", team: "test"},
  {name: "test", id: "test", department: "test", team: "test"},
  {name: "test", id: "test", department: "test", team: "test"},
  {name: "test", id: "test", department: "test", team: "test"},
  {name: "test", id: "test", department: "test", team: "test"},
  {name: "test", id: "test", department: "test", team: "test"},
  {name: "test", id: "test", department: "test", team: "test"},
  {name: "test", id: "test", department: "test", team: "test"},
  {name: "test", id: "test", department: "test", team: "test"},
]


</script>

<script>
export default {
  name: "ModalSamples"
}
</script>

<style scoped>
.modal-examples {
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding: 40px;
}
</style>