import React from "react";

const Profile = props => {
  return (
    <div>
      <div>
        <h1>Employee Profile</h1>
        <h1>Status: {props.loggedInStatus}</h1>
      </div>
    </div>
  );
};

export default Profile;