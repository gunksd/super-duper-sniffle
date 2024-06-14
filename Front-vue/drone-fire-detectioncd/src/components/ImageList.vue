<template>
    <div>
      <h2>图像列表</h2>
      <ul>
        <li v-for="image in images" :key="image.id">
          <router-link :to="{ name: 'image', params: { id: image.id } }">{{ image.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['images']),
    },
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin: 0.5em 0;
  }
  </style>
  