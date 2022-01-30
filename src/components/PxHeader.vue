<template>
  <nav>
    <div class="title-container">
      <span><img src="@/assets/marker.png" /></span>
      <router-link to="/"><h1>Challenge</h1></router-link>
    </div>
    <div class="links-container">
      <ul>
        <router-link to="/"><li>Home</li></router-link>
        <router-link to="form"><li>Form</li></router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "PxHeader",
  components: {},
};
</script>

<style>
nav {
  width: 100%;
  min-width: 320px;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-color: bisque;
}
nav .title-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 45%;
  margin: auto;
  text-align: center;
}
nav .title-container span img {
  width: 30px;
  height: 50%;
}
nav .title-container h1 {
  font-size: 2rem;
  text-transform: uppercase;
}
nav .links-container {
  margin: 0 auto;
  width: 50%;
}
nav .links-container ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  gap: 50px;
}
a {
  text-decoration: none;
  color: black;
}
a:visited {
  color: black;
}
nav .links-container ul a li {
  font-size: 1.8rem;
}
</style>
