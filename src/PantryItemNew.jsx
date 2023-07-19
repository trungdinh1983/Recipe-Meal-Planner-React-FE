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
      <br />
      {/* <a href="http://localhost:5173/#">Home</a>
      <br /> */}

      <a href="http://localhost:5173/">Home</a>
      <br />

      <br />

      <div class="dropdown">
        <button class="dropbtn">
          <img src="https://images.cooltext.com/5664746.gif"></img>
        </button>
      </div>
      <br />

      <a href="src/spaghetti.html">Spaghetti Meatball</a>
      <br />
      <a href="src/burger.html">Hamburger</a>
      <br />
      <a href="src/hotdog.html">Hot Dog</a>
      <br />
      <a href="src/shortrib.html">Shortrib</a>
      <br />
      <a href="src/grillsteak.html">Grill Steak</a>
      <br />
      <a href="src/mangosalsa.html">Mango Salsa</a>
    </div>
  );
}
