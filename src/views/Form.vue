<template>
  <section class="form-section">
    <h2>Formulario</h2>
    <form
      name="form"
      id="form"
      v-on:submit.prevent="registrar"
      class="container-form"
    >
      <label>Titulo</label>
      <input
        type="text"
        placeholder="Ciclíca"
        v-model="titulo"
        class="form-input"
      />
      <label>Nombre usuario</label>
      <input
        type="text"
        placeholder="Marc"
        v-model="nombre"
        class="form-input"
      />
      <label>Latitud</label>
      <input placeholder="55" v-model="latitud" class="form-input" />
      <label>Longitud</label>
      <input placeholder="33" v-model="longitud" class="form-input" />
      <input type="submit" value="Enviar" title="Enviar" class="form-button" />
    </form>
    <div class="section-cards">
      <div v-for="u in users" :key="u.id" class="card-container">
        <h3 class="name-text">{{ u.nombre }}</h3>
        <p class="position-text">
          Tu posición es <br />
          {{ u.latitud }} - {{ u.longitud }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { required, minLength, numeric } from "@vuelidate/validators";
import useValidate from "@vuelidate/core";
export default {
  data() {
    return {
      v$: useValidate(),
      users: [],
      id: "",
      titulo: "",
      nombre: "",
      latitud: "",
      longitud: "",
    };
  },
  validations() {
    return {
      nombre: { required, minLength: minLength(3) },
      latitud: { required, numeric },
      longitud: { required, numeric },
    };
  },

  methods: {
    registrar() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.users.push({
          id: Date.now(),
          titulo: this.titulo,
          nombre: this.nombre,
          latitud: this.latitud,
          longitud: this.longitud,
        });
        this.titulo = "";
        this.nombre = "";
        this.latitud = "";
        this.longitud = "";
      } else {
        alert("no paso");
      }
    },
  },
};
</script>
<style scoped>
.form-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.form-section h2 {
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 10px;
}
.form-section .container-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 320px;
  gap: 10px;
  text-align: justify;
}
.form-section .container-form label {
  font-size: 1.6rem;
}
.form-section .container-form .form-input,
.form-section .container-form .form-button {
  width: 100%;
  padding: 10px 20px;
  outline: none;
  border: 2px solid black;
  border-radius: 5px;
}
.form-section .container-form .form-button {
  margin-top: 5px;
  background-color: #fff;
  color: green;
  font-weight: 600;
  letter-spacing: 1px;
  border: 2px solid green;
}
.form-section .container-form .form-button:hover {
  background-color: green;
  color: #fff;
  border: 2px solid #fff;
  cursor: pointer;
}
.form-section .container-form .form-input:focus {
  border: 2px solid red;
}
.form-section .section-cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35%;
  gap: 35px;
}
.form-section .section-cards .card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 150px;
  height: 100px;
  border: 2px solid black;
  text-align: center;
}
.form-section .section-cards .card-container h3 {
  font-size: 1.4rem;
}
.form-section .section-cards .card-container .position-text {
  font-size: 1.3rem;
  line-height: 1.5rem;
}
</style>
