<template>
    <div class="home text-center">
      <div class="hero-section py-5">
        <h1 class="display-4 fw-bold">Bienvenue à notre bibliothèque</h1>
        <p class="lead">Découvrez les meilleurs livres, soigneusement sélectionnés pour vous.</p>
        <router-link to="/books" class="btn btn-primary btn-lg mt-3">Afficher les livres</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Home",
  };
  </script>
  
  <style scoped>
  .hero-section {
    background: linear-gradient(to right, #f9f9f9, #fff);
  }
  </style>
  