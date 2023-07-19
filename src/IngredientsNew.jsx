export function IngredientsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateIngredient(params, () => event.target.reset());
  };

  return (
    <div style={{ backgroundColor: "orange", color: "red" }}>
      <h1>Add New Ingredient</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Image Url: <input name="image_url" type="text" />
        </div>

        <button type="submit" style={{ color: "red" }}>
          Create ingredient
        </button>
      </form>
    </div>
  );
}
