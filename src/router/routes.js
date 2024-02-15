const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () =>
                    import ('pages/Index.vue') }
        ]
    },
    {
        path: '/about',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () =>
                    import ('pages/About.vue') }
        ]
    },
    {
        path: '/history',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () =>
                    import ('pages/History.vue') }
        ]
    },
    {
        path: '/auth',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () =>
                    import ('pages/Auth.vue') }
        ]
    },
    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes