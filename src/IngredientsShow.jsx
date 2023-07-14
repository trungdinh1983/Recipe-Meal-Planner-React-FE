export function IngredientsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateIngredient(props.ingredient.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyIngredient(props.ingredient);
  };

  return (
    <div>
      <h1>Ingredient information</h1>
      <p>Current Ingredient: {props.ingredient.name}</p>
      <img src={props.ingredient.image_url} />
      <p>Image Url: {props.ingredient.image_url}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Change Name: <input defaultValue={props.ingredient.name} name="name" type="text" />
        </div>
        <div>
          Change Url: <input defaultValue={props.ingredient.image_url} name="image_url" type="text" />
        </div>

        <button type="submit">Update ingredient</button>
      </form>
      <button onClick={handleClick}>Delete ingredient</button>
    </div>
  );
}
