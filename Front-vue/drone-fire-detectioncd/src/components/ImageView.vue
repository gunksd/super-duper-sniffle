<template>
    <div>
      <h2>图像详情</h2>
      <div v-if="image">
        <img :src="image.url" alt="Image" />
        <div v-if="image.fireDetected" class="fire-overlay">火灾检测到！</div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['images']),
      image() {
        return this.images.find(img => img.id === this.$route.params.id);
      },
    },
  };
  </script>
  
  <style scoped>
  img {
    max-width: 100%;
    height: auto;
  }
  
  .fire-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 0, 0, 0.5);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
  }
  </style>
  