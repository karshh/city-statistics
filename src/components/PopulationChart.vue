<template>
  <div id="body" class="container">
    <div class="pop-chart" :style="{'backgroundColor': '#424242', 'color': '#F5F5F5'}">
      <br>
      <h3 align="center">Population</h3>
      <GChart type="LineChart" :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { GChart } from "vue-google-charts";

export default {
  name: "PopulationChart",
  components: {
    GChart
  },
  data() {
    return {
      chartOptions: {
        title: "Population",
        curveType: "function",
        titlePosition: "none",
        titleTextStyle: {
          color: "#F5F5F5"
        },
        interpolateNulls: true,
        hAxis: {
          gridlines: {
            color: "transparent"
          },
          textStyle: {
            color: "#F5F5F5"
          },
          format: "0000"
        },
        vAxis: {
          gridlines: {
            color: "#303030"
          },
          textStyle: {
            color: "#F5F5F5"
          }
        },
        legend: {
          position: "bottom",
          textStyle: {
            color: "#F5F5F5"
          }
        },
        backgroundColor: "#424242",
        height: 500,
        chartArea: { width: "75%", height: "70%" }
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
.pop-chart {
  box-shadow: 0 25px 100px -12px rgba(0, 0, 0, 0.25);
}

</style>