<script setup lang="ts">
  import axios from "axios";
  import { log } from "console";
  import { Ref } from "vue";

  let searchParams: any = {
    start: 0,
    amount: 10,
    sort: 0,
    category: "",
    userId: "",
    filter: "",
  };
  let recipes: any | Ref = ref(["léáéláélá", ",.-.,-,.-"]);
  axios.get("http://localhost:5000/recipes").then(
    (req) => {
      recipes = ref(req.data);
      console.log(req.data);
      console.log(recipes);
      console.log(recipes.value);
      for (let item of recipes) {
        console.log(item._id);
      }
    },
    (err) => console.log(err)
  );
</script>

<template>
  <h1>Hello World</h1>
  <table>
    <td>asdsad</td>
    <p v-for="recipe of this.recipes">
      {{ "asd" + recipe }}
    </p>
  </table>
</template>
