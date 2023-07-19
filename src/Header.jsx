export function Header() {
  return (
    <header>
      <center>
        <nav>
          {/* <a href="#">Home</a> | */}
          <a href="https://cooltext.com">
            <img src="https://images.cooltext.com/5664735.gif" width="675" height="88" alt="Recipe Meal Planner" />
          </a>
          <br />
          Text by <a href="https://cooltext.com">Cooltext.com</a>
          <br />
          <br />
          <div class="dropdown">
            <button class="dropbtn">Recipes</button>
            <div class="dropdown-content">
              <a href="src/spaghetti.html">Spaghetti Meatball</a>
              <a href="#">Burger</a>
              <a href="#">Hot Dog</a>
              <a href="#">Shortrib</a>
              <a href="#">Grill Steak</a>
              <a href="#">Mango Salsa</a>
            </div>
          </div>
        </nav>
      </center>
    </header>
  );
}
