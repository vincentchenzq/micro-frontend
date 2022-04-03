<template>
  <div id="app">
    <button @click="jump(1)">页面1</button>
    <button @click="jump(2)">页面2</button>
    <router-view />
  </div>
</template>

<script>


export default {
  name: "App",
  components: {},
  mounted() {
  },
  methods: {
    jump(num) {
      this.$router.push({
        path: `/page${num}`,
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
