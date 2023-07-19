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
              <a href="src/burger.html">Hamburger</a>
              <a href="src/hotdog.html">Hot Dog</a>
              <a href="src/shortrib.html">Shortrib</a>
              <a href="src/grillsteak.html">Grill Steak</a>
              <a href="src/mangosalsa.html">Mango Salsa</a>
            </div>
          </div>
        </nav>
      </center>
    </header>
  );
}
