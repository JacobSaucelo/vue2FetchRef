<template>
  <div class="userContainer">
    <h1>POSTS</h1>
    <div v-if="loading">Loading...</div>

    <div v-else-if="error">{{ errorMessage }}</div>

    <div v-else>
      <section>
        <div v-for="post in posts" :key="post.id" class="card">
          <article>
            <h3>
              <router-link :to="'/post/' + post.id">
                {{ post.title }}
              </router-link>
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

<style scoped>
.userContainer {
  max-width: 900px;
  width: 100%;
  margin: auto;
  text-align: start;
}

.card {
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: 0.5rem;
}
</style>
