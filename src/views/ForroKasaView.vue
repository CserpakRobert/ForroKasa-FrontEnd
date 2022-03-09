<script setup lang="ts">
  import axios from "axios";
  import { log } from "console";

  let searchParams: any = {
    start: 0,
    amount: 10,
    sort: 0,
    category: "",
    userId: "",
    filter: "",
  };
  let recipes: any[] | any = [];
  axios.get("http://localhost:5000/recipes").then(
    (req) => (recipes = ref(req)),
    (err) => console.log(err)
  );
  console.log(recipes.value);
</script>

<template>
  <h1>Hello World</h1>
  <table>
    <td>asdsad</td>
    <td v-for="recipe in this.recipes">{{ "asd" + recipe }}</td>
  </table>
</template>
