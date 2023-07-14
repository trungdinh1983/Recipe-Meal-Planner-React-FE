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
      <p>Name: {props.ingredient.name}</p>
      <p>Image: {props.ingredient.image_url}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.ingredient.name} name="name" type="text" />
        </div>
        <div>
          Url: <input defaultValue={props.ingredient.image_url} name="image_url" type="text" />
        </div>

        <button type="submit">Update ingredient</button>
      </form>
      <button onClick={handleClick}>Delete ingredient</button>
    </div>
  );
}
