<template>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-6"> <img :src="book.image || defaultImage" class="img-fluid rounded" alt="Book Cover"/>
        </div>
        <div class="col-md-6">
          <h1 class="mb-3">{{ book.title }}</h1>
          <strong>Auteur:</strong> {{ book.writer?.fullname.trim() || 'Auteur inconnu' }}
          <p><strong>Section:</strong> {{ book.section }}</p>
          <p><strong>Editeur:</strong> {{ book.editor }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import books from "../data/books.js"
  
  export default {
    data() {
      return {
        book: {},
        defaultImage: "/images/default-book-cover.jpg",
      };
    },
    mounted() {
      const bookId = this.$route.params.id;
      this.book = books.find((b) => b.isbn && b.isbn.isbn10 && parseInt(b.isbn.isbn10.id) === parseInt(bookId));

    },
  };
  </script>
  
  <style scoped>
  img {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  </style>
  