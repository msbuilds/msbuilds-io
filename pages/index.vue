<template>
  <div class="antialiased">
    <div class="relative">
      <div
        class="absolute inset-0 grid-bg"
        style="mask-image: linear-gradient(to top, transparent, black);-webkit-mask-image: linear-gradient(to top, transparent, black);"
      ></div>
      <div class="relative m-auto mb-12 p-9 max-w-8xl text-slate-800">
        <div class="flex justify-between">
          <a
            href="/"
            class=" flex group focus:outline-none shadow-[3px_3px_rgba(0,0,0,0.15)] hover:shadow-[3px_3px_2px_rgba(0,0,0,0.15)]
            "
          >
            <img
              class="inline p-2 transition-all w-14 h-14 bg-slate-800 group-hover:bg-yellow-500 group-focus:bg-yellow-500"
              src="~assets/images/logo.svg"
              alt="msbuilds logo"
            />
            <div
              class="items-center justify-center hidden px-4 font-bold transition-all bg-white sm:flex border-3 border-slate-800 group-hover:border-yellow-500 group-focus:border-yellow-500"
            >
              MSBUILDS
            </div>
          </a>
          <div
            class="
              flex
              items-center
              text-white
              bg-black
              shadow-[3px_3px_rgba(0,0,0,0.15)]
            "
          >
            <a
              class="flex items-center justify-center px-4 py-2 transition-all border-4 border-transparent hover:underline hover:text-yellow-400 hover:decoration-1 focus:text-yellow-400 focus:underline focus:decoration-1 focus:outline-none group"
              href="https://www.twitter.com/msbuildsio"
            >
              <svg
                role="img"
                class="inline w-5 h-5 mr-1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <title>Twitter</title>
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                />
              </svg>
              <span class="hidden md:inline">Twitter</span>
            </a>
            <a
              class="flex items-center justify-center px-4 py-2 transition-all border-4 border-transparent hover:underline hover:text-yellow-400 hover:decoration-1 focus:text-yellow-400 focus:underline focus:decoration-1 focus:outline-none group"
              href="https://www.github.com/msbuilds"
            >
              <svg
                role="img"
                class="inline w-5 h-5 mr-1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <title>GitHub</title>
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
              <span class="hidden md:inline">Github</span>
            </a>
            <a
              class="flex items-center justify-center px-4 py-2 transition-all border-4 border-transparent hover:underline hover:text-yellow-400 hover:decoration-1 focus:text-yellow-400 focus:underline focus:decoration-1 focus:outline-none group"
              href="https://www.youtube.com/channel/UCrTMjG3ijpCmExYJm_Tp6rg"
            >
              <svg
                role="img"
                class="inline w-5 h-5 mr-1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <title>YouTube</title>
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
              <span class="hidden md:inline">YouTube</span>
            </a>
          </div>
        </div>
        <div
          class="relative flex flex-col gap-12 mt-24 lg:flex-row md:items-start"
        >
          <div class="w-40 h-40 shrink-0">
            <img class=" object-cover border-3 rounded-full w-48 h-40 border-slate-800 shadow-[3px_3px_rgba(0,0,0,0.15)]"
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
          </div>
          <div>
            <h1 class="text-6xl font-extrabold">
              Exploring, learning and <br />
              building together.
            </h1>
            <hr class="h-1 my-4 border-none w-28 bg-slate-800" />
            <h2 class="text-3xl">Get started today.</h2>
            <div class="my-8">
              <a class=" inline-block px-6 py-4 font-bold text-white transition-all bg-slate-800 border-3 border-slate-800 shadow-[3px_3px_rgba(0,0,0,0.15)]
              hover:border-yellow-400 hover:text-slate-800 hover:bg-yellow-400 hover:shadow-[3px_3px_2px_rgba(0,0,0,0.15)]
              focus:bg-yellow-400 focus:text-slate-800 focus:border-yellow-400  focus:outline-none"
                href="https://www.youtube.com/channel/UCrTMjG3ijpCmExYJm_Tp6rg">
              Watch Videos
              </a>
              <a class="ml-4 inline-block px-6 py-4 font-bold text-slate-800 transition-all bg-white border-3 border-slate-800 shadow-[3px_3px_rgba(0,0,0,0.15)]
                  hover:border-yellow-400 hover:text-slate-800 hover:bg-yellow-400 hover:shadow-[3px_3px_2px_rgba(0,0,0,0.15)]
                  focus:bg-yellow-400 focus:text-slate-800 focus:border-yellow-400 focus:outline-none"
                        href="https://www.github.com/msbuilds">
                Browse Github
              </a>
            </div>
            <div class="mt-32">
              <h2 class="text-6xl font-extrabold">Recently Updated</h2>
              <div
                class="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2 xl:grid-cols-4"
              >
                <div class="shadow-[3px_3px_rgba(0,0,0,0.15)] bg-white">
                  <div class="aspect-video bg-slate-800"></div>
                  <div class="p-6">
                    <div>
                      <span class="pb-2 text-yellow-600">
                        Video	
                      </span>
                    </div>
                    <h3 class="font-bold">
                      Building MSBuilds
                    </h3>
                    <strong class="px-2 text-sm text-green-600 bg-green-100 rounded-full">coming soon</strong>
                    <p class="mt-4">
                      Enjoy the journey as a PHP developer takes on the exciting world of Javascript. Building a static website using Nuxt.js, Vercel and TailwindCSS. 
                    </p>
                  </div>
                </div>
                <div class="shadow-[3px_3px_rgba(0,0,0,0.15)] bg-white">
                  <div class="aspect-video bg-slate-800"></div>
                  <div class="p-6 animate-pulse">
                    <div class="flex-1 py-1 space-y-6">
                      <div class="h-2 rounded bg-slate-200 dark:bg-slate-700"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 col-span-2 rounded bg-slate-200 dark:bg-slate-700"></div>
                          <div class="h-2 col-span-1 rounded bg-slate-200 dark:bg-slate-700"></div>
                        </div>
                        <div class="h-2 rounded bg-slate-200 dark:bg-slate-700"></div>
                      </div>
                    </div>
                    <div class="flex-1 py-1 space-y-6">
                      <div class="h-2 rounded bg-slate-200 dark:bg-slate-700"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 col-span-2 rounded bg-slate-200 dark:bg-slate-700"></div>
                          <div class="h-2 col-span-1 rounded bg-slate-200 dark:bg-slate-700"></div>
                        </div>
                        <div class="h-2 rounded bg-slate-200 dark:bg-slate-700"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shadow-[3px_3px_rgba(0,0,0,0.15)] bg-white">
                  <div class="aspect-video bg-slate-800"></div>
                  <div class="p-6 animate-pulse">
                    <div class="flex-1 py-1 space-y-6">
                      <div class="h-2 rounded bg-slate-200 dark:bg-slate-700"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 col-span-2 rounded bg-slate-200 dark:bg-slate-700"></div>
                          <div class="h-2 col-span-1 rounded bg-slate-200 dark:bg-slate-700"></div>
                        </div>
                        <div class="h-2 rounded bg-slate-200 dark:bg-slate-700"></div>
                      </div>
                    </div>
                    <div class="flex-1 py-1 space-y-6">
                      <div class="h-2 rounded bg-slate-200 dark:bg-slate-700"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 col-span-2 rounded bg-slate-200 dark:bg-slate-700"></div>
                          <div class="h-2 col-span-1 rounded bg-slate-200 dark:bg-slate-700"></div>
                        </div>
                        <div class="h-2 rounded bg-slate-200 dark:bg-slate-700"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shadow-[3px_3px_rgba(0,0,0,0.15)] bg-white">
                  <div class="aspect-video bg-slate-800"></div>
                  <div class="p-6 animate-pulse">
                    <div class="flex-1 py-1 space-y-6">
                      <div class="h-2 rounded bg-slate-200 dark:bg-slate-700"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 col-span-2 rounded bg-slate-200 dark:bg-slate-700"></div>
                          <div class="h-2 col-span-1 rounded bg-slate-200 dark:bg-slate-700"></div>
                        </div>
                        <div class="h-2 rounded bg-slate-200 dark:bg-slate-700"></div>
                      </div>
                    </div>
                    <div class="flex-1 py-1 space-y-6">
                      <div class="h-2 rounded bg-slate-200 dark:bg-slate-700"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 col-span-2 rounded bg-slate-200 dark:bg-slate-700"></div>
                          <div class="h-2 col-span-1 rounded bg-slate-200 dark:bg-slate-700"></div>
                        </div>
                        <div class="h-2 rounded bg-slate-200 dark:bg-slate-700"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="-skew-y-3 my-36 ">
    <div class="grid h-10 grid-cols-3 -mb-5 mt-36">
      <div class="bg-transparent"></div>
      <div class="col-span-2 bg-yellow-500"></div>
    </div>
    <div class="bg-slate-800">
    <div class="relative px-8 py-48 m-auto text-white skew-y-3 max-w-8xl">
      <h2 class="mb-8 text-6xl font-extrabold leading-snug">Tooling</h2>
      <p class="mb-8">Below are a list of tools I consider essential to development. <br/> These tend to be the first applications to get installed and provide great developer experiences.</p>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <a href="https://code.visualstudio.com/" target="_blank" class="flex items-center p-4 shadow-[3px_3px_rgba(255,255,255,0.35)] font-bold bg-slate-100 text-slate-800  transition 
          hover:shadow-yellow-500 hover:bg-white hover:scale-105
          focus:shadow-yellow-500 focus:bg-white focus:outline-none">
          <svg class="mr-2" viewBox="-11.9 -2 1003.9 995.6" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
            <path d="m12.1 353.9s-24-17.3 4.8-40.4l67.1-60s19.2-20.2 39.5-2.6l619.2 468.8v224.8s-.3 35.3-45.6 31.4z" fill="#2489ca"/>
            <path d="m171.7 498.8-159.6 145.1s-16.4 12.2 0 34l74.1 67.4s17.6 18.9 43.6-2.6l169.2-128.3z" fill="#1070b3"/>
            <path d="m451.9 500 292.7-223.5-1.9-223.6s-12.5-48.8-54.2-23.4l-389.5 354.5z" fill="#0877b9"/>
            <path d="m697.1 976.2c17 17.4 37.6 11.7 37.6 11.7l228.1-112.4c29.2-19.9 25.1-44.6 25.1-44.6v-671.2c0-29.5-30.2-39.7-30.2-39.7l-197.7-95.3c-43.2-26.7-71.5 4.8-71.5 4.8s36.4-26.2 54.2 23.4v887.5c0 6.1-1.3 12.1-3.9 17.5-5.2 10.5-16.5 20.3-43.6 16.2z" fill="#3c99d4"/>
          </svg>
          Visual Studio Code
        </a>
        <a href="https://www.jetbrains.com/phpstorm/" target="_blank" class="flex items-center p-4 shadow-[3px_3px_rgba(255,255,255,0.35)] font-bold bg-slate-100 text-slate-800  transition 
          hover:shadow-yellow-500 hover:bg-white hover:scale-105
          focus:shadow-yellow-500 focus:bg-white focus:outline-none">
          <svg class="mr-2" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" width="32" height="32"><style>.st0{fill:url(#SVGID_1_)}.st1{fill:url(#SVGID_2_)}.st2{fill:url(#SVGID_3_)}.st3{fill:url(#SVGID_4_)}.st4{fill:#fff}</style><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1=".551" y1="25.16" x2="29.941" y2="63.98" gradientTransform="matrix(1 0 0 -1 0 72)"><stop offset=".016" stop-color="#765af8"/><stop offset=".382" stop-color="#b345f1"/><stop offset=".758" stop-color="#fa3293"/><stop offset=".941" stop-color="#ff318c"/></linearGradient><path class="st0" d="M39.6 15.2l-3.3-10L11.9 0 0 13.5l37.2 19z"/><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="2.709" y1="23.637" x2="32.052" y2="62.394" gradientTransform="matrix(1 0 0 -1 0 72)"><stop offset=".016" stop-color="#765af8"/><stop offset=".382" stop-color="#b345f1"/><stop offset=".758" stop-color="#fa3293"/><stop offset=".941" stop-color="#ff318c"/></linearGradient><path class="st1" d="M28 41.4l-.7-20.8L0 13.5l6.7 40.1 21.3-.2z"/><linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="50.856" y1="25.595" x2="34.273" y2="64.952" gradientTransform="matrix(1 0 0 -1 0 72)"><stop offset=".183" stop-color="#765af8"/><stop offset=".238" stop-color="#8655f6"/><stop offset=".345" stop-color="#9f4cf3"/><stop offset=".443" stop-color="#ae47f2"/><stop offset=".522" stop-color="#b345f1"/></linearGradient><path class="st2" d="M22.1 41l1.3-16.5L43.2 4.2l17.7 3.2L70 30.1l-9.5 9.4L45 37l-9.6 10.1z"/><linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="63.251" y1="14.642" x2="24.683" y2="44.465" gradientTransform="matrix(1 0 0 -1 0 72)"><stop offset=".016" stop-color="#765af8"/><stop offset=".382" stop-color="#b345f1"/></linearGradient><path class="st3" d="M43.2 4.2L14.8 29.4l5.5 32.4L43.9 70 70 54.4z"/><g><path d="M13.4 13.4h43.2v43.2H13.4z"/><path class="st4" d="M17.5 48.5h16.2v2.7H17.5zM17.3 19h7.3c4.3 0 6.9 2.5 6.9 6.2v.1c0 4.2-3.2 6.3-7.3 6.3h-3V37h-3.9V19zm7.1 9c2 0 3.1-1.2 3.1-2.7v-.1c0-1.8-1.2-2.7-3.2-2.7h-3V28h3.1zM32.5 34.4l2.3-2.8c1.6 1.3 3.3 2.2 5.4 2.2 1.6 0 2.6-.6 2.6-1.7V32c0-1-.6-1.5-3.6-2.3-3.6-.9-6-1.9-6-5.5v-.1c0-3.3 2.6-5.4 6.3-5.4 2.6 0 4.9.8 6.7 2.3l-2.1 3c-1.6-1.1-3.2-1.8-4.7-1.8s-2.3.7-2.3 1.6v.1c0 1.2.8 1.6 3.9 2.4 3.6 1 5.7 2.3 5.7 5.4v.1c0 3.6-2.7 5.6-6.6 5.6-2.7-.1-5.4-1.1-7.6-3"/></g></svg>
          PHPStorm
        </a>
        <a href="https://insomnia.rest/" target="_blank" class="flex items-center p-4 shadow-[3px_3px_rgba(255,255,255,0.35)] font-bold bg-slate-100 text-slate-800  transition 
          hover:shadow-yellow-500 hover:bg-white hover:scale-105
          focus:shadow-yellow-500 focus:bg-white focus:outline-none">
          <svg class="mr-2" width="32" height="32" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M17,32.187c8.387,0 15.186,-6.8 15.186,-15.187c0,-8.387 -6.799,-15.186 -15.186,-15.186c-8.387,0 -15.187,6.799 -15.187,15.186c0,8.387 6.8,15.187 15.187,15.187Z" style="fill:#fff;fill-rule:nonzero;"/><path d="M17,1c-8.837,0 -16,7.163 -16,16c0,8.837 7.163,16 16,16c8.837,0 16,-7.163 16,-16c0,-8.837 -7.163,-16 -16,-16Zm0,1.627c7.938,0 14.373,6.435 14.373,14.373c0,7.938 -6.435,14.373 -14.373,14.373c-7.938,0 -14.373,-6.435 -14.373,-14.373c0,-7.938 6.435,-14.373 14.373,-14.373Z" style="fill:#4000bf;fill-rule:nonzero;"/><path d="M17.181,5.61c6.29,0 11.39,5.1 11.39,11.39c0,6.291 -5.1,11.39 -11.39,11.39c-6.291,0 -11.39,-5.099 -11.39,-11.39c0,-1.537 0.305,-3.004 0.857,-4.342c0.806,1.098 2.106,1.811 3.572,1.811c2.447,0 4.43,-1.983 4.43,-4.429c0,-1.467 -0.713,-2.767 -1.811,-3.573c1.338,-0.552 2.804,-0.857 4.342,-0.857Z" style="fill:url(#_Linear1);"/><defs><linearGradient id="_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.39485e-15,-22.7797,22.7797,1.39485e-15,17.1808,28.3899)"><stop offset="0" style="stop-color:#7400e1;stop-opacity:1"/><stop offset="1" style="stop-color:#4000bf;stop-opacity:1"/></linearGradient></defs></svg>
          Insomnia
          </a>
        <a href="https://tableplus.com/" target="_blank" class="flex items-center p-4 shadow-[3px_3px_rgba(255,255,255,0.35)] font-bold bg-slate-100 text-slate-800  transition 
          hover:shadow-yellow-500 hover:bg-white hover:scale-105
          focus:shadow-yellow-500 focus:bg-white focus:outline-none">
          <img class="inline-block w-8 h-8 mr-2" alt="tableplus icon" src="~/assets/images/tableplus.png">
          TablePlus
        </a>
        <a href="https://myray.app/" target="_blank" class="flex items-center p-4 shadow-[3px_3px_rgba(255,255,255,0.35)] font-bold bg-slate-100 text-slate-800  transition 
          hover:shadow-yellow-500 hover:bg-white hover:scale-105
          focus:shadow-yellow-500 focus:bg-white focus:outline-none">
          <img class="inline-block w-8 h-8 mr-2" alt="spatie ray icon" src="~/assets/images/Ray_256x256x32.png">
          Ray
        </a>
        <a href="https://tinkerwell.app/" target="_blank" class="flex items-center p-4 shadow-[3px_3px_rgba(255,255,255,0.35)] font-bold bg-slate-100 text-slate-800  transition 
          hover:shadow-yellow-500 hover:bg-white hover:scale-105
          focus:shadow-yellow-500 focus:bg-white focus:outline-none">
          <img class="inline-block w-8 h-8 mr-2" alt="tinkerwell icon" src="~/assets/images/tinkerwell_logo.png">
          Tinkerwell
        </a>
        <a href="https://usehelo.com/" target="_blank" class="flex items-center p-4 shadow-[3px_3px_rgba(255,255,255,0.35)] font-bold bg-slate-100 text-slate-800  transition 
          hover:shadow-yellow-500 hover:bg-white hover:scale-105
          focus:shadow-yellow-500 focus:bg-white focus:outline-none">
          <img class="inline-block w-8 h-8 mr-2" alt="HELO icon" src="~/assets/images/HELO_256x256x32.png">
          HELO
        </a>
        <a href="https://coderunnerapp.com/" target="_blank" class="flex items-center p-4 shadow-[3px_3px_rgba(255,255,255,0.35)] font-bold bg-slate-100 text-slate-800  transition 
          hover:shadow-yellow-500 hover:bg-white hover:scale-105
          focus:shadow-yellow-500 focus:bg-white focus:outline-none">
          <img class="inline-block w-8 h-8 mr-2" alt="coderunner icon" src="~/assets/images/coderunner.png">
          CodeRunner
        </a>
        <a href="https://cyberduck.io/" target="_blank" class="flex items-center p-4 shadow-[3px_3px_rgba(255,255,255,0.35)] font-bold bg-slate-100 text-slate-800  transition 
          hover:shadow-yellow-500 hover:bg-white hover:scale-105
          focus:shadow-yellow-500 focus:bg-white focus:outline-none">
          <img class="inline-block w-8 h-8 mr-2" alt="cyberduck icon" src="~/assets/images/cyberduck-application_32x32x32.png">
          Cyberduck
        </a>
        <a href="https://docker.com" target="_blank" class="flex items-center p-4 shadow-[3px_3px_rgba(255,255,255,0.35)] font-bold bg-slate-100 text-slate-800  transition 
          hover:shadow-yellow-500 hover:bg-white hover:scale-105
          focus:shadow-yellow-500 focus:bg-white focus:outline-none">
          <img class="inline-block w-8 h-8 mr-2" alt="docker icon" src="~/assets/images/docker-48.png">
          Docker
        </a>
      </div>
      </div>
    </div>
    <div class="grid h-10 grid-cols-3 -mt-5 mb-36">
      <div class="bg-yellow-500"></div>
      <div class="col-span-2 bg-transparent"></div>
      </div>
    </div>
    <div class="relative">
        <div
            class="absolute inset-0 grid-bg top-1"
            style="mask-image: linear-gradient(to bottom, transparent, black);-webkit-mask-image: linear-gradient(to bottom, transparent, black);"
            ></div>
        <div class="relative px-8 py-24 m-auto text-slate-800 max-w-8xl">
        <h2 class="mb-8 text-6xl font-extrabold leading-snug">Topics of Interest</h2>
        <p class="my-4">
            Gone are the days of sitting down with your index.html file and building a website. With technology getting more complex each year, it's important as developers to remain interested in the ever-changing landscape. It isn't easy, and a lot of these technologies don't stick around for the long haul, but every year a new staple technology tends to emerge.  Below are some of the most common technologies and topics part of my workflow today.
        </p>
        <ul class="grid grid-cols-4 gap-4 mt-12">
            <li class="p-4 bg-white border border-slate-800 shadow-[3px_3px_rgba(0,0,0,0.15)]">
                Laravel
            </li>
            <li class="p-4 bg-white border border-slate-800 shadow-[3px_3px_rgba(0,0,0,0.15)]">Drupal</li>
            <li class="p-4 bg-white border border-slate-800 shadow-[3px_3px_rgba(0,0,0,0.15)]">Gitlab</li>
            <li class="p-4 bg-white border border-slate-800 shadow-[3px_3px_rgba(0,0,0,0.15)]">Docker</li>
            <li class="p-4 bg-white border border-slate-800 shadow-[3px_3px_rgba(0,0,0,0.15)]">Kubernetes</li>
            <li class="p-4 bg-white border border-slate-800 shadow-[3px_3px_rgba(0,0,0,0.15)]">Ansible</li>
            <li class="p-4 bg-white border border-slate-800 shadow-[3px_3px_rgba(0,0,0,0.15)]">DevOps</li>
            <li class="p-4 bg-white border border-slate-800 shadow-[3px_3px_rgba(0,0,0,0.15)]">Raspberry Pi</li>
        </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>