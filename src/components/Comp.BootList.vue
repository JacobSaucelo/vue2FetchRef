<template>
  <div>
    <b-form @submit.prevent="addItem">
      <b-form-input
        v-model="newItem"
        placeholder="Enter a new item"
      ></b-form-input>
      <b-button type="submit" variant="primary">Add Item</b-button>
    </b-form>

    <b-table striped hover :items="items" :fields="fields">
      <template v-slot:cell(actions)="data">
        <b-button @click="editItem(data.item.id)" variant="info">Edit</b-button>
        <b-button @click="deleteItem(data.index)" variant="danger"
          >Delete</b-button
        >
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: "",
      items: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
      ],
      fields: [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "actions", label: "Actions" },
      ],
    };
  },
  methods: {
    addItem() {
      if (this.newItem.trim() !== "") {
        this.items.push({ id: this.items.length + 1, name: this.newItem });
        this.newItem = "";
      }
    },
    editItem(id) {
      console.log("Edit item with ID:", id);
    },
    deleteItem(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>
