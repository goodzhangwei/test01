<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0)
    })

  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
  * {
    margin: 0;
    padding: 0;
  }
html,body {
    width:100%;
    height: 100%;
  /*overflow:-Scroll;overflow:hidden;*/
  }
</style>
