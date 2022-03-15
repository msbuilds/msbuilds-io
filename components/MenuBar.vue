<template>
    <div class="relative p-8 m-auto max-w-8xl text-slate-800">
        <div class="flex justify-between">
            <a  href="/" 
                class=" flex group shadow-[3px_3px_rgba(0,0,0,0.15)] focus:outline-none hover:shadow-[3px_3px_2px_rgba(0,0,0,0.15)]">
                <img class="inline p-2 transition-all w-14 h-14 bg-slate-800 group-hover:bg-yellow-500 group-focus:bg-yellow-500"
                    src="~assets/images/logo.svg"
                    alt="msbuilds logo" />
                <div class="items-center justify-center hidden px-4 font-bold transition-all bg-white sm:flex border-3 border-slate-800 group-hover:border-yellow-500 group-focus:border-yellow-500">
                    MSBUILDS
                </div>
            </a>
            <div class="flex items-center text-white bg-black shadow-[3px_3px_rgba(0,0,0,0.15)]">
                <a class="flex items-center justify-center px-4 py-2 transition-all border-4 border-transparent hover:underline hover:text-yellow-400 hover:decoration-1 focus:text-yellow-400 focus:underline focus:decoration-1 focus:outline-none group"
                    href="/blog"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <title>Blog</title>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    <span class="hidden md:inline">Blog</span>
                </a>
                <a class="flex items-center justify-center px-4 py-2 transition-all border-4 border-transparent hover:underline hover:text-yellow-400 hover:decoration-1 focus:text-yellow-400 focus:underline focus:decoration-1 focus:outline-none group"
                    href="https://www.twitter.com/msbuildsio"
                >
                    <svg role="img" class="inline w-5 h-5 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
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
                    <svg role="img" class="inline w-5 h-5 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
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
                    <svg role="img" class="inline w-5 h-5 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                        <title>YouTube</title>
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span class="hidden md:inline">YouTube</span>
                </a>
            </div>
        </div>
    </div>
</template>