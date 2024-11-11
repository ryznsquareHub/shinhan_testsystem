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
  name: 'CodeCoveragePage',
  data() {
    return {
      columns: [
        { label: '경로', field: 'path' },
        { label: '파일명', field: 'file' },
        { label: '함수', field: 'function' },
        { label: '라인(%)', field: 'line', type: 'number' },
        { label: '변경라인(%)', field: 'changedLine', type: 'number' },
        { label: '서버이름', field: 'server'},
        { label: '보고서', field: 'report', sortable: false, type: 'button', btnText: "다운",
          onClick: (row) => {
            console.log(row)
          }
        }
      ],
      rows: [
        { id:1, path:"/CBB/SERVICE_MODULE/", file: 'kaba119.c', function: 100, line: 100, changedLine: 100, server: '20011_INF', report: 'button' },
        { id:2, path:"/CBB/SERVICE_MODULE/", file: 'kaba119.c', function: 100, line: 100, changedLine: 100, server: '20011_INF', report: 'button' },
        { id:3, path:"/CBB/SERVICE_MODULE/", file: 'kaba119.c', function: 100, line: 100, changedLine: 100, server: '20011_INF', report: 'button' },
      ]
    }
  } ,
  components: {
    BasicTable
  }
}
</script>