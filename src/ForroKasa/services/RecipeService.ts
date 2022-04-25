import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: false,
  headers: {},
});

export default {
  getRecipes() {
    return apiClient.get("/recipes");
  },
  getRecipe(id) {
    return apiClient.get(`/recipes/${id}`);
  },
};
