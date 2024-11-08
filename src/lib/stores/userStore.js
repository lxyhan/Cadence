// src/lib/stores/userStore.js
import { writable } from 'svelte/store';

export const userStore = writable(null); // Initially, no user is logged in
