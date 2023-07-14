import { useState } from "react";
export function IngredientsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div>
      <h1>All ingredients</h1>
      <div>
        Search filter:
        <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      </div>
      {props.ingredients
        ?.filter((ingredient) => ingredient.name?.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((ingredient) => (
          <div key={ingredient.id}>
            <h2>{ingredient.name}</h2>
            <img src={ingredient.image_url} />
            <button onClick={() => props.onShowIngredient(ingredient)}>MoreInfo</button>
          </div>
        ))}
    </div>
  );
}
