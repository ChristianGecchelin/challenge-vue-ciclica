<template>
  <section class="section-flex">
    <div class="map-container"></div>
    <div class="text-container">
      <h2 class="text-title">Comprueba una ubicación !</h2>
      <p class="principal-text">
        Para ello te pido que hagas click en el link debajo y completes el form.
      </p>
      <p class="link">
        <router-link to="form">Ir a Form</router-link>
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: "PxMap",
  components: {},
};
</script>

<style scoped>
.section-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
}
.section-flex .map-container {
  width: 100%;
  height: 50%;
  min-width: 320px;
}
.section-flex .text-container {
  width: 80%;
  height: 30%;
  text-align: center;
}
.section-flex .text-container .text-title {
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2rem;
  margin-bottom: 10px;
}
.section-flex .text-container .principal-text {
  font-size: 1.4rem;
  margin-bottom: 10px;
}

.section-flex .text-container .link a {
  display: inline-block;
  color: red;
  font-size: 2rem;
  line-height: 2.2rem;
  border: 2px solid red;
  width: 200px;
  padding: 10px 0;
  border-radius: 15px;
}
.section-flex .text-container .link a:hover {
  color: white;
  background-color: red;
}
</style>
