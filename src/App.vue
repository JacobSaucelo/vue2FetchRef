<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <CompGetUsers /> -->
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/post/2">Home2</router-link> -->
    <section class="headerLinks">
      <router-link to="/">Home</router-link> -
      <router-link to="/display">display</router-link> -
      <router-link to="/crudtest">crudtest</router-link> -
      <router-link to="/cookies-nolibrary">cookies-nolibrary</router-link> -
      <router-link to="/cookies-library">cookies-library</router-link> -
      <router-link to="/comp-vuex">comp-vuex</router-link> -
      <router-link to="/comp-petsx">comp-petsx</router-link> -
      <router-link to="/comp-boot-list">comp-boot-list</router-link>
    </section>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.headerLinks {
  max-width: 900px;
  margin: auto;
}
</style>

<!-- npm install vuex@3 -->
<!-- npm install vue-router@3 -->
