<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
    <button @click="incrementAsync">Increment Async</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
    doubleCount() {
      return this.$store.getters.doubleCount;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    incrementAsync() {
      this.$store.dispatch("incrementAsync");
    },
  },
};
</script>
