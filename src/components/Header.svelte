<script>
  import Banner from "./Banner.svelte";

    // Track the menu's open/close state
    let isMenuOpen = false;
  
    // Toggle the menu open/close state
    function toggleMenu() {
      isMenuOpen = !isMenuOpen;
    }
  </script>
  
  <header class="absolute class:bg-transparent inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <!-- Logo -->
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="/logo.png" alt="Your Company Logo">
        </a>
      </div>
  
      <!-- Mobile Menu Button (Hamburger Icon) -->
      <div class="flex lg:hidden">
        <button type="button" on:click={toggleMenu} class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
  
      <!-- Desktop Links (hidden on mobile) -->
      <div class="hidden lg:flex lg:gap-x-12">
        <a href="#" class="text-sm font-semibold text-gray-900">About</a>
        <a href="#features" class="text-sm font-semibold text-gray-900">Blog</a>
        <a href="#faq" class="text-sm font-semibold text-gray-900">FAQ</a>
      </div>
    </nav>
  
    <!-- Mobile Menu (shown when isMenuOpen is true) -->
    {#if isMenuOpen}
      <div class="lg:hidden" role="dialog" aria-modal="true">
        <!-- Background Overlay -->
        <div class="fixed inset-0 z-40 bg-black bg-opacity-25" on:click={toggleMenu}></div>
  
        <!-- Mobile Menu Content -->
        <div class="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 shadow-lg">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="/logo.png" alt="Your Company Logo">
            </a>
            <button type="button" on:click={toggleMenu} class="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span class="sr-only">Close menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div class="mt-6">
            <nav class="space-y-4">
              <a href="#" class="block text-base font-semibold text-gray-900 hover:bg-gray-50 p-3 rounded-lg">About</a>
              <a href="#features" class="block text-base font-semibold text-gray-900 hover:bg-gray-50 p-3 rounded-lg">Features</a>
              <a href="#faq" class="block text-base font-semibold text-gray-900 hover:bg-gray-50 p-3 rounded-lg">FAQ</a>
            </nav>
            <div class="mt-6">
              <a href="#" class="block text-base font-semibold text-gray-900 hover:bg-gray-50 p-3 rounded-lg">Log in</a>
            </div>
          </div>
        </div>
      </div>
    {/if}
    <Banner>  </Banner>
  </header>
  