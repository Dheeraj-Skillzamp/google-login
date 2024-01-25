import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = "541547830041-291hedr5rs84d1aft3lkiv5fo7ok5ca8.apps.googleusercontent.com";

export default function Logout() {
  const onSuccess = () => {
    console.log("Logout successful");
  }

  return (
    <div id='signOutButton'>
      <GoogleLogout
        clientId={clientId}
        buttonText='Log out'
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
