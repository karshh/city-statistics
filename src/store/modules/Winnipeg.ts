// 

import axios from 'axios';
const uuid = require('uuid/v4');

const state = {
    WinnipegPopulation: []
};

const getters = {
    getWinnipegPopulation: (state: any) => state.WinnipegPopulation
};

const actions = {
    async fetchWinnipegPopulation(context: { commit: any }) {
        let response = await axios.get('https://data.winnipeg.ca/resource/mhuw-u7yg.json');
        
        let populationData: Array<{ id: string, year: number, population: number }> = [];

        
        response.data.forEach((dt: { year: string, city_of_winnipeg: string }) => {
            if (!dt.city_of_winnipeg) return;
            populationData.push({ id: uuid(), year: +(dt.year.slice(0, dt.year.indexOf('-'))), population: +dt.city_of_winnipeg })
        });
        
        populationData.push({ id: uuid(), year: 2019, population:778489 });
        context.commit('setWinnipegPopulation', populationData);
    }
};

const mutations = {
    setWinnipegPopulation: (state: any, population: Array<{ id: string, year: string, population: string }>) => state.WinnipegPopulation = population
};

export default {
    state,
    getters,
    actions,
    mutations
}