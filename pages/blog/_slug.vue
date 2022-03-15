<template>
    <article>
        <GridBackground></GridBackground>
        <MenuBar></MenuBar>
        <div class="relative py-8 m-auto mb-12 antialiased max-w-8xl text-slate-800">
            <div class="relative max-w-6xl px-8 m-auto bg-white shadow-lg border-t-3 border-slate-800">
                <div class="flex items-center justify-between max-w-4xl pt-12 m-auto">
                    <a href="/blog" class="inline-flex items-center leading-10 hover:underline hover:decoration-yellow-400 hover:decoration-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                        </svg>
                        Back to listing
                    </a>
                    <span class="inline text-slate-600">{{ formatDate(article.createdAt) }}</span>
                </div>
                <section class="relative py-12">
                    <h1 class="max-w-6xl m-auto text-4xl font-extrabold text-center md:text-6xl">{{ article.title }}</h1>
                    <hr class="h-1 m-auto my-4 border-none w-28 bg-slate-800" />
                    <div class="max-w-4xl m-auto mb-24 text-xl text-center text-slate-600">{{ article.description }}</div>
                    <div class="max-w-4xl m-auto mb-12 text-lg prose">
                        <nuxt-content :document="article" />
                    </div>                    
                </section>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        async asyncData({ $content, params }) {
            const article = await $content('articles', params.slug).fetch()

            return { article }
        },
        methods: {
            formatDate(date) {
                const options = { year: 'numeric', month: 'long', day: 'numeric' }
                return new Date(date).toLocaleDateString('en', options)
            }
        }
    }
</script>