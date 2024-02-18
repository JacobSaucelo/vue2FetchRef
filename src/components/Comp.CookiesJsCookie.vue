<template>
  <div>
    <h2>Cookie Example (js-cookie) Library</h2>
    <button @click="setCookie">Set Cookie</button>
    <button @click="getCookie">Get Cookie</button>
    <button @click="deleteCookie">Delete Cookie</button>
    <div v-if="cookieValue">
      <p>Cookie Value: {{ cookieValue }}</p>
    </div>
    <div v-else>
      <p>Cookie Value: No Cookies sadge</p>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";

export default {
  data() {
    return {
      cookieValue: "",
    };
  },
  methods: {
    setCookie() {
      Cookies.set("myCookie", "HENLOOOOO ^_^, Cookie!");
      alert("Cookie set successfully!");
    },
    getCookie() {
      const cookieValue = Cookies.get("myCookie");
      if (cookieValue) {
        this.cookieValue = cookieValue;
      } else {
        alert("Cookie not found!");
      }
    },
    deleteCookie() {
      Cookies.remove("myCookie");
      alert("Cookie deleted successfully!");
      this.cookieValue = "";
    },
  },
};
</script>
