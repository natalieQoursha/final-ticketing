import React, { useState } from "react";

const SignIn = () => {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");

  const handleChange = (event) => setValue(event.target.value);
  const handleChange1 = (event) => setValue1(event.target.value1);

  const handleLogin = (e) => {
    e.preventDefault();
  };
  /*if (user === value(database) & pass === value1(database)){
      'go to signed in page'
      <Link to="/SignedIn">
      'Sign In'
    </Link>
    <a href="google.com">nice</a>
    }} */

  return <h1>Hot</h1>;
};
