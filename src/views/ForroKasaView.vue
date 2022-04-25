<script setup lang="ts">
  import axios from "axios";
  import { Ref } from "vue";
  import RecipeCard from "../components/RecipeCard.vue";

  let searchParams: any = {
    start: 0,
    amount: 5,
    sort: 0,
    category: "",
    userId: "",
    filter: "",
  };
  let recipes: Ref<any[]> = ref([]);
  search();
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
    <tr v-for="recipe of recipes" ref="recipes" style="">
      <td>
        {{ recipe.title }}
      </td>
      <td>
        {{ recipe.description }}
      </td>
      <td>
        {{ recipe.time }}
      </td>
    </tr>
  </table>
  <recipe-card v-for="recipe of recipes" :recipe="recipe"></recipe-card>
</template>
