<template>
    <div class="self-stretch block md:self-auto md:inline-flex">
        <button type="button" aria-label="toggle dark mode" class="flex items-center justify-center w-full p-3 border border-none rounded-full shadow-inner md:w-auto bg-slate-100 dark:bg-slate-800"
            v-if="$colorMode.preference === 'system'"
            @click="$colorMode.preference = 'dark'"
        >
            <svg class="w-5 h-5" :class="{ 'text-white': $colorMode.value === 'dark' }"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
            </svg>
        </button>

        <button type="button" aria-label="toggle dark mode" class="flex items-center justify-center w-full p-3 border border-none rounded-full shadow-inner md:w-auto bg-slate-800"
            v-if="$colorMode.preference === 'dark'"
            @click="$colorMode.preference = 'light'"
        >
            <svg class="w-5 h-5" :class="{ 'text-slate-100': $colorMode.value === 'dark' }"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
            </svg>
        </button>

        <button type="button" aria-label="toggle dark mode" class="flex items-center justify-center w-full p-3 border border-none rounded-full md:w-auto bg-slate-100"
            v-if="$colorMode.preference === 'light'"
            @click="$colorMode.preference = 'system'"
        >
            <svg class="w-5 h-5" :class="{ 'text-slate-100': $colorMode.value === 'dark' }"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" 
            >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        </button>
    </div>
</template>
