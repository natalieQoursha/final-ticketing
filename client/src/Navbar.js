import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div class="hamburger">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
      <div class="nav__link hide">
        <Link
          to="/"
          style={{
            color: "#ffebeb",
            borderRadius: 40,
            fontSize: 20,
          }}
        >
          Home
        </Link>

        <Link
          to="/test"
          style={{
            color: "#ffebeb",
            fontSize: 20,
            borderRadius: 40,
          }}
        >
          View Tickets
        </Link>
        <Link
          to="/SignIn"
          style={{
            color: "#ffebeb",
            fontSize: 20,
            borderRadius: 40,
          }}
        >
          Sign In
        </Link>
        <Link
          to="/SignUp"
          style={{
            color: "#ffebeb",
            fontSize: 20,
            borderRadius: 40,
          }}
        >
          sign up
        </Link>
        <a
          href="https://www.estartasolutions.com/Pages/About.aspx"
          target="blank"
          style={{
            color: "#ffebeb",
            fontSize: 20,
            borderRadius: 40,
          }}
        >
          about
        </a>
        <a
          href="mailto:kareem.shaweesh077@gmail.com"
          style={{
            color: "#ffebeb",
            fontSize: 20,
            borderRadius: 40,
          }}
        >
          contact
        </a>
      </div>

      <h1>Estarta Solutions</h1>
    </nav>
  );
};
export default Navbar;
