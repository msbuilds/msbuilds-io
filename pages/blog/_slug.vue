<template>
    <div>
        <Header></Header>
        <div class="relative py-8 m-auto mb-12 antialiased max-w-8xl text-slate-800 dark:text-slate-100">
            <div class="relative max-w-6xl px-4 m-auto bg-white shadow-lg border-t-3 border-slate-800 dark:bg-slate-800 dark:shadow-cyan-700">
                <div class="flex items-center justify-between max-w-4xl pt-12 m-auto">
                    <a href="/blog" class="inline-flex items-center leading-10 hover:underline hover:decoration-yellow-400 hover:decoration-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                        </svg>
                        More Posts
                    </a>
                    <span class="inline text-slate-600 dark:text-slate-300">{{ formatDate(article.createdAt) }}</span>
                </div>
                <article class="relative py-12">
                    <h1 class="max-w-6xl m-auto text-5xl font-extrabold text-center md:text-6xl">{{ article.title }}</h1>
                    <hr class="h-1 m-auto my-4 border-none w-28 bg-slate-800 dark:bg-slate-100" />
                    <div class="max-w-4xl m-auto mb-24 text-xl text-center text-slate-600 dark:text-slate-300">{{ article.description }}</div>
                    <div class="max-w-4xl m-auto mb-12 text-lg prose dark:prose-invert">
                        <nuxt-content :document="article" />
                    </div>                    
                </article>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    export default {
        async asyncData({ $content, params }) {
            const article = await $content('articles', { deep: true }).where({ slug: params.slug }).fetch()
            
            return { article : article[0] }
        },
        methods: {
            formatDate(date) {
                const options = { year: 'numeric', month: 'long', day: 'numeric' }
                return new Date(date).toLocaleDateString('en', options)
            }
        }
    }
</script>