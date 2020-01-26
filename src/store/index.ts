import Vuex from 'vuex';
import Vue from 'vue';
import Calgary from './modules/Calgary'
import Edmonton from './modules/Edmonton'
import Winnipeg from './modules/Winnipeg'
import Comment from './modules/Comment'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Calgary,
        Edmonton,
        Winnipeg,
        Comment
    }
});
