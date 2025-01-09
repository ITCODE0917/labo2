<template>
  <div 
    class="card" 
    style="width: 18rem; height: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); cursor: pointer;" 
    @click="goToBookDetails"
  >
    <img :src="book.image || defaultImage" class="card-img-top" alt="Book Cover" />
    <div class="card-body">
      <h5 class="card-title">{{ book.title }}</h5>
      <p class="card-text"><strong>Auteur:</strong> {{ book.writer?.fullname.trim() || 'Auteur inconnu' }}</p>
      <p><strong>publication:</strong> {{ book.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
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
  methods: {
    goToBookDetails() {
      this.$router.push(`/books/${this.book.isbn.isbn10.id}`);
    },
  },
};
</script>
