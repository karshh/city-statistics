import axios from 'axios';
const uuid = require('uuid/v4');

const state = {
    CalgaryPopulation: []
};

const getters = {
    getCalgaryPopulation: (state: any) => state.CalgaryPopulation
};

const actions = {
    async fetchCalgaryPopulation(context: { commit: any }) {
        let map: any = {};
        let response = await axios.get('https://data.calgary.ca/resource/rmai-qvzh.json');

        let populationData: Array<{ id: string, year: string, population: string }> = [];
        response.data.forEach((dt: {year: string, residents: string }) => {
            if (!map[dt.year]) map[dt.year] = 0;
            map[dt.year] += (+dt.residents);
        });

        Object.keys(map).forEach(key => {
            populationData.push({ id: uuid(), year: key.slice(0, key.indexOf('-')), population: map[key].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") })
        });
        
        context.commit('setCalgaryPopulation', populationData);
    }
};

const mutations = {
    setCalgaryPopulation: (state: any, population: Array<{ id: string, year: string, population: string }>) => state.CalgaryPopulation = population
};

export default {
    state,
    getters,
    actions,
    mutations
}