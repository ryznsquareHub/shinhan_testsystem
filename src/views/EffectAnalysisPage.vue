<template>
  <article class="page-area">
    <section>
      <BasicTable :columns="columnsTopTable" :rows="rowsTopTable"/>
    </section>
    <hr class="blue-divider">
    <section>
      <BasicTable :columns="columnsBottomTable" :rows="rowsBottomTable"/>
    </section>
  </article>
</template>

<script>
import BasicTable from "@/components/common/BasicTable";

export default {
  name: 'EffectAnalysisPage',
  data() {
    return {
      columnsTopTable: [
        { label: '경로', field: 'path' },
        { label: '파일명', field: 'file' },
        {
          label: '분석일시',
          field: 'analyzedAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd HH:mm',
          dateOutputFormat: 'yyyy/MM/dd HH:mm',
        },
        { label: '확인건수', field: 'checkedCount' },
        { label: '', field: 'button', sortable: false, type: 'button', btnText: "상세보기",
            onClick: (row) => {
            console.log(row)
          }
        }
      ],
      rowsTopTable: [
        { id:1, path:"/AAA/SERVICE_MODULE/", file: "kiba112.c", analyzedAt: "2024-11-11 13:00", checkedCount: "1/5" },
        { id:2, path:"/AAA/SERVICE_MODULE/", file: "kiba112.c", analyzedAt: "2024-11-11 13:00", checkedCount: "1/5" },
        { id:3, path:"/AAA/SERVICE_MODULE/", file: "kiba112.c", analyzedAt: "2024-11-11 13:00", checkedCount: "1/5" },
      ],
      columnsBottomTable: [
        { label: '업무', field: 'task' },
        { label: '경로', field: 'path' },
        { label: '참조파일', field: 'attachedFile' },
        { label: '연관프로그램', field: 'program' },
        { label: '설명', field: 'description' },
        { label: '담당자', field: 'manager' },
        { label: '부서', field: 'department' },
        { label: '확인상태', field: 'isChecked' },
        { label: 'DBIO여부', field: 'dbioYn' },
        {
          label: '발송일',
          field: 'sentAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd HH:mm',
          dateOutputFormat: 'yyyy/MM/dd HH:mm',
        },
        {
          label: '확인일',
          field: 'checkedAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd HH:mm',
          dateOutputFormat: 'yyyy/MM/dd HH:mm',
        }
      ],
      rowsBottomTable: [
        { id:1, task:"/07.골드넷플러스_UI_플랫폼/03.Web_화면", path:"/21856/ABF/", attachedFile: "pgfram609.c", program: "liba123.c", description: "해외주식 알림톡발송",
          manager: "홍길동", department: "금융시스템부", isChecked: "ok", dbioYn: "없음", sentAt: "2024-11-11 13:00", checkedAt: "2024-11-11 13:00" },
        { id:2, task:"/07.골드넷플러스_UI_플랫폼/03.Web_화면", path:"/21856/ABF/", attachedFile:"pgfram609.c", program: "liba123.c", description: "해외주식 알림톡발송",
          manager: "홍길동", department: "금융시스템부", isChecked: "ok", dbioYn: "없음", sentAt: "2024-11-11 13:00", checkedAt: "2024-11-11 13:00" },
        { id:3, task:"/07.골드넷플러스_UI_플랫폼/03.Web_화면", path:"/21856/ABF/", attachedFile:"pgfram609.c", program: "liba123.c", description: "해외주식 알림톡발송",
          manager: "홍길동", department: "금융시스템부", isChecked: "ok", dbioYn: "없음", sentAt: "2024-11-11 13:00", checkedAt: "2024-11-11 13:00" },
      ]
    }
  } ,
  components: {
    BasicTable
  }
}
</script>