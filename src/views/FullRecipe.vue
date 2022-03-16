<script setup lang="ts"></script>

<template>
  <div>
    <div class="data">
      <h1>Title</h1>
      <h2 class="cat">Category</h2>
    </div>
    <div class="data">
      <h2>By: Author</h2>
      <h2>Time</h2>
    </div>
    <img
      alt="saláta"
      src="https://img-global.cpcdn.com/recipes/6e49bd1639bbebc7/1200x630cq70/photo.jpg"
    />
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
  h1 {
    color: black;
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
</style>
