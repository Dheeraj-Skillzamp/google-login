import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

const clientId = "541547830041-291hedr5rs84d1aft3lkiv5fo7ok5ca8.apps.googleusercontent.com";
const backendEndpoint = "http://127.0.0.1:8000/google-registration/"; 

export default function Login() {
  const onSuccess = (res) => {
    console.log("Login success", res.profileObj);

    // Extract only the necessary information
    const { name, googleId, email } = res.profileObj;

    // Send the extracted data to the backend
    axios.post(backendEndpoint, {
      name,
      googleId,
      email,
    })
    .then(response => {
      console.log("Data sent to the backend successfully", response);
    })
    .catch(error => {
      console.error("Error sending data to the backend", error);
    });
  }

  const onFailure = (res) => {
    console.log("Login fail", res);
  }

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="SignUp"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}














// import React from 'react';
// import GoogleLogin from 'react-google-login';
// const clientId = "541547830041-291hedr5rs84d1aft3lkiv5fo7ok5ca8.apps.googleusercontent.com";

// export default function Login() {
//   const onSuccess = (res) => {
//     console.log("Login success", res.profileObj);
//   }

//   const onFailure = (res) => {
//     console.log("Login fail", res);
//   }

//   return (
//     <div id="signInButton">
//       <GoogleLogin
//         clientId={clientId}
//         buttonText="Login"
//         onSuccess={onSuccess}
//         onFailure={onFailure}
//         cookiePolicy={'single_host_origin'}
//         isSignedIn={true}
//       />
//     </div>
//   );
// }



// import { useEffect } from "react";

// import "./App.css";
// // import Login from './component/Login';
// // import Logout from './component/Logout';
// // import { gapi } from 'gapi-script';
// import * as jwt_decode from "jwt-decode";

// // const clientId = "252815931106-dr0lf0pado6dap0r6tubr6tns9r9ec61.apps.googleusercontent.com";

// function App() {
//   // useEffect(() => {
//   //   async function initAuth() {
//   //     await gapi.client.init({
//   //       clientId: clientId,
//   //       scope: ""
//   //     });

//   //     const auth = gapi.auth2.getAuthInstance();

//   //     // Check if user is signed in
//   //     if (auth.isSignedIn.get()) {
//   //       const user = auth.currentUser.get();
//   //       if (user !== null) {
//   //         const accessToken = user.getAuthResponse().access_token;
//   //         console.warn("token", accessToken);
//   //       } else {
//   //         console.error("User object is null");
//   //       }
//   //     } else {
//   //       console.error("User is not signed in");
//   //     }
//   //   }

//   //   gapi.load('client:auth2', initAuth);
//   // }, []);

//   function handleCallbackResponse(response) {
//     console.log("Encoded JWT ID Token" + response.credential);
//     const userObject = jwt_decode(response.credential);
//   }
//   // client secret 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

//   useEffect(() => {
//     /* global google */
//     google.accounts.id.initialize({
//       client_id:
//         "472724389338-84ro1pt6c8p5vhvc9coiptff09mlasdc.apps.googleusercontent.com",
//       callback: handleCallbackResponse,
//     });
//     google.accounts.id.renderButton(document.getElementById("signInDiv"), {
//       theme: "outline",
//       size: "large",
//     });
//   }, []);

//   return (
//     <>
//       <div id="signInDiv"></div>
//     </>
//   );
// }

// export default App;
