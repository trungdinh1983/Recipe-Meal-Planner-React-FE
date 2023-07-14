export function PantryItemNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    params.append("ingredient_id", props.ingredient.id);
    props.onCreatePantryitem(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Add to Pantry Inventory</h1>
      <form onSubmit={handleSubmit}>
        {/* <div>
          #{current_ingredient.id}
          Ingredient: <input name="name" type="text" />
        </div> */}
        <div>
          Amount: <input name="amount" type="text" />
        </div>
        <button type="submit">Add Item to Pantry</button>
      </form>
    </div>
  );
}
