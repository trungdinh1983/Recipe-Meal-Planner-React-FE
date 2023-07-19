import { useState } from "react";
export function IngredientsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div>
      <h1 style={{ backgroundColor: "lightblue", color: "blue" }}>Search ingredients</h1>

      <div style={{ backgroundColor: "lightblue", color: "blue" }}>
        Ingredient:
        <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      </div>

      {props.ingredients
        ?.filter((ingredient) => ingredient.name?.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((ingredient) => (
          <div
            key={ingredient.id}
            style={{
              backgroundImage: `url("https://elements-cover-images-0.imgix.net/bf05d8c8-bd13-4c2a-9329-aa76deacde7c?auto=compress%2Cformat&fit=max&w=1370&s=2795a8febe3c146bc9b4ca3e065cc496")`,
            }}
          >
            <center>
              <h2>{ingredient.name}</h2>
              <img src={ingredient.image_url} width="200" height="200" alt="Recipe Meal Planner" />
              <br />
              <button onClick={() => props.onShowIngredient(ingredient)}>MoreInfo</button>
            </center>
          </div>
        ))}
    </div>
  );
}
