<template>
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="formData.name" required />
    <br />

    <label for="email">Email:</label>
    <input type="email" id="email" v-model="formData.email" required />
    <br />

    <label for="password">Password:</label>
    <input type="password" id="password" v-model="formData.password" required />
    <br />

    <label for="message">Message:</label>
    <textarea id="message" v-model="formData.message" required></textarea>
    <br />

    <label for="checkbox">Agree to terms:</label>
    <input type="checkbox" id="checkbox" v-model="formData.agree" required />
    <br />

    <label>Gender:</label>
    <input
      type="radio"
      id="male"
      value="male"
      v-model="formData.gender"
      required
    />
    <label for="male">Male</label>
    <input type="radio" id="female" value="female" v-model="formData.gender" />
    <label for="female">Female</label>
    <br />

    <label for="country">Country:</label>
    <select id="country" v-model="formData.country" required>
      <option value="">Select Country</option>
      <option value="usa">USA</option>
      <option value="canada">Canada</option>
      <option value="uk">UK</option>
    </select>
    <br />

    <button @click="submitForm">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
        message: "",
        agree: false,
        gender: "",
        country: "",
      },
    };
  },
  methods: {
    submitForm() {
      if (this.validateForm()) {
        localStorage.setItem("formData", JSON.stringify(this.formData));

        this.formData = {
          name: "",
          email: "",
          password: "",
          message: "",
          agree: false,
          gender: "",
          country: "",
        };
        alert("Form submitted successfully!");
        this.$router.push("/display");
      } else {
        alert("Please fill out all fields.");
      }
    },
    validateForm() {
      return (
        this.formData.name &&
        this.formData.email &&
        this.formData.password &&
        this.formData.message &&
        this.formData.agree &&
        this.formData.gender &&
        this.formData.country
      );
    },
  },
};
</script>
