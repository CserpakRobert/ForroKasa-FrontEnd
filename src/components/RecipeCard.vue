<script setup lang="ts">
  const times = ref(2);
  const props = defineProps<{
    recipe: {
      title: string;
      author: string;
      category: string;
      description: string;
      time: number;
      image_url: string;
      likes: number;
      ingredients: Array<any>;
    };
  }>();
  defineExpose(props);
  console.log(props);
</script>

<template>
  <h1>Hello WOrld</h1>
  <p>{{ recipe.title }}</p>
</template>
