import axios from "axios";
import { useState, useEffect } from "react";
import { IngredientsIndex } from "./IngredientsIndex";

const [ingredients, setIngredients] = useState([]);

const handleIndexIngredients = () => {
  console.log("handleIndexIngredients");
  axios.get("http://localhost:3000/ingredients.json").then((response) => {
    console.log(response.data);
    setIngredients(response.data);
  });
};

useEffect(handleIndexIngredients, []);

export function Content() {
  return (
    <div>
      <IngredientsIndex />
    </div>
  );
}
