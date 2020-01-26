import Vuex from 'vuex';
import Vue from 'vue';
import Calgary from './modules/Calgary'
import Edmonton from './modules/Edmonton'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Calgary,
        Edmonton
    }
});
