"use strict";

/**
 * Returns the ID of the Firebase project.
 */
function getFirebaseProjectId() {
  return firebase.app().options.authDomain.split(".")[0];
}

// Initializes the Auth.
function Auth() {
  document.addEventListener(
    "DOMContentLoaded",
    function() {
      // Shortcuts to DOM Elements.
      this.signInUsername = document.getElementById("auth-sign-in-username");
      this.signInPassword = document.getElementById("auth-sign-in-password");
      this.signInButton = document.getElementById("auth-sign-in-button");
      this.signInError = document.getElementById("auth-sign-in-error");
      this.signOutButton = document.getElementById("auth-sign-out-button");
      this.nameContainer = document.getElementById("auth-name-container");
      this.uidContainer = document.getElementById("auth-uid-container");
      this.deleteButton = document.getElementById("auth-delete-button");
      this.signedOutCard = document.getElementById("auth-signed-out-card");
      this.signedInCard = document.getElementById("auth-signed-in-card");

      // Bind events.
      this.signInButton.addEventListener("click", this.signIn.bind(this));
      // this.signOutButton.addEventListener("click", this.signOut.bind(this));
      // this.deleteButton.addEventListener(
      //   "click",
      //   this.deleteAccount.bind(this)
      // );
      firebase.auth().onAuthStateChanged(this.onAuthStateChanged.bind(this));
    }.bind(this)
  );
}

// Triggered on Firebase auth state change.
Auth.prototype.onAuthStateChanged = function(user) {
  if (user) {
    // console.log(user);
    // window.location.href = "/main.html";
    this.signedOutCard.style.display = "block";
  } else {
    this.signedOutCard.style.display = "block";
    // this.signedInCard.style.display = "none";
  }
};

// Initiates the sign-in flow.
Auth.prototype.signIn = function() {
  var err = this.signInError;
  err.innerText = "";

  console.log("balala~");
  firebase
    .auth()
    .signInWithEmailAndPassword(
      this.signInUsername.value,
      this.signInPassword.value
    )
    .then(
      user => {
        console.log("its works, logined", user);
        window.location.href = "/main.html";
      },
      _err => {
        console.log("ERROR RESPONSE: " + _err);
        err.innerText = "Invalid email or password.";
      }
    );
};

// Signs-out of Firebase.
Auth.prototype.signOut = function() {
  firebase.auth().signOut();
};

// Deletes the user's account.
Auth.prototype.deleteAccount = function() {
  firebase
    .auth()
    .currentUser.delete()
    .then(function() {
      window.alert("Account deleted");
    })
    .catch(function(error) {
      if (error.code === "auth/requires-recent-login") {
        window.alert(
          "You need to have recently signed-in to delete your account. Please sign-in and try again."
        );
        firebase.auth().signOut();
      }
    });
};

// Load the auth.
new Auth();
