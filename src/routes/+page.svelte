<script>

import Footer from "../components/Footer.svelte";
import Header from "../components/Header.svelte";

</script>

<div class="bg-white">
    <Header></Header>

    <main class="isolate">
        <!-- Hero section -->
        <div class="relative pt-14">
            <!-- Background Image -->
            <div class="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
                <img
                    src="/backdrop.png"
                    alt="Background"
                    style="
                        width: 100%;
                        height: 150vh;
                        opacity: 0.2;
                        filter: saturate(50%);
                        object-fit: cover;
                        mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
                    "
                />
            </div>
            
            <!-- Top Section: Text and New Image Side by Side -->
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between py-24 sm:py-32">
                    <!-- Left Column: Title, Description, and Buttons -->
                    <div class="lg:w-1/2 text-left">
                        <h1 class="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Habit Tracking, Reimagined</h1>
                        <p class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                            Build Endurance and Resilience– Track Four Essential Habits for a Healthier, More Focused Life. Open Source and Free to Use.
                        </p>
                        <div class="mt-10 flex items-center gap-x-6">
                            <a href="#" class="rounded-md bg-[#137369] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0b594f]">Get started for free</a>
                            <a href="#faq" class="text-sm/6 font-semibold text-gray-900">Learn more <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </div>
        
                    <!-- Right Column: New Image -->
                    <div class="lg:mt-0 lg:w-1/2 flex justify-center order-first lg:order-last">
                        <!-- svelte-ignore a11y_img_redundant_alt -->
                        <img src="/heroimage.png" alt="New Image" 
                             class="max-w-full"
                             style="
                                 width: 90%;
                                 max-width: 600px;
                                 max-height: 450px; /* Control image height */
                                 object-fit: cover;
                                 object-position: center; /* Crop extra space */
                                 border-radius: 12px; /* Optional: Add rounding */
                                 image-rendering: -webkit-optimize-contrast;
                             ">
                    </div>
                    
                </div>
            </div>
        
            <!-- Bottom Section: Application View -->
            <!-- <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="flow-root rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10">
                    <img
                        src="https://tailwindui.com/plus/img/component-images/project-app-screenshot.png"
                        alt="App screenshot"
                        width="2432"
                        height="1442"
                        class="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                    />
                </div>
            </div> -->
        </div>
        
    
        <!-- Feature section -->
         <section id="features">

         </section>

        <!-- Testimonial section
        <div class="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div class="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
            <img class="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0" src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80" alt="">
            <div class="absolute inset-0 bg-gray-900/90 mix-blend-multiply"></div>
            <div class="absolute -left-80 -top-56 transform-gpu blur-3xl" aria-hidden="true">
              <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
            </div>
            <div class="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl" aria-hidden="true">
              <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
            </div>
            <div class="relative mx-auto max-w-2xl lg:mx-0">
              <img class="h-12 w-auto" src="https://tailwindui.com/plus/img/logos/workcation-logo-white.svg" alt="">
              <figure>
                <blockquote class="mt-6 text-lg font-semibold text-white sm:text-xl/8">
                  <p>“Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada lorem ac.”</p>
                </blockquote>
                <figcaption class="mt-6 text-base text-white">
                  <div class="font-semibold">Judith Black</div>
                  <div class="mt-1">CEO of Tuple</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div> -->
    
        <!-- FAQ Section -->
        <section id="faq" class="mx-auto max-w-2xl px-6 pb-8 mt-24 lg:max-w-7xl lg:px-8 lg:pb-32">
            <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl mb-8">Frequently Asked Questions</h2>
            <dl class="space-y-8 divide-y divide-gray-900/10">
            <!-- Question 1 -->
            <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt class="text-base font-semibold text-gray-900 lg:col-span-5">How is Cadence different from other habit-tracking apps?</dt>
                <dd class="mt-4 text-base text-gray-600 lg:col-span-7 lg:mt-0">
                  Cadence focuses on a simplified, balanced approach by tracking just four essential habits: sleep, work, exercise, and mindfulness. Unlike other apps that overwhelm with too many features or endless habit options, Cadence encourages you to build a sustainable routine by scheduling these core habits into your daily calendar. This structured approach, combined with user-friendly reminders and insightful progress tracking, makes Cadence an effective tool for anyone looking to improve balance and well-being in a focused way.
                </dd>
            </div>
            
            <!-- Question 2 -->
            <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt class="text-base font-semibold text-gray-900 lg:col-span-5">How do I schedule my habits?</dt>
                <dd class="mt-4 text-base text-gray-600 lg:col-span-7 lg:mt-0">
                Cadence makes scheduling easy! Simply open the in-app calendar, select your preferred times for each habit, and save your daily schedule. This way, you can set a structured routine and receive reminders throughout the day.
                </dd>
            </div>
        
            <!-- Question 4 -->
            <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt class="text-base font-semibold text-gray-900 lg:col-span-5">How can I track my progress over time?</dt>
                <dd class="mt-4 text-base text-gray-600 lg:col-span-7 lg:mt-0">
                Cadence provides visual insights into your habit consistency over time. You can view weekly and monthly summaries to track your progress and make adjustments as needed to improve consistency.
                </dd>
            </div>
        
            </dl>
        </section>
  

      </main>
    
      <Footer></Footer>
    </div>


    