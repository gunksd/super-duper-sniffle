/* eslint-disable vue/multi-word-component-names */
<template>
  <header>
    <h1>无人机火灾检测</h1>
    <nav>
      <router-link to="/">图像列表</router-link>
      <router-link to="/image">查看图像</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: #333;
  color: #fff;
}

nav a {
  margin: 0 1em;
  color: #fff;
  text-decoration: none;
}
</style>
