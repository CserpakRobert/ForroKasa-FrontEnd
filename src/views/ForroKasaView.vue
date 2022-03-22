<script setup lang="ts">
  import axios from "axios";
  import { log } from "console";
  import { addAbortSignal } from "stream";
  import { Ref } from "vue";

  let searchParams: any = {
    start: 0,
    amount: 5,
    sort: 0,
    category: "",
    userId: "",
    filter: "",
  };
  let recipes: Ref<any[]> = ref([]);
  function search() {
    console.log(searchParams);
    axios.get("http://localhost:5000/search", { params: searchParams }).then(
      (req) => {
        recipes.value = req.data;
      },
      (err) => console.log(err)
    );
  }
  const headers = ["asd", "dsa"];
</script>

<template>
  <table>
    <tr>
      <td>
        <label for="filter" style="margin-right: 5px">Filter:</label>
        <input
          type="text"
          name="filter"
          id="filter"
          placeholder="filter"
          v-model="searchParams.filter"
        />
      </td>
      <td>
        <label for="category" style="margin-right: 5px">Category:</label>
        <input
          type="text"
          name="category"
          id="category"
          placeholder="category"
          v-model="searchParams.category"
        />
      </td>
      <td>
        <button v-on:click="search()">submit</button>
      </td>
    </tr>
  </table>

  <table>
    <tr v-for="recipe of recipes" ref="recipes">
      <td>
        {{ recipe.title }}
      </td>
    </tr>
  </table>
</template>
