<template>
  <div class="card" style="width: 18rem; height: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <img :src="book.image || defaultImage" class="card-img-top" alt="Book Cover"/>
    <div class="card-body">
      <h5 class="card-title">{{ book.title }}</h5>
      <p class="card-text"><strong>Auteur:</strong> {{ book.writer?.fullname.trim() || 'Auteur inconnu' }}</p>
      <p><strong>Date de publication:</strong> {{ book.date }}</p>
    </div>
    <div class="card-footer">
      <router-link :to="`/books/${book.isbn.isbn10.id}`" class="btn btn-primary w-100">Afficher les détails</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookCard",
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      defaultImage: "/images/default-book-cover.jpg",
    };
  },
};
</script>
