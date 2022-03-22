interface Ingredient {
  name: string;
  unit: string;
  amount: number;
}

export default interface IRecipe {
  _id: string;
  author: string;
  title: string;
  category: string;
  ingredients: Ingredient[];
  time: number;
  description: string;
  image_url: string;
  likes: number;
}
