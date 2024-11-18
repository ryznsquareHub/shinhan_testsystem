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
        <BasicButton text="엑셀 다운로드"/>
        <BasicButton text="테스트자동화등록"/>
        <BasicButton text="선택삭제"/>
      </div>
      <BasicTable :columns="columns" :rows="rows" enable-row-check/>
    </section>
  </article>
</template>

<script>
import SubHeader from "@/components/layout/SubHeader";
import BasicTable from "@/components/common/BasicTable";
import Dropdown from "@/components/common/Dropdown";
import BasicInput from "@/components/common/BasicInput";
import BasicButton from "@/components/common/BasicButton";
import DatePicker from "@/components/common/DatePicker";

import {ref} from "vue";

let selectedView = ref("요청");
let selectedChannel = ref("전체");
let selectTestType = ref("전체");

export default {
  name: "TestAutoPage",
  components: {
    BasicTable,
    SubHeader,
    Dropdown,
    BasicInput,
    BasicButton,
    DatePicker
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
  }
}
</script>

<style scoped>
.date-range-select {
  display: flex;
  gap: 6px;
  align-items: center;
}
</style>