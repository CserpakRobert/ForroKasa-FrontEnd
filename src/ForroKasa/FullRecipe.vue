<script setup lang="ts">
  import RecipeService from "./services/RecipeService";
  import IRecipe from "./types/IRecipe";
  const props = defineProps({
    id: {
      type: String,
      required: true,
    },
  });

  const recipe = ref<IRecipe>();

  RecipeService.getRecipe(props.id)
    .then((response) => {
      recipe.value = response.data;
      console.log(recipe.value);
    })
    .catch((error) => {
      console.log(error);
    });
</script>

<template>
  <div v-if="recipe">
    <div class="data">
      <h1>{{ recipe.title }}</h1>
      <h2 class="cat">{{ recipe.category }}</h2>
    </div>
    <div class="data">
      <h2>By: {{ recipe.author.name }}</h2>
      <h2>Time: {{ recipe.time }}</h2>
    </div>
    <img :src="recipe.image_url" />
    <h2>Ingredients</h2>
    <ul class="ingredients">
      <li v-for="ingredient in recipe.ingredients" :key="ingredient.name">
        {{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.name }}
      </li>
    </ul>
    <div>
      <h2>Description</h2>
      <p>{{ recipe.description }}</p>
    </div>
    <div class="like">
      <button class="button">Like</button>
      <h2>: {{ recipe.likes }}</h2>
    </div>
  </div>
</template>

<style>
  div {
    margin-bottom: 10px;
  }
  h2 {
    color: darkgray;
  }
  img {
    max-width: 30%;
    border-radius: 10px;
  }
  ul {
    margin: 30px;
  }
  .button {
    background-color: rgb(0, 117, 196);
    border: solid 2px blue;
    border-radius: 5px;
    color: white;
    padding: 3px;
    width: 80px;
  }
  .button:hover {
    background-color: rgb(0, 150, 250);
    border: solid 2px blue;
    border-radius: 5px;
    color: white;
    padding: 3px;
    width: 80px;
  }
  .data {
    display: flex;
    justify-content: space-between;
  }
  .like {
    display: flex;
    justify-content: left;
    gap: 20px;
  }
</style>
