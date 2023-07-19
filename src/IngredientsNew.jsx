export function IngredientsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateIngredient(params, () => event.target.reset());
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://elements-cover-images-0.imgix.net/bf05d8c8-bd13-4c2a-9329-aa76deacde7c?auto=compress%2Cformat&fit=max&w=1370&s=2795a8febe3c146bc9b4ca3e065cc496")`,
        color: "orange",
      }}
    >
      <h1>Add New Ingredient</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Image Url: <input name="image_url" type="text" />
        </div>

        <button type="submit" style={{ color: "orange" }}>
          Create ingredient
        </button>
      </form>
    </div>
  );
}
