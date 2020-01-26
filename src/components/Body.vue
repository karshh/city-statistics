<template>
  <div id="body" class="container">
    <table class="table table-dark">
      <thead>
        <tr>
          <th>Year</th>
          <th>Population</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="data.id" v-for="data in getCalgaryPopulation">
          <td>{{data.year}}</td>
          <td>{{data.population}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
export default {
  name: "Body",
  methods: {
    ... mapActions(['fetchCalgaryPopulation'])
  },
  computed: {
    ... mapGetters(['getCalgaryPopulation'])
  },
  created() {
    this.fetchCalgaryPopulation();
  }
};
</script>

<style scoped>
</style>