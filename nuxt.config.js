export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'msbuilds',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'apple-touch-icon', type: 'image/png', href: '/apple-touch-icon.png' },
            { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png' },
            { rel: 'manifest', type: 'webmanifest', href: '/site.webmanifest' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/css/main.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxt/postcss8',
        '@nuxtjs/color-mode'
    ],

    colorMode: {
        classSuffix: '',
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxt/content'
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extractCSS: {
            ignoreOrder: false
        },
        postcss: { 
            plugins: { 
                tailwindcss: {}, 
                autoprefixer: {}, 
            }, 
        },
    },

    content: {
        markdown: {
            prism: {
                theme: 'prism-themes/themes/prism-nord.css'
            },
            remarkAutolinkHeadings: {
                linkProperties: { ariaHidden: 'true', tabIndex: -1, title: 'Link to section' }
            }
        }
    }
}
