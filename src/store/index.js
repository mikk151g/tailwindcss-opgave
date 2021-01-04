import { createStore } from 'vuex';

import rootGetters from './getters.js';

const store = createStore({
    state() {
        return {
            uniqueId: 2,
            resources: [
            {
                id: 0,
                title: 'Official documentation',
                description: 'The official Vue.js documentation.'
            },
            {
                id: 1,
                title: 'Google',
                description: 'Learn to google...'
            }]
        };
    },
    getters: rootGetters
});

export default store;