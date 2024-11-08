// src/lib/auth.js
import { auth } from './firebase';
import { GoogleAuthProvider, signInWithPopup, updateProfile, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { userStore } from './stores/userStore';

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is logged in, update the store
    userStore.set({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || 'User',
    });
    console.log(user)

  } else {
    // User is logged out, clear the store
    userStore.set(null);
  }
});

// Sign up a new user with displayName
export async function signUp(email, password, displayName) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Use Firebase's updateProfile function to set the displayName
      await updateProfile(user, { displayName });
  
      // Update the userStore with the new user details
      userStore.set({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName, // This should now reflect the updated displayName
      });
  
      console.log(user); // Check if displayName is updated
  
      return { success: true, user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

// Log in an existing user
export async function logIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

const googleProvider = new GoogleAuthProvider();

// Google sign-in function
export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // Update the userStore with the signed-in user's details
    userStore.set({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    });

    return { success: true, user };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Log out the user
export async function logOut() {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
