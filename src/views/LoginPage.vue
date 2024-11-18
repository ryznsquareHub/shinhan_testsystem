<template>
  <div class="login-modal-buttons">
    <BasicButton id="show-modal1"
                 @click="showModal1 = true"
                 text="품질관리 로그인"/>

    <BasicButton id="show-modal2"
                 @click="showModal2 = true"
                 text="비번 변경"/>

    <BasicButton id="show-moda3l"
                 @click="showModal3 = true"
                 text="비번 초기화"/>
  </div>


  <Teleport to="body">
    <Modal :show="showModal1" @close="showModal1 = false">
      <template #header>
        <div class="login-header">
          <img :src="require(`@/assets/icons/login.png`)" alt="로그인" width="17px" height="17.5px">
          <h3>품질관리 로그인</h3>
        </div>
      </template>
      <template #body>
        <div class="bg-light-box desc-text" style="width: 243px">
          <p>직원용 골드넷 아이디/비밀번호와 동일하며, 비밀번호 변경은 권한포털 사이트에서 가능합니다.
            <br/><a href="/" class="underlined">권한관리 포털</a></p>
          <p>*외주직원(프로젝트포함)은 품질관리 자체 로그인(패스워드)을 통해 접속 가능합니다.</p>
          <a href="/" class="underlined">비번 초기화 바로가기</a>
        </div>
        <div>
          <LoginInput id="userID" label="ID"
                      :handleChange="(e) => userID = e.target.value" :value="userID"/>
          <div class="save-id-check">
            <span>ID저장</span>
            <CheckBox id="save-id"/>
          </div>
          <LoginInput id="userPW" label="Password" type="password"
                      :handleChange="(e) => userPW = e.target.value" :value="userPW"/>
        </div>
      </template>
      <template #footer>
        <BasicButton id="continue" text="Continue" width="100%" buttonStyle="continue-btn"/>
        <BasicButton id="swing-acc-login" text="swing 계정으로 로그인" width="100%"/>
      </template>
    </Modal>
  </Teleport>

  <Teleport to="body">
    <Modal :show="showModal2" @close="showModal2 = false">
      <template #header>
        <div class="login-header">
          <img :src="require(`@/assets/icons/lock.png`)" alt="비번" width="16px">
          <h3>비번 변경</h3>
        </div>
      </template>
      <template #body>
        <div class="bg-light-box desc-text text-center" style="width: 243px">
          <p>외주직원 최초 로그인 되었습니다.<br/>비번변경 후 다시 로그인 바랍니다.</p>
          <p>&#x2022; 비번은 대소문자, 특수문자 포함 <br/>8자이상입니다.</p>
        </div>
        <div>
          <LoginInput id="userID" label="Password" type="password"
                      :handleChange="(e) => userID = e.target.value" :value="userID"/>
          <LoginInput id="userPWNew" label="Change Password" type="password"
                      :handleChange="(e) => userPWNew = e.target.value" :value="userPWNew"/>
          <LoginInput id="userPWConfirm" label="Confirm" type="password"
                      :handleChange="(e) => userPWConfirm = e.target.value" :value="userPWConfirm"/>
        </div>
      </template>
    </Modal>
  </Teleport>

  <Teleport to="body">
    <Modal :show="showModal3" @close="showModal3 = false">
      <template #header>
        <div class="login-header">
          <img :src="require(`@/assets/icons/lock.png`)" alt="비번" width="16px">
          <h3>비번 초기화</h3>
        </div>
      </template>
      <template #body>
        <div class="bg-light-box desc-text text-center reset-desc">
          <p>사번으로 비번초기화를 실행합니다.</p>
        </div>
        <div style="height:150px">
          <LoginInput id="userID" label="ID"
                      :handleChange="(e) => userID = e.target.value" :value="userID"/>
        </div>
      </template>
      <template #footer>
        <BasicButton id="reset" text="초기화" width="198px" @click="showModal3 = false"/>
      </template>
    </Modal>
  </Teleport>
</template>


<script setup>
import {ref} from 'vue'
import Modal from "@/components/common/Modal";
import LoginInput from "@/components/common/LoginInput";
import BasicButton from "@/components/common/BasicButton";
import CheckBox from "@/components/common/CheckBox";

const showModal1 = ref(false)
const showModal2 = ref(false)
const showModal3 = ref(false)

const userID = ref("");
const userPW = ref("");
const userPWNew = ref("");
const userPWConfirm = ref("");

</script>

<script>
export default {
  name: "LoginPage"
}
</script>

<style scoped>

.login-modal-buttons > div {
  margin: 10px 0;
}

.login-header {
  width: 100%;
  display: flex;
  column-gap: 6px;
  justify-content: center;
  align-items: center;
}

.bg-light-box > a {
  width: 100%;
  display: block;
  text-align: end;
}

.continue-btn {
  margin: 4px 0 16px;
}

.save-id-check {
  display: flex;
  width: 100%;
  height: 12px;
  justify-content: end;
  align-items: center;
}

.save-id-check span {
  font-size: 10px;
}

.login-input {
  width: 100%;
}

.reset-desc {
  width: 243px;
  height: 106px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>