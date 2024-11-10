<template>
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>

    <HelloWorld msg="Welcome to Your Vue.js App"/>

  </template>
  
  <script>
  import HelloWorld from '@components/HelloWorld.vue'

  export default {
    name: 'page1',
    components: {
    HelloWorld
  } 
  }
  </script>