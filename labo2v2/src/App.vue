<template>
  <div>
    <header class="bg-dark text-white py-3">
      <div class="container d-flex justify-content-between">
        <h1 class="h3">My Biblio</h1>
        <nav>
          <router-link to="/" class="text-white text-decoration-none me-3">Acceuil</router-link>
          <router-link to="/books" class="text-white text-decoration-none">Livres</router-link>
        </nav>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer class="bg-light text-center py-3 mt-5">
      <p>&copy; 2025 John Frednau Predelus. All rights reserved.</p>
    </footer>
  </div>
</template>
