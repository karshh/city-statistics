// 

import axios from 'axios';
const uuid = require('uuid/v4');

const state = {
    EdmontonPopulation: []
};

const getters = {
    getEdmontonPopulation: (state: any) => state.EdmontonPopulation
};

const actions = {
    async fetchEdmontonPopulation(context: { commit: any }) {
        let map: any = {};
        let response = await axios.get('https://data.edmonton.ca/api/views/frjf-2vsa/rows.json');
        
        let populationData: Array<{ id: string, year: string, population: string }> = [];
        response.data.data.forEach((dt: Array<any>) => {
            populationData.push({ id: uuid(), year: dt[8].slice(0, dt[8].indexOf('-')), population: dt[9].replace(/\B(?=(\d{3})+(?!\d))/g, ",") })
        });
        
        context.commit('setEdmontonPopulation', populationData);
    }
};

const mutations = {
    setEdmontonPopulation: (state: any, population: Array<{ id: string, year: string, population: string }>) => state.EdmontonPopulation = population
};

export default {
    state,
    getters,
    actions,
    mutations
}