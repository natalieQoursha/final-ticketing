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
            color: "white",
            fontSize: 20,
            borderRadius: 21,
          }}
        >
          <h1>SYT</h1>
        </Link>
        <div class="nav__link">
          <Link
            to="/SignIn"
            style={{
              color: "white",
              fontSize: 20,
              borderRadius: 21,
            }}
          >
            Sign In
          </Link>
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
              color: "white",
              fontSize: 20,
              borderRadius: 21,
            }}
          >
            <h1>SYT</h1>
          </Link>

          <div class="nav__link">
            <h
              style={{
                color: "white",
                fontSize: 20,
              }}
            >
              {user.First_Name}
            </h>
            <Link
              to="/test"
              style={{
                color: "white",
                fontSize: 20,
                borderRadius: 21,
              }}
            >
              View all tickets
            </Link>
            <Link
              to="/"
              style={{
                color: "white",
                fontSize: 20,
                borderRadius: 21,
              }}
            >
              <button
                style={{
                  color: "white",
                  fontSize: 20,
                  borderRadius: 21,
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
              color: "white",
              fontSize: 20,
              borderRadius: 21,
            }}
          >
            <h1>SYT</h1>
          </Link>

          <div class="nav__link">
            <h
              style={{
                color: "white",
                fontSize: 20,
              }}
            >
              {user.First_Name}
            </h>
            <Link
              to="/test"
              style={{
                color: "white",
                fontSize: 20,
                borderRadius: 21,
              }}
            >
              View tickets
            </Link>
            <Link
              to="/"
              style={{
                color: "white",
                fontSize: 20,
                borderRadius: 21,
              }}
            >
              <button
                style={{
                  color: "white",
                  fontSize: 20,
                  borderRadius: 21,
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
              color: "white",
              fontSize: 20,
              borderRadius: 21,
            }}
          >
            <h1>SYT</h1>
          </Link>

          <div class="nav__link">
            <h
              style={{
                color: "white",
                fontSize: 20,
              }}
            >
              {user.First_Name.toUpperCase()}
            </h>
            <Link
              to="/tickets"
              style={{
                color: "white",
                fontSize: 20,
                borderRadius: 21,
              }}
            >
              Create ticket
            </Link>
            <Link
              to="/test"
              style={{
                color: "white",
                fontSize: 20,
                borderRadius: 21,
              }}
            >
              view tickets
            </Link>
            <Link
              to="/"
              style={{
                color: "white",
                fontSize: 20,
                borderRadius: 21,
              }}
            >
              <button
                style={{
                  color: "white",
                  fontSize: 20,
                  border: "none",
                  background: "none",
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

    return;
  }
};
export default Navbar;
