<!-- src/routes/dashboard/+page.svelte -->
<script>
    import { userStore } from '$lib/stores/userStore';
    import { logOut } from '$lib/auth';
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment'; // Import browser check
  
    // Subscribe to the userStore to get the latest user data
    $: user = $userStore;
  
    // Redirect to login if user is not logged in, only on the client
    $: if (browser && !user?.uid) {
      goto('/login');
    }
  
    async function handleLogout() {
      await logOut();
      if (browser) goto('/login'); // Redirect to login after logging out
    }
  </script>
  
  {#if user}
    <h1>Welcome, {user.displayName}!</h1>
    <p>Email: {user.email}</p>
    <button on:click={handleLogout}>Log Out</button>
  {:else}
    <p>Loading...</p>
  {/if}
  