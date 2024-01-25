import React, { useEffect, useState } from "react";
import Login from "./component/Login";
import Logout from "./component/Logout";
import {gapi} from 'gapi-script';
const clientId = "541547830041-291hedr5rs84d1aft3lkiv5fo7ok5ca8.apps.googleusercontent.com";
function App() {
  // const [user, setUser] = useState();

  // function handleCallbackResponse(response) {
  //   console.log("Encoded JWT ID Token: " + response.credential);

  //   const tokenParts = response.credential.split('.');
  //   const encodedPayload = tokenParts[1];

  //   try {
  //     const decodedPayload = atob(encodedPayload);
  //     const userObject = JSON.parse(decodedPayload);
  //     console.log("Decoded token:", userObject);
  //     // setUser(userObject);
  //   } catch (error) {
  //     console.error("Error decoding token:", error);
  //   }
  // }

  // useEffect(() => {
  //   /* global google */
  //   google.accounts.id.initialize({
  //     client_id: "541547830041-ll8mudkm38ra86s4eibvtjsjmtgds3ql.apps.googleusercontent.com",
  //     callback: handleCallbackResponse,
  //   });
  //   google.accounts.id.renderButton(document.getElementById("signInDiv"), {
  //     theme: "outline",
  //     size: "large",
  //   });
  // }, []);
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId : clientId,
        scope :""
      })
    };
    gapi.load('client:auth2',start);
  })

  return (
    <>
      {/* <div id="signInDiv"></div> */}
      {/* {user && (
        <div>
          <h1>Hello {user.name}</h1>
          <img src={user.picture} alt=""></img>
          <p>{user.given_name}</p>
          <p>{user.family_name}</p>
          <p>{user.email}</p>
        </div>
      )} */}
      <Login />
      <Logout />
    </>
  );
}

export default App;





// import React, { useEffect, useState } from "react";
// import Login from "./component/Login";
// import Logout from "./component/Logout";
// // import * as jwt_decode from "jwt-decode"; // Change import statement
// // const jwt_decode = require('jwt-decode');
 
 
// function App() {
//   const [user, setUser] = useState();
//   // function handleCallbackResponse(response) {
//   //   import('jwt-decode').then((jwt) => {
//   //     const jwt_decode = jwt.default || jwt;
//   //     console.log("Encoded JWT ID Token: " + response.credential);
//   //     try {
//   //       const userObject = jwt_decode(response.credential);
//   //       console.log("Decoded token:", userObject);
//   //       setUser(userObject);
//   //     } catch (error) {
//   //       console.error("Error decoding token:", error);
//   //     }
//   //   }).catch((error) => {
//   //     console.error("Error importing jwt-decode:", error);
//   //   });
//   // }
//   function handleCallbackResponse(response) {
//     console.log("Encoded JWT ID Token: " + response.credential);
 
//     // Split the token by dots to extract the payload
//     const tokenParts = response.credential.split('.');
   
//     // JWT typically consists of three parts: header, payload, signature
//     // The payload is the second part (index 1)
//     const encodedPayload = tokenParts[1];
 
//     try {
//       // Decode the base64 encoded payload
//       const decodedPayload = atob(encodedPayload);
//       const userObject = JSON.parse(decodedPayload);
//       console.log("Decoded token:", userObject);
//       setUser(userObject);
//     } catch (error) {
//       console.error("Error decoding token:", error);
//     }
//   }
 
 
 
 
//   console.warn(user);
 
//   useEffect(() => {
//     /* global google */
//     google.accounts.id.initialize({
//       client_id: "541547830041-ll8mudkm38ra86s4eibvtjsjmtgds3ql.apps.googleusercontent.com",
//       callback: handleCallbackResponse,
//     });
//     google.accounts.id.renderButton(document.getElementById("signInDiv"), {
//       theme: "outline",
//       size: "large",
//     });
//   }, []);
 
//   return (
//     <>
//       {/* <div id="signInDiv"></div>
//       {user &&
//       <div>
//       <h1>hello {user.name}</h1>
//       <img src={user.picture} alt=""></img>
//       <p>{user.given_name}</p>
//       <p>{user.family_name}</p>
//       <p>{user.email}</p>
//       </div>} */}
//       <Login />
//       <Logout/>
//     </>
//   );
// }
 
// export default App;
 
