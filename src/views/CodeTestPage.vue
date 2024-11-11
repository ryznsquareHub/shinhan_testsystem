<template>
  <article class="page-area">
    <section>
      <BasicTable :columns="columns" :rows="rows"/>
    </section>
  </article>
</template>

<script>
import BasicTable from "@/components/common/BasicTable";

export default {
  name: 'CodeTestPage',
  data() {
    return {
      columns: [
        { label: '경로', field: 'path' },
        { label: '파일명', field: 'file' },
        { label: '리비전(빌드버전)', field: 'revision' },
        {
          label: '원료일시',
          field: 'completedAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd HH:mm',
          dateOutputFormat: 'yyyy/MM/dd HH:mm',
        },
        { label: '총이슈', field: 'total', type: 'number' },
        { label: '매우위험', field: 'extreme', type: 'number' },
        { label: '위험', field: 'dangerous', type: 'number' },
        { label: '보통', field: 'medium', type: 'number' },
        { label: '낮음', field: 'low', type: 'number' },
        { label: '보고서', field: 'report', sortable: false, type: 'button', btnText: "다운",
          onClick: (row) => {
            console.log(row)
          }
        }
      ],
      rows: [
        { id:1, path:"/CBB/SERVICE_MODULE/", file: 'kaba119.c', revision: 20, completedAt: "2024-11-11 13:00", total: 1000, extreme: 1000, dangerous: 1000, medium: 1000, low: 1000, report: "" },
        { id:2, path:"/CBB/SERVICE_MODULE/", file: 'kaba119.c', revision: 20, completedAt: "2024-11-11 13:00", total: 1000, extreme: 1000, dangerous: 1000, medium: 1000, low: 1000, report: "" },
        { id:3, path:"/CBB/SERVICE_MODULE/", file: 'kaba119.c', revision: 20, completedAt: "2024-11-11 13:00", total: 1000, extreme: 1000, dangerous: 1000, medium: 1000, low: 1000, report: "" },
      ]
    }
  } ,
  components: {
    BasicTable
  }
}
</script>