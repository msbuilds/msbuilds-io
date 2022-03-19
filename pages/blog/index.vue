<template>
    <div>
        <Header></Header>
        <div class="relative p-8 m-auto mb-12 antialiased max-w-7xl text-slate-800 dark:text-slate-100">
            <section class="relative mt-12">
                <h1 class="text-6xl font-extrabold">
                Hot off the presses
                </h1>
                <hr class="h-1 my-4 border-none w-28 bg-slate-800 dark:bg-slate-100" />
                <h2 class="text-3xl">More like random ideas.</h2>
                <ul class="flex flex-col max-w-6xl gap-16 mt-24">
                    <li v-for="article of articles" :key="article.slug">
                        <BlogSummaryItem :article="article"></BlogSummaryItem>
                    </li>
                </ul>
            </section>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const articles = await $content("articles", { deep: true })
            .only(["title", "description", "img", "slug", "video", "createdAt"])
            .sortBy("createdAt", "desc")
            .fetch();
        return {
            articles
        };
    },
}
</script>
