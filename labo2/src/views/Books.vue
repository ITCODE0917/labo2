<template>
  <div class="container py-5">
    <h1 class="mb-4">My Biblio</h1>
    <input v-model="searchQuery" class="form-control mb-4" type="text" placeholder="Rechercher un livre par titre, auteur, annee ou editeur"/>
    <div class="mb-3 d-flex justify-content-end">
      <button class="btn btn-outline-primary me-2" @click="viewMode = 'grid'" :class="{ active: viewMode === 'grid' }"><i class="fas fa-th"></i></button>
      <button class="btn btn-outline-primary" @click="viewMode = 'list'" :class="{ active: viewMode === 'list' }"><i class="fas fa-list"></i> </button>
    </div>
    <div v-if="filteredBooks.length">
      <div v-if="viewMode === 'grid'" class="row row-cols-1 row-cols-md-3 g-4">
        <div v-for="book in paginatedBooks" :key="book.isbn.isbn13.id" class="col"> <BookCard :book="book" /></div>
      </div>
      <ul v-else class="list-group">
        <li v-for="book in paginatedBooks" :key="book.isbn.isbn13.id" class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <h5>{{ book.title }}</h5>
          </div>
          <router-link :to="`/books/${book.isbn.isbn10.id}`" class="btn btn-primary" > Afficher les détails</router-link>
        </li>
      </ul>
      <Pagination
        :currentPage.sync="currentPage"
        :totalPages="totalPages"
        @update:currentPage="currentPage = $event"
      />
    </div>
    <div v-else>
      <p class="text-muted text-center">Auncun livre trouvé.</p>
    </div>
  </div>
</template>

<script>
import BookCard from "../components/BookCard.vue";
import Pagination from "../components/Pagination.vue";
import books from "../data/books.js"

export default {
  name: "Books",
  components: {
    BookCard,
    Pagination,
  },
  data() {
    return {
      books: books,
      searchQuery: "",
      viewMode: "grid",
      currentPage: 1,
      itemsPerPage: 9,
    };
  },
  computed: {
    filteredBooks() {
      const searchQuery = this.searchQuery.toLowerCase();

      return this.books.filter((book) => {
        const matchesTitle = book.title.toLowerCase().includes(searchQuery);
        const matchesAuthor = book.writer?.fullname?.toLowerCase().includes(searchQuery);
        const matchesEditor = book.editor?.toLowerCase().includes(searchQuery);
        const matchesDatePub = book.date.toLowerCase().includes(searchQuery);

        // Return books that match any of the fields
        return matchesTitle || matchesAuthor || matchesEditor || matchesDatePub;
      });
    },
    paginatedBooks() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredBooks.slice(start, start + this.itemsPerPage);
    },
    totalPages() {
      return Math.ceil(this.filteredBooks.length / this.itemsPerPage);
    },
  },
};
</script>

<style scoped>
button.active {
  background-color: #007bff;
  color: white;
}
</style>
