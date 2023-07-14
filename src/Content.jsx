import axios from "axios";
import { useState, useEffect } from "react";
import { IngredientsIndex } from "./IngredientsIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { IngredientsShow } from "./IngredientsShow";
import { Modal } from "./Modal";
import { IngredientsNew } from "./IngredientsNew";
import { PantryItemNew } from "./PantryItemNew";

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

  const handleIngredientSearch = () => {
    axios.get("http://localhost:3000/ingredients.json").then((response) => {
      console.log(response.data);
      setIngredienets(response.data);
    });
  };

  const handleShowIngredient = (ingredient) => {
    console.log("handleShowIngredient", ingredient);
    setIsIngredientsShowVisible(true);
    setCurrentIngredient(ingredient);
  };

  const handleUpdateIngredient = (id, params, successCallback) => {
    console.log("handleUpdateIngredient", params);
    axios.patch(`http://localhost:3000/ingredients/${id}.json`, params).then((response) => {
      setIngredients(
        ingredients.map((ingredient) => {
          if (ingredient.id === response.data.id) {
            return response.data;
          } else {
            return ingredient;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleCreateIngredient = (params, successCallback) => {
    console.log("handleCreateIngredient", params);
    axios.post("http://localhost:3000/ingredients.json", params).then((response) => {
      setIngredients([...ingredients, response.data]);
      successCallback();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsIngredientsShowVisible(false);
  };

  const handleDestroyIngredient = (ingredient) => {
    console.log("handleDestroyIngredient", ingredient);
    axios.delete(`http://localhost:3000/ingredients/${ingredient.id}.json`).then((response) => {
      setIngredients(ingredients.filter((p) => p.id !== ingredient.id));
      handleClose();
    });
  };

  const handleCreatePantryItem = (params, successCallback) => {
    console.log("handleCreatePantryItem", params);
    axios.post("http://localhost:3000/pantry_items.json", params).then((response) => {
      // setPantryitems([...pantryitems, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexIngredients, []);
  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <IngredientsNew onCreateIngredient={handleCreateIngredient} />
      <IngredientsIndex ingredients={ingredients} onShowIngredient={handleShowIngredient} />

      <Modal show={isIngredientsShowVisible} onClose={handleClose}>
        <IngredientsShow
          ingredient={currentIngredient}
          onUpdateIngredient={handleUpdateIngredient}
          onDestroyIngredient={handleDestroyIngredient}
        />
        <PantryItemNew ingredient={currentIngredient} onCreatePantryitem={handleCreatePantryItem} />
      </Modal>
    </div>
  );
}
