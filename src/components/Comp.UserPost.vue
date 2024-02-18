<template>
  <div>
    hwllo
    <h1>Post Page</h1>
    <div v-if="loading">Loading...</div>

    <div v-else-if="error">{{ errorMessage }}</div>

    <div v-else>
      <p>This is the post with ID: {{ $route.params.id }}</p>
      <p>id: {{ post.id }}</p>
      <p>userId: {{ post.userId }}</p>
      <p>title: {{ post.title }}</p>
      <p>body: {{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      error: false,
      errorMessage: "",
      post: {
        id: 0,
        userId: 0,
        title: "",
        body: "",
      },
    };
  },
  mounted() {
    this.fetchPost();
  },
  methods: {
    fetchPost() {
      const postId = this.$route.params.id;
      fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          this.post = data;
          this.loading = false;
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
          this.error = true;
          this.errorMessage = "Error fetching post. Please try again later.";
          this.loading = false;
        });
    },
  },
};
</script>
