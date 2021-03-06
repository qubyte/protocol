'use strict';

const util = require('./util');
const VueRouter = require('vue-router');

module.exports = new VueRouter({
    mode: 'history',
    scrollBehavior(route) {
        const { hash } = route;
        if (hash) {
            util.scrollToHash(hash);
        } else {
            return { x: 0, y: 0 };
        }
    },
    routes: [
        {
            path: '',
            component: require('./routes/layout.vue'),
            children: [
                {
                    name: 'home',
                    path: '/',
                    component: require('./routes/home.vue'),
                },
                {
                    name: 'domain',
                    path: '/:domainId',
                    component: require('./routes/domain.vue'),
                    props: true,
                },
            ],
        },
    ],
});
