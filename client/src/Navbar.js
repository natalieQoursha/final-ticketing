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
            color: "rgb(36, 145, 196)",
            borderRadius: 40,
            fontSize: 20,
          }}
        >
          Home
        </Link>
        <Link
          to="/SignIn"
          style={{
            color: "rgb(36, 145, 196)",
            fontSize: 20,
            borderRadius: 40,
          }}
        >
          Sign In
        </Link>
        <Link
          to="/SignUp"
          style={{
            color: "rgb(36, 145, 196)",
            fontSize: 20,
            borderRadius: 40,
          }}
        >
          sign up
        </Link>

        <a
          href="mailto:kareem.shaweesh077@gmail.com"
          style={{
            color: "rgb(36, 145, 196)",
            fontSize: 20,
            borderRadius: 40,
          }}
        >
          contact
        </a>

        <a
          href="https://www.estartasolutions.com/Pages/About.aspx"
          target="blank"
          style={{
            color: "rgb(36, 145, 196)",
            fontSize: 20,
            borderRadius: 40,
          }}
        >
          about
        </a>

        <Link
          to="/Tickets"
          style={{
            color: "rgb(36, 145, 196)",
            fontSize: 20,
            borderRadius: 40,
          }}
        >
          Tickets
        </Link>
        <Link
          to="/test"
          style={{
            color: "rgb(36, 145, 196)",
            fontSize: 20,
            borderRadius: 40,
          }}
        >
          Test
        </Link>
      </div>

      <h1>Estarta Solutions</h1>
    </nav>
  );
};
export default Navbar;
