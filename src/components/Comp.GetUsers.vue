<template>
  <div>
    <h1>POSTS</h1>
    <div v-if="loading">Loading...</div>

    <div v-else-if="error">{{ errorMessage }}</div>

    <div v-else>
      <section>
        <div v-for="post in posts" :key="post.id">
          <article>
            <h3>
              {{ post.title }}
            </h3>
            <p>{{ post.body }}</p>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      loading: true,
      error: false,
      errorMessage: "",
      posts: [],
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          this.posts = data;
          this.loading = false;
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
          this.error = true;
          this.errorMessage = "Error fetching posts. Please try again later.";
          this.loading = false;
        });
    },
  },
};
</script>
