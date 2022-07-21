import React from "react";
function signUp() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <div className="placeholders">
        <div>
          <input
            type="text"
            placeholder="First Name"
            style={{
              color: "black",
              backgroundColor: "white",
              borderRadius: "8px",
              fontSize: 25,
            }}
          />
          <input
            type="text"
            placeholder="Last Name"
            style={{
              color: "black",
              backgroundColor: "white",
              borderRadius: "8px",
              fontSize: 25,
            }}
          />
        </div>
        <div>
        <input
          type="date"
          placeholder="Date Of Birth"
          style={{
            color: "black",
            backgroundColor: "white",
            borderRadius: "8px",
            fontSize: 25,
          }}
        />
        <div>
          <input
            type="text"
            placeholder="E-Mail"
            style={{
              color: "black",
              backgroundColor: "white",
              borderRadius: "8px",
              fontSize: 25,
            }}
          /></div>
          <input
            type="number"
            placeholder="Phone Number"
            style={{
              color: "black",
              backgroundColor: "white",
              borderRadius: "8px",
              fontSize: 25,
            }}
          />
        </div>
        <input
          type="password"
          placeholder="Password"
          style={{
            color: "black",
            backgroundColor: "white",
            borderRadius: "8px",
            fontSize: 25,
          }}
        />
        <div></div>
        <button>Sign In</button>
      </div>
    </main>
  );
}
export default signUp;
