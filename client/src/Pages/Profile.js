import React from "react";
import { Redirect } from "react-router-dom";

function Profile({ authorized }) {
  if (!authorized) {
    return <Redirect to="/login" />;
  }
  return (
    <UserContext.Consumer>
      <div>Profiles menu</div>;\
    </UserContext.Consumer>
  );
}
export default Profile;
