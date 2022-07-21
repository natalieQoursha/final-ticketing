import React from "react";
import { Redirect } from "react-router-dom";

function Profile({ authorized }) {
  if (!authorized) {
    return <Redirect to="/login" />;
  }
  return <div>Profiles menu</div>;
}
export default Profile;
