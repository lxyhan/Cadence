<script>
    import { userStore } from '$lib/stores/userStore';
    import { goto } from '$app/navigation';
    import { signUp, signInWithGoogle } from '$lib/auth'; // Import the signup function
  
    $: uid = $userStore?.uid;
  
    // Redirect if the user is already logged in
    $: if (uid) {
      goto('/dashboard');
    }
  
    let email = '';
    let password = '';
    let displayName = ''; // New field for displayName
    let errorMessage = '';
  
    async function handleSignup() {
      const result = await signUp(email, password, displayName); // Pass displayName
      if (result.success) {
        goto('/dashboard'); // Redirect to the dashboard on successful signup
      } else {
        errorMessage = result.error;
      }
    }

    async function handleGoogleSignup() {
        const result = await signInWithGoogle();
        if (result.success) {
        goto('/dashboard');
        } else {
        errorMessage = result.error;
        }
    }

  </script>
  
  <!-- Add display name field in the form -->
  <div class="flex min-h-screen">
    <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img class="h-10 w-auto" src="/logo.png" alt="Your Company">
          <h2 class="mt-8 text-2xl font-bold tracking-tight text-gray-900">Create your account</h2>
          <p class="mt-2 text-sm text-gray-500">
            Already have an account?
            <a href="/login" class="font-semibold text-[#137369]">Log in here</a>
          </p>
        </div>
  
        <div class="mt-10">
          <form on:submit|preventDefault={handleSignup} class="space-y-6">
            <div>
              <label for="displayName" class="block text-sm font-medium text-gray-900">Display Name</label>
              <div class="mt-2">
                <input id="displayName" name="displayName" type="text" bind:value={displayName} required class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
              </div>
            </div>
  
            <div>
              <label for="email" class="block text-sm font-medium text-gray-900">Email address</label>
              <div class="mt-2">
                <input id="email" name="email" type="email" bind:value={email} autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
              </div>
            </div>
  
            <div>
              <label for="password" class="block text-sm font-medium text-gray-900">Password</label>
              <div class="mt-2">
                <input id="password" name="password" type="password" bind:value={password} autocomplete="new-password" required class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
              </div>
            </div>
  
            {#if errorMessage}
              <p class="text-red-500 text-sm">{errorMessage}</p>
            {/if}
  
            <div>
              <button type="submit" class="flex w-full justify-center rounded-md bg-[#137369] px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0b594f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137369]">
                Sign Up
              </button>
            </div>
          </form>

          <div class="mt-10">
            <div class="relative">
              <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="w-full border-t border-gray-200"></div>
              </div>
              <div class="relative flex justify-center text-sm font-medium">
                <span class="bg-white px-6 text-gray-900">Or continue with</span>
              </div>
            </div>

          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <div class="mt-6 grid grid-cols-2 gap-4">
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_missing_attribute -->
            <button on:click={handleGoogleSignup} class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent">
                <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335" />
                  <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4" />
                  <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05" />
                  <path d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z" fill="#34A853" />
                </svg>
                <span>Google</span>
            </button>
  

            <a href="#" class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent">
              <svg class="h-5 w-5 fill-[#24292F]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm/6 font-semibold">GitHub</span>
            </a>
          </div>
          </div>
          
        </div>
      </div>
    </div>
    <div class="relative hidden w-0 flex-1 lg:block">
      <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" alt="">
    </div>
  </div>
  