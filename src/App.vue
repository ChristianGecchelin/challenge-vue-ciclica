<template>
  <main>
    <px-header></px-header>
    <router-view class="container-body" />
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader";
export default {
  name: "App",
  components: { PxHeader },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;

  font-family: "DM Sans", sans-serif;
}
#app {
}
.body {
  margin: 0;
  padding: 0;
}
.main {
  width: 100%;
  height: 100vh;
}
.container-body {
  height: 85vh;
  width: 100%;
  min-width: 320px;
}
</style>
