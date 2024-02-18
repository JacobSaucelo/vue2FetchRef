<template>
  <div>
    <!-- CREATTTE -->
    <input type="text" v-model="newItemText" />
    <button @click="addItem">Add Item</button>

    <!-- READD -->
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
        <button @click="editItem(index)">Edit</button>
        <button @click="deleteItem(index)">Delete</button>
      </li>
    </ul>

    <!-- EDITUPDATELMAOASDFASDFASDF -->
    <div v-if="editing !== null">
      <input type="text" v-model="editedItemText" />
      <button @click="updateItem">Save</button>
      <button @click="cancelEdit">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ["Item 1", "Item 2", "Item 3"],
      newItemText: "",
      editing: null,
      editedItemText: "",
    };
  },
  methods: {
    addItem() {
      if (this.newItemText.trim() !== "") {
        this.items.push(this.newItemText);
        this.newItemText = "";
      }
    },
    editItem(index) {
      this.editing = index;
      this.editedItemText = this.items[index];
    },
    updateItem() {
      if (this.editedItemText.trim() !== "") {
        this.items[this.editing] = this.editedItemText;
        this.editing = null;
        this.editedItemText = "";
      }
    },
    cancelEdit() {
      this.editing = null;
      this.editedItemText = "";
    },
    deleteItem(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>
