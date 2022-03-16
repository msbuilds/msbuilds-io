<template>
    <div>    
        <GridBackground></GridBackground>
        <div class="relative p-8 m-auto max-w-8xl text-slate-800">
            <div class="flex flex-col flex-shrink-0 md:items-center md:flex-row md:justify-between">
                <div class="inline-flex items-center justify-between">
                    <Logo></Logo>
                    <button type="button" aria-label="toggle nav" class="inline md:hidden bg-black shadow-[3px_3px_rgba(0,0,0,0.15)] text-white items-center p-4" v-on:click="navOpen = !navOpen">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                <!-- mobile nav --> 
                <Transition name="fade">
                    <div v-if="navOpen" class="absolute left-0 right-0 z-10 mt-6 top-20 md:hidden">
                        <Nav></Nav>    
                    </div>
                </Transition>
                <!-- desktop nav -->
                <div class="hidden md:block">
                    <Nav></Nav>    
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<script>
export default{
    data: () => ({
        navOpen: false
    })
}
</script>