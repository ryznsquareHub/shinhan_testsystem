<template>
  <!--  영향도 분석, 코드 검사, 코드 커버리지 화면  -->
  <section class="modal-examples">
    <div>
      <BasicButton @click="showFeedback = true" text="피드백 요청"/>
      <Teleport to="body">
        <Modal :show="showFeedback" @close="showFeedback = false">
          <template #body>
            <div class="text-center text-m-center text-light" style="width: 240px">
              <p>담당자에 영향도 확인요청 피드백을<br/>요청하시겠습니까?</p>
            </div>
          </template>
          <template #footer>
            <div class="btn-group-4">
              <BasicButton text="취소" button-style="cancel-btn" width="130px"/>
              <BasicButton text="발송/재발송" width="130px"/>
              <BasicButton text="자가확인" width="130px"/>
              <BasicButton text="요청자취소" width="130px"/>
            </div>
          </template>
        </Modal>
      </Teleport>
    </div>

    <div>
      <BasicButton @click="showFeedbackError = true" text="피드백 요청 (불가한 항목)"/>
      <Teleport to="body">
        <Modal :show="showFeedbackError" @close="showFeedbackError = false">
          <template #body>
            <div class="text-center text-m-center text-light" style="width: 260px;">
              <p>피드백 요청이 불가한 항목이 있습니다.</p>
            </div>
          </template>
        </Modal>
      </Teleport>
    </div>

    <div>
      <BasicButton @click="showCodeTestEnd = true" text="코드검사 완료 알림"/>
      <Teleport to="body">
        <Modal :show="showCodeTestEnd" @close="showCodeTestEnd = false">
          <template #body>
            <div class="info-box text-light" style="width: 260px;margin: -20px auto;">
              <p><b>제목:</b> [품질관리 코드검사 완료알림]</p>
              <span>WR123-DP1</span>
              <p><b>보낸이:</b> 품질관리시스템</p>
              <hr>
              <p><b>문서 DP번호:</b> WR1213-DP1</p>
              <p><b>완료일시:</b> 2024-03-07 23:42</p>
              <p><b>파일:</b> pgfram609.c</p>
              <hr>
              <hr>
              <p>에 대한 코드검사가 완료되었습니다.</p>
            </div>
          </template>
          <template #footer>
            <div/>
          </template>
        </Modal>
      </Teleport>
    </div>

    <div>
      <BasicButton @click="showTestEnd = true" text="검사완료 알림 요청"/>
      <Teleport to="body">
        <Modal :show="showTestEnd" @close="showTestEnd = false">
          <template #body>
            <div class="text-center text-light" style="width: 240px;margin: -12px auto 24px;">
              <p>검사중인 파일의 완료알림을<br/>요청 하시겠습니까?</p>
            </div>
          </template>
          <template #footer>
            <div class="btn-group-2">
              <BasicButton text="취소" button-style="cancel-btn" width="100%"/>
              <BasicButton text="확인" width="100%"/>
            </div>
          </template>
        </Modal>
      </Teleport>
    </div>

    <div>
      <BasicButton @click="showOrganization = true" text="조직 조회"/>
      <Teleport to="body">
        <Modal :show="showOrganization" @close="showOrganization = false">
          <template #body>
            <div class="organization-modal">
              <div style="width: 225px">
                <div class="flex-btn-box">
                  <img :src="require(`@/assets/icons/structure.svg`)" alt="조직" width="20px">
                  <span>조직</span>
                </div>
                <div class="scrollable-area">
                  <DataTree :nodes="treeData"/>
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
                  <BasicTable :columns="orgColumns" :rows="orgRows" enable-row-check/>
                </div>
                <div class="btn-group-2" style="width: 170px; margin: 18px auto;">
                  <BasicButton class="small-btn" text="취소" button-style="cancel-btn"/>
                  <BasicButton class="small-btn" text="선택"/>
                </div>
                <hr>
                <span class="selected-users"> • 선택된 사용자</span>
                <div class="scrollable-area" style="max-height: 150px; margin-top: 4px">
                  <BasicTable :columns="orgColumns2" :rows="orgRows"/>
                </div>
              </div>
            </div>
          </template>
          <template #footer>
            <div class="btn-group-2" style="width: 200px; margin: 0 auto;">
              <BasicButton text="취소" button-style="cancel-btn" width="94px"/>
              <BasicButton text="확인" width="94px"/>
            </div>
          </template>
        </Modal>
      </Teleport>
    </div>

    <div>
      <BasicButton @click="showFileAnalysisRequest = true" text="파일에 대한 영향도분석"/>
      <Teleport to="body">
        <Modal :show="showFileAnalysisRequest" @close="showFileAnalysisRequest = false">
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
                <p>에 대한 영향도분석 확인요청 하시겠습니까?</p>
              </div>
              <div class="flex-box-center">
                <span style="margin-right:26px">DBIO 있음</span>
                <BasicToggle/>
              </div>
              <div class="flex-box-center">
                <span style="margin-right:6px">의견</span>
                <BasicInput style="width: 158px"/>
              </div>
            </div>
          </template>
          <template #footer>
            <div class="btn-group-2">
              <BasicButton text="취소" button-style="cancel-btn" width="100%"/>
              <BasicButton text="발송" width="100%"/>
            </div>
          </template>
        </Modal>
      </Teleport>
    </div>

    <div>
      <BasicButton @click="showAnalysisCancel = true" text="영향도분석 취소 알림"/>
      <Teleport to="body">
        <Modal :show="showAnalysisCancel" @close="showAnalysisCancel = false">
          <template #body>
            <div class="info-box text-light" style="width: 300px;margin: -12px auto 24px;">
              <p><b>제목:</b> [영향도분석 취소알림] WR123-DP1</p>
              <p><b>보낸이:</b> 홍길동</p>
              <br/>
              <span>내용 :</span>
              <br/>
              <div style="margin-left:20px">
                <p><b>문서 DP번호:</b> WR1213-DP1</p>
                <p><b>경로:</b> 2024-03-07 23:42</p>
                <p><b>참조파일:</b> 2024-03-07 23:42</p>
                <p><b>연관프로그램:</b> 2024-03-07 23:42</p>
                <p><b>파일:</b> pgfram609.c</p>
              </div>
              <br/>
              <p>에 대한 영향도분석 취소했습니다.</p>
              <p>참고 바랍니다.</p>
              <hr>
              <p>DBIO 여부 : 없음</p>
            </div>

            <div class="flex-box-center text-light">
              <span style="margin-right:6px">의견</span>
              <div class="flex-box-center border-box text-light">
                <span>오탐으로 확인되었습니다.</span>
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

  <!--  검색 등 화면  -->
  <section class="modal-examples">

    <div>
      <BasicButton @click="showSearchParam = true" text="검색 파라미터 가변"/>
      <Teleport to="body">
        <Modal :show="showSearchParam" @close="showSearchParam = false">
          <template #body>
            <!--         OPTION 1           -->

            <!--            <div class="search-param-modal">-->
            <!--              <Dropdown-->
            <!--                :options="['계정계', '정보계']"-->
            <!--                :on-select="() => {}"-->
            <!--                style="margin-right: 18px"-->
            <!--              />-->
            <!--              <div class="resource-input mr-18">-->
            <!--                <span><b>리소스명</b></span>-->
            <!--                <textarea name="resource" id="resource" cols="15" rows="3" class="basic-textarea"></textarea>-->
            <!--              </div>-->
            <!--              <span class="mr-6"><b>리비전<br/>(빌드비전)</b></span>-->
            <!--              <Dropdown :options="['10', '9']" :on-select="() => {}"/>-->
            <!--            </div>-->

            <!--         OPTION 2           -->

            <!--           <div class="search-param-modal">-->
            <!--              <Dropdown-->
            <!--                :options="['실루엣', 'GIT', '계정계', '정보계']"-->
            <!--                :on-select="() => {}"-->
            <!--                style="margin-right: 18px"-->
            <!--              />-->
            <!--              <span class="mr-6"><b>문서번호명</b></span>-->
            <!--              <BasicInput id="문서번호명"/>-->
            <!--            </div>-->
            <!--            <hr>-->
            <!--            <div class="search-param-modal">-->
            <!--              <div class="flex-box mr-18">-->
            <!--                <span class="mr-6"><b>경로</b></span>-->
            <!--                <BasicInput id="경로" style="width: 150px"/>-->
            <!--              </div>-->
            <!--              <div class="flex-box mr-18">-->
            <!--                <span class="mr-6"><b>파일명</b></span>-->
            <!--                <BasicInput id="파일명" style="width: 120px"/>-->
            <!--              </div>-->
            <!--              <div class="flex-box mr-18">-->
            <!--                <span class="mr-6"><b>파일명</b></span>-->
            <!--                <BasicInput id="파일명2" style="width: 120px" />-->
            <!--              </div>-->
            <!--            </div>-->

            <!--         OPTION 3           -->
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

    <div>
      <BasicButton @click="showFeedbackConfirm = true" text="영향도 피드백"/>
      <Teleport to="body">
        <Modal :show="showFeedbackConfirm" @close="showFeedbackConfirm = false">
          <template #body>
            <div class="text-center text-m-center text-light" style="width: 240px">
              <p>영향도 피드백을 하시겠습니까?</p>
            </div>
          </template>
          <template #footer>
            <div class="btn-group-3">
              <BasicButton text="취소" button-style="cancel-btn" width="100%"/>
              <BasicButton text="피드백" width="100%"/>
              <BasicButton text="대결요청" width="100%"/>
            </div>
          </template>
        </Modal>
      </Teleport>
    </div>

    <div>
      <BasicButton @click="showSendConfirm = true" text="피드백 발송"/>
      <Teleport to="body">
        <Modal :show="showSendConfirm" @close="showSendConfirm = false">
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
                <p>에 대해 OK는 영향도 없음,<br/>
                  개발필요는 영향도 있음으로 담당자에 확인메일을<br/>
                  처리합니다. 발송 하시겠습니까?</p>
              </div>
              <div class="flex-box-center">
                <span style="margin-right:6px">변경내용</span>
                <BasicInput style="width: 158px"/>
              </div>
            </div>
          </template>
          <template #footer>
            <div class="btn-group-3">
              <BasicButton text="취소" button-style="cancel-btn" width="100%"/>
              <BasicButton text="피드백" width="100%"/>
              <BasicButton text="대결요청" width="100%"/>
            </div>
          </template>
        </Modal>
      </Teleport>
    </div>

    <div>
      <BasicButton @click="showFeedbackRequest = true" text="피드백 요청 알림"/>
      <Teleport to="body">
        <Modal :show="showFeedbackRequest" @close="showFeedbackRequest = false">
          <template #body>
            <div class="info-box text-light" style="width: 300px;margin: -12px auto 24px;">
              <p><b>제목:</b> [영향도분석 취소알림] WR123-DP1</p>
              <p><b>보낸이:</b> 홍길동</p>
              <br/>
              <span>내용 :</span>
              <br/>
              <div style="margin-left:20px">
                <p><b>문서 DP번호:</b> WR1213-DP1</p>
                <p><b>경로:</b> 2024-03-07 23:42</p>
                <p><b>참조파일:</b> 2024-03-07 23:42</p>
                <p><b>연관프로그램:</b> 2024-03-07 23:42</p>
              </div>
              <br/>
              <div class="flex-box text-light">
                <span style="margin-right:6px">변경내용</span>
                <div class="flex-box-center border-box text-light">
                  <span style="width: 120px;">Start0 함수에 회원종류
                    param 추가해 주시면
                    영향성 패스.</span>
                </div>
              </div>
              <br/>
              <p>에 대해 OK는 영향도분석 결과는</p>
              <p>(OK/개발필요) 입니다.</p>
            </div>
          </template>
          <template #footer>
            <div/>
            <!--            <div class="btn-group-2">-->
            <!--              <BasicButton text="취소" button-style="cancel-btn" width="100%"/>-->
            <!--              <BasicButton text="대리결제요청" width="100%"/>-->
            <!--            </div>-->
          </template>
        </Modal>
      </Teleport>
    </div>

    <div>
      <BasicButton @click="showTestEdit = true" text="성능검사 등록/수정, 테스트 자동화"/>
      <Teleport to="body">
        <Modal :show="showTestEdit" @close="showTestEdit = false">
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

    <div>
      <BasicButton @click="showRepoManager = true" text="레포지토리-담당자 등록/수정"/>
      <Teleport to="body">
        <Modal :show="showRepoManager" @close="showRepoManager = false">
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
  </section>
</template>

<script setup>
import {ref} from 'vue'
import Modal from "@/components/common/Modal";
import BasicButton from "@/components/common/BasicButton";
import DataTree from "@/components/common/DataTree"
import BasicTable from "@/components/common/BasicTable"
import BasicToggle from "@/components/common/BasicToggle"
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