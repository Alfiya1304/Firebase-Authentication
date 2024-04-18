// setting up firebase with our website
const firebaseApp = firebase.initializeApp({ 
  apiKey: "AIzaSyDtnoNfkgQ7GaJQYoq-UpRdB_--AkVZhuc",
authDomain: "auth-form-62b18.firebaseapp.com",
projectId: "auth-form-62b18",
storageBucket: "auth-form-62b18.appspot.com",
messagingSenderId: "644619606930",
appId: "1:644619606930:web:f304eb6ff7ff4be14dff4b"
});
 const db = firebaseApp.firestore();
 const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
      // Signed in 
      document.write("You are Signed Up")
      console.log(result);
      // Redirect to options page
      window.location.href = "file:///C:/Users/unite/OneDrive/Desktop/AS%20lab/AS%20lab/options.html";
  })
  .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      // ..
  });
}

// Sign In function
const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
      // Signed in 
      document.write("You are Signed In")
      console.log(result);
      // Redirect to options page
      window.location.href = "file:///C:/Users/unite/OneDrive/Desktop/AS%20lab/AS%20lab/options.html";
  })
  .catch((error) => {
      console.log(error.code);
      console.log(error.message);
  });
}

//Forgot Password Function
function forgotPass(){
  const email = document.getElementById("email").value;
  firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    alert("Reset link sent to your email id!") 
    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    
  });
}
