<template>
  <div>
    <h2>Submitted Form Data</h2>
    <p><strong>Name:</strong> {{ formData.name }}</p>
    <p><strong>Email:</strong> {{ formData.email }}</p>
    <p><strong>Message:</strong> {{ formData.message }}</p>
    <p><strong>Agreed to terms:</strong> {{ formData.agree ? "Yes" : "No" }}</p>
    <p><strong>Gender:</strong> {{ formData.gender }}</p>
    <p><strong>Country:</strong> {{ formData.country }}</p>

    <hr />
    <router-link to="/formTest">change value</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {},
    };
  },
  mounted() {
    const formData = localStorage.getItem("formData");
    if (formData) {
      this.formData = JSON.parse(formData);
    }
  },
};
</script>
