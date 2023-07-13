import axios from "axios";
import { useState, useEffect } from "react";
import { IngredientsIndex } from "./IngredientsIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { IngredientsShow } from "./IngredientsShow";
import { Modal } from "./Modal";

export function Content() {
  const [ingredients, setIngredients] = useState([]);
  const [isIngredientsShowVisible, setIsIngredientsShowVisible] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState({});

  const handleIndexIngredients = () => {
    console.log("handleIndexIngredients");
    axios.get("http://localhost:3000/ingredients.json").then((response) => {
      console.log(response.data);
      setIngredients(response.data);
    });
  };

  const handleShowIngredient = (ingredient) => {
    console.log("handleShowIngredient", ingredient);
    setIsIngredientsShowVisible(true);
    setCurrentIngredient(ingredient);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsIngredientsShowVisible(false);
  };

  useEffect(handleIndexIngredients, []);
  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />

      <IngredientsIndex ingredients={ingredients} onShowIngredient={handleShowIngredient} />

      <Modal show={isIngredientsShowVisible} onClose={handleClose}>
        <h1>Test</h1>
        <IngredientsShow ingredient={currentIngredient} />
      </Modal>
    </div>
  );
}
