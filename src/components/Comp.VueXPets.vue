<template>
  <div>
    <h2>Pets List</h2>
    <ul>
      <li v-for="pet in pets" :key="pet.id">
        {{ pet.name }} - {{ pet.type }}
        <button @click="removePet(pet.id)">Remove</button>
        <button @click="updatePet(pet)">Update Name</button>
      </li>
    </ul>
    <div>
      <label>edit pet name </label>
      <input type="text" v-model="editedPetName" />
    </div>
    <div>
      <label>new pet name</label>
      <input type="text" v-model="newPetName" />
    </div>
    <div>
      <label>new pet type</label>
      <input type="text" v-model="newPetType" />
    </div>
    <button @click="addPet">Add Pet</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newPetName: "",
      newPetType: "",
      editedPetName: "",
    };
  },
  computed: {
    pets() {
      return this.$store.state.pets;
    },
  },
  methods: {
    addPet() {
      const id = this.pets.length ? this.pets[this.pets.length - 1].id + 1 : 1;
      const newPet = {
        id,
        name: this.newPetName,
        type: this.newPetType,
      };
      this.$store.dispatch("addPet", newPet);
      this.newPetName = "";
      this.newPetType = "";
    },
    removePet(id) {
      this.$store.dispatch("removePet", id);
    },
    updatePet(pet) {
      const updatedPet = { ...pet, name: this.editedPetName };
      this.$store.dispatch("updatePet", updatedPet);
      this.editedPetName = "";
    },
  },
};
</script>
