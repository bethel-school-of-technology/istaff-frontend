import React from "react";

//LINE 12 IS A PLACEHOLDER TO SHOW USER LOGIN STATUS
//"NOT_LOGGED_IN" IS DEFAULT STATE FOR PROP DEFINED IN APP.JS
//STATUS CHANGES TO "LOGGED_IN" AFTER SUCCESSFUL LOGIN & REDIRECT

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