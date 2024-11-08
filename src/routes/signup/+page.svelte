<!-- src/routes/signup/+page.svelte -->
<script>
    import { userStore } from '$lib/stores/userStore';
    import { goto } from '$app/navigation';
    import { signUp } from '$lib/auth'; // Import the signup function
  
    $: uid = $userStore?.uid;
  
    // Redirect if the user is already logged in
    $: if (uid) {
      goto('/dashboard');
    }
  
    let email = '';
    let password = '';
    let errorMessage = '';
  
    async function handleSignup() {
      const result = await signUp(email, password);
      if (result.success) {
        goto('/dashboard'); // Redirect to the dashboard on successful signup
      } else {
        errorMessage = result.error;
      }
    }
  </script>

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

        </div>
      </div>
    </div>
    <div class="relative hidden w-0 flex-1 lg:block">
      <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" alt="">
    </div>
  </div>
  