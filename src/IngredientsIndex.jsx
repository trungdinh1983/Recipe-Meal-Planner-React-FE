export function IngredientsIndex(props) {
  return (
    <div>
              <h1>All ingredients</h1>
+       {props.ingredients.map((ingredient) => (
+         <div key={ingredient.id}>
+           <h2>{ingredient.name}</h2>
+           <img src={ingredient_image.url} />
+         
+         </div>
+       ))}
    </div>
  );
}
