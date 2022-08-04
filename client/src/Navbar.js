import { Link, useNavigate } from "react-router-dom";
import React from "react";
const Navbar = () => {
  const history = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user")) || undefined;
  const handleLogout = (e) => {
    sessionStorage.removeItem("user");
    history("/");
  };
  if (user === undefined) {
    return (
      <div className="navbar">
        <Link
          to="/"
          style={{
            color: "#ffebeb",
            fontSize: 20,
            borderRadius: 40,
          }}
        >
          <h1>Ticketing</h1>
        </Link>
        <div class="nav__link">
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
      </div>
    );
  } else {
    if (user.Role === "Admin") {
      return (
        <div className="navbar">
          <Link
            to="/"
            style={{
              color: "#ffebeb",
              fontSize: 20,
              borderRadius: 40,
            }}
          >
            <h1>Ticketing</h1>
          </Link>

          <div class="nav__link">
            <h
              style={{
                color: "red",
                fontSize: 15,
              }}
            >
              {user.First_Name}
            </h>
            <Link
              to="/test"
              style={{
                color: "#ffebeb",
                fontSize: 20,
                borderRadius: 40,
              }}
            >
              View all tickets
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
            <Link
              to="/"
              style={{
                color: "#ffebeb",
                fontSize: 20,
                borderRadius: 40,
              }}
            >
              <button
                style={{
                  color: "black",
                  fontSize: 20,
                  borderRadius: 40,
                  background: "none",
                  border: "none",
                }}
                onClick={handleLogout}
              >
                LOGOUT
              </button>
            </Link>
          </div>
        </div>
      );
    }
    if (user.Role === "Employer") {
      return (
        <div className="navbar">
          <Link
            to="/"
            style={{
              color: "#ffebeb",
              fontSize: 20,
              borderRadius: 40,
            }}
          >
            <h1>Ticketing</h1>
          </Link>

          <div class="nav__link">
            <h
              style={{
                color: "red",
                fontSize: 15,
              }}
            >
              {user.First_Name}
            </h>
            <Link
              to="/test"
              style={{
                color: "#ffebeb",
                fontSize: 20,
                borderRadius: 40,
              }}
            >
              View tickets
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
            <Link
              to="/"
              style={{
                color: "#ffebeb",
                fontSize: 20,
                borderRadius: 40,
              }}
            >
              <button
                style={{
                  color: "black",
                  fontSize: 20,
                  borderRadius: 40,
                  background: "none",
                  border: "none",
                }}
                onClick={handleLogout}
              >
                LOGOUT
              </button>
            </Link>
          </div>
        </div>
      );
    }
    if (user.Role === "Customer") {
      return (
        <div className="navbar">
          <Link
            to="/"
            style={{
              color: "#ffebeb",
              fontSize: 20,
              borderRadius: 40,
            }}
          >
            <h1>Ticketing</h1>
          </Link>

          <div class="nav__link">
            <h
              style={{
                color: "#ffebeb",
                fontSize: 20,
              }}
            >
              {user.First_Name}
            </h>
            <Link
              to="/tickets"
              style={{
                color: "#ffebeb",
                fontSize: 20,
                borderRadius: 40,
              }}
            >
              Create ticket
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
            <Link
              to="/"
              style={{
                color: "#ffebeb",
                fontSize: 20,
                borderRadius: 40,
              }}
            >
              <button
                style={{
                  color: "black",
                  fontSize: 20,
                  borderRadius: 40,
                  background: "none",
                  border: "none",
                }}
                onClick={handleLogout}
              >
                LOGOUT
              </button>
            </Link>
            <Link
              to="/test"
              style={{
                color: "#ffebeb",
                fontSize: 20,
                borderRadius: 40,
              }}
            >
              view tickets
            </Link>
          </div>
        </div>
      );
    }

    return;
  }
};
export default Navbar;
