<script setup lang="ts">
  import RecipeService from "./services/RecipeService";
  import IRecipe from "./types/IRecipe";
  const props = defineProps({
    id: {
      type: String,
      required: true,
    },
  });

  const event = ref<IRecipe>();

  RecipeService.getRecipe(props.id)
    .then((response) => {
      event.value = response.data;
      console.log(event.value);
    })
    .catch((error) => {
      console.log(error);
    });
</script>

<template>
  <div v-if="event">
    <div class="data">
      <h1>{{ event.title }}</h1>
      <h2 class="cat">{{ event.category }}</h2>
    </div>
    <div class="data">
      <h2>By: {{ event.author }}</h2>
      <h2>Time: {{ event.time }}</h2>
    </div>
    <img :src="event.image_url" />
    <ul>
      <li>amount unit Name</li>
      <li>amount unit Name</li>
      <li>amount unit Name</li>
    </ul>
    <h2>Description</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, alias eum. Ullam minus
      non maiores excepturi? Rerum illo, officia ut aliquam consectetur repellat voluptatibus eum
      velit aperiam et corrupti blanditiis!
    </p>
    <button class="button">Like</button>
  </div>
</template>

<style>
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
</style>
