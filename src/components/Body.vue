<template>
  <div id="body" class="container">
    <GChart type="LineChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { GChart } from "vue-google-charts";

export default {
  name: "Body",
  components: {
    GChart
  },
  data() {
    return {
      chartOptions: {
        chart: {
          title: "Population",
          curveType: "function"
        },
        interpolateNulls: true,
        hAxis: {
          format: "0000"
        },

        height: 1000
      },
      chartData: []
    };
  },
  methods: {
    ...mapActions([
      "fetchCalgaryPopulation",
      "fetchEdmontonPopulation",
      "fetchWinnipegPopulation"
    ])
  },
  computed: {
    ...mapGetters([
      "getCalgaryPopulation",
      "getEdmontonPopulation",
      "getWinnipegPopulation"
    ])
  },
  created() {
    this.chartData.push(["Year", "Calgary", "Edmonton", "Winnipeg"]);

    Promise.all([
      this.fetchCalgaryPopulation(),
      this.fetchEdmontonPopulation(),
      this.fetchWinnipegPopulation()
    ]).then(_ => {
      // eslint-disable-next-line no-console
      console.log(this.getCalgaryPopulation);

      let map = {};

      this.getCalgaryPopulation.forEach(data => {
        if (data.year < 1960) return;
        if (!map[data.year]) map[data.year] = [data.year, null, null, null];
        map[data.year][1] = data.population;
      });
      this.getEdmontonPopulation.forEach(data => {
        if (data.year < 1960) return;
        if (!map[data.year]) map[data.year] = [data.year, null, null, null];
        map[data.year][2] = data.population;
      });
      this.getWinnipegPopulation.forEach(data => {
        if (data.year < 1960) return;
        if (!map[data.year]) map[data.year] = [data.year, null, null, null];
        map[data.year][3] = data.population;
      });

      this.chartData.push(...Object.values(map));
    });
  }
};
</script>

<style scoped>
</style>