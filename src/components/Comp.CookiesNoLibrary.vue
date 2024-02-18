<template>
  <div>
    <h2>Cookie Example</h2>
    <button @click="setCookie">Set Cookie</button>
    <button @click="getCookie">Get Cookie</button>
    <button @click="deleteCookie">Delete Cookie</button>
    <div v-if="cookieValue">
      <p>Cookie Value: {{ cookieValue }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cookieValue: "",
    };
  },
  methods: {
    setCookie() {
      document.cookie = "myCookie=Hello, Cookie!";
      alert("Cookie set successfully!");
    },
    getCookie() {
      const cookies = document.cookie.split(";");
      for (let cookie of cookies) {
        let [name, value] = cookie.trim().split("=");
        if (name === "myCookie") {
          this.cookieValue = decodeURIComponent(value);
          return;
        }
      }
      alert("Cookie not found!");
    },
    deleteCookie() {
      document.cookie =
        "myCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      alert("Cookie deleted successfully!");
      this.cookieValue = "";
    },
  },
};
</script>
