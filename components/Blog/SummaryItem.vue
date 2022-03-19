<template>
    <div>
        <div class="mb-4">
            <h3 class="text-3xl font-extrabold leading-tight">{{ article.title }}</h3>
            <span class="text-sm text-slate-600 dark:text-slate-400">{{ formatDate(article.createdAt) }}</span>
            <span class="px-2 text-sm font-bold text-green-900 bg-green-100 rounded-full" v-show="recent(article.createdAt)">new</span>
        </div>
        <p class="text-lg text-slate-600 dark:text-slate-400">{{ article.description }}</p>
        <div class="flex flex-col justify-center gap-2 mt-6 sm:items-center sm:justify-start sm:gap-4 sm:flex-row">
            <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            class="
            inline-block text-center xs:text-left xs:inline-block px-6 py-2 font-bold text-slate-800 transition-all bg-white border-2 border-slate-800 shadow-[3px_3px_rgba(0,0,0,0.15)]
            hover:border-yellow-400 hover:text-slate-800 hover:bg-yellow-400 hover:shadow-[3px_3px_2px_rgba(0,0,0,0.15)]
            focus:bg-yellow-400 focus:text-slate-800 focus:border-yellow-400 focus:outline-none
            dark:border-white dark:hover:border-yellow-400 dark:focus:border-yellow-400">
                <span class="flex items-center">
                    Read Full Story <span class="sr-only">about {{ article.title }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </span>
            </NuxtLink>
            <a v-if="article.video" :href="article.video" target="_blank"
            class="inline-block text-center xs:text-left xs:inline-block px-6 py-2 font-bold text-slate-800 transition-all bg-white border-2 border-slate-800 shadow-[3px_3px_rgba(0,0,0,0.15)]
            hover:border-yellow-400 hover:text-slate-800 hover:bg-yellow-400 hover:shadow-[3px_3px_2px_rgba(0,0,0,0.15)]
            focus:bg-yellow-400 focus:text-slate-800 focus:border-yellow-400 focus:outline-none
            dark:border-white">
                <span class="flex items-center">
                    <svg role="img" class="inline w-6 h-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                        <title>YouTube</title>
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    Watch Video <span class="sr-only">about {{ article.title }}</span> 
                </span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'article' ],
    methods: {
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleDateString("en", options);
        },
        recent(date) {
            let currentDate = new Date(date)
            const weekLater = currentDate.setDate(currentDate.getDate() + 7)

            return weekLater >= new Date()
        }
    }
}
</script>