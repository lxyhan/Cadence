// src/lib/auth.js
import { auth } from './firebase';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
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
  } else {
    // User is logged out, clear the store
    userStore.set(null);
  }
});

// Sign up a new user
export async function signUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
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

// Log out the user
export async function logOut() {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
