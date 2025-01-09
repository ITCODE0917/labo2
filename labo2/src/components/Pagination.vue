<template>
    <nav class="d-flex justify-content-center">
      <ul class="pagination">
        <li
          class="page-item"
          :class="{ disabled: currentPage === 1 }"
          @click="changePage(currentPage - 1)"
        >
          <a class="page-link" href="#">Previous</a>
        </li>
        <li
          v-for="page in totalPages"
          :key="page"
          class="page-item"
          :class="{ active: page === currentPage }"
          @click="changePage(page)"
        >
          <a class="page-link" href="#">{{ page }}</a>
        </li>
        <li
          class="page-item"
          :class="{ disabled: currentPage === totalPages }"
          @click="changePage(currentPage + 1)"
        >
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Pagination",
    props: {
      currentPage: {
        type: Number,
        required: true,
      },
      totalPages: {
        type: Number,
        required: true,
      },
    },
    methods: {
      changePage(page) {
        if (page > 0 && page <= this.totalPages) {
          this.$emit("update:currentPage", page);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .pagination {
    margin-top: 20px;
  }
  .page-item.active .page-link {
    background-color: #007bff;
    border-color: #007bff;
    color: white;
  }
  .page-item .page-link {
    cursor: pointer;
  }
  .page-item.disabled .page-link {
    cursor: not-allowed;
  }
  </style>
  