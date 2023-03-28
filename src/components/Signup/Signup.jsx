// import React, { useRef, useState } from 'react'
// // import { Form } from 'react-router-dom'
// import styles from './Signup.module.scss'
// import addNotification from 'react-push-notification'
// // import YouTube from 'react-youtube'
// // import { createUserWithEmailAndPassword, signInWithCustomToken, signInWithEmailAndPassword } from 'firebase/auth'
// import { auth } from '../../firebase';

// const Signup = () => {
  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()

  // firebase.auth().useEmulator('http://localhost:9099', { disableWarnings: true });
  // firebase.auth().onAuthStateChanged((user) => {
  //   console.log('Auth state changed:', user);
  // });
  // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
  // firebase.auth().settings.appVerificationDisabledForTesting = true;
  // firebase.auth().settings.debug = true;


  // const handleSubmit = () => {
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     console.log(user.getIdToken());
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage);
    //     // ..
    //   });
  //   signInWithCustomToken(auth, "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaGFsbG93ZWQtc2NlbmUtMzMwMDEzIiwiYXVkIjoiaGFsbG93ZWQtc2NlbmUtMzMwMDEzIiwiYXV0aF90aW1lIjoxNjc5OTAyMDc5LCJ1c2VyX2lkIjoiVUtWRHJoRUdZbWFzT3ppM3Z2YWZqaVBSSzZ4MSIsInN1YiI6IlVLVkRyaEVHWW1hc096aTN2dmFmamlQUks2eDEiLCJpYXQiOjE2Nzk5MDIwNzksImV4cCI6MTY3OTkwNTY3OSwiZW1haWwiOiJhZG1pbjJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluMkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Qu-tYByY1SD8lesW5jjHJoyF3PrqLizAuTJvbmRv6Gga6SZ0KhkssjGymxbXsAEXEZY5H1e_4fdpMwxSY-DSkkZKWgLjzwja8Lbxb5ei83PCGEiqi4tw2Ycp-89QZsJTEvs4LvFmpOPNv-JmBb8fz870nLmphai_QpuIBCCV-NxejdYnnBaMA3-Y3tLTE9fEOSHJ1WMqAa8aG99STFc86KbKZutBZsdv4j2uXLmt7sUKGTOMnCgoH8Mu0hZVAy4z33PSjC89Lc-0AQMyDlYZMWTQ135ZUD5l3LpJWEM2frIefje91ldWRpNtaZoE-f-p4OAddAurWNKqj3S5IU_uiw")
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       console.log(user);
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode, errorMessage);
  //       // ...
  //     });
  // }

  // // below is a function handleSubmit to login using auth token in firebase
  // const handleSubmit = () => {



  // const buttonClick = () => {
  //   addNotification({
  //     title: 'Warning',
  //     subtitle: 'This is a subtitle',
  //     message: 'This is a very long message',
  //     theme: 'darkblue',
  //     native: true // when using native, your OS will handle theming.
  //   });
  // };

//   return (
//     <div className={styles.signup}>
//       <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
//       <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
//       <button onClick={handleSubmit}>Submit</button>
//       <h1>{email}</h1>
//       <h1>{password}</h1>
//     </div>
//   )
// }


// export default Signup;
