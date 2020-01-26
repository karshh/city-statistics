import axios from 'axios';

const state = {
    _comment: []
}

const getters = {
    Comment: (state: any) => state._comment
}

const actions = {
    async fetchComments(context: { commit: any }) {
        let map: any = {};
        let response = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=10');

        if (response.data) context.commit('setComment', response.data);
    },

    async addComment(context: { commit: any }, formData: { name: string, email: string, comment: string }) {

        let response = await axios.post('https://jsonplaceholder.typicode.com/comments', { ...formData });

        if (response.data) context.commit('setComment', [response.data]);
    }

}

const mutations = {
    setComment: (state: any, comments: Array<any>) => state._comment = [...state._comment, ...comments]

}

export default {
    state,
    getters,
    actions,
    mutations
}