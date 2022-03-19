<template>
    <div class="mt-32">
        <h2 class="text-6xl font-extrabold">Featured</h2>
        <hr class="h-1 mt-4 mb-8 border-none w-28 bg-slate-800 dark:bg-slate-100" />
        <ul class="grid max-w-6xl gap-16 mt-6 lg:grid-cols-2">
            <li v-for="article of articles" :key="article.slug">
                <BlogSummaryItem :article="article"></BlogSummaryItem>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: () => ({
        articles: []
    }),
    async fetch() {
        this.articles = await this.$content('articles', { deep: true })
        .only(['title', 'featured', 'description', 'slug', 'video', 'createdAt'])
        .where({ featured: true })
        .sortBy('createdAt', 'desc')
        .limit(2)
        .fetch()
    },
}
</script>