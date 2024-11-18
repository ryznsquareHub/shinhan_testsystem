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
        <BasicButton text="레포-담당자등록"/>
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

let selectedSystem = ref("계정계");

export default {
  name: "ManagementPage",
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
      selectedSystem
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