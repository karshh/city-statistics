<template>
  <div id="app" v-bind:style="{ backgroundColor: '#303030'}">
    <TopNav />
    <PopulationChart />
  </div>
</template>

<script>
import PopulationChart from './components/PopulationChart';
import TopNav from './components/TopNav';
import axios from 'axios';
var uuid = require('uuid/v4');

export default {
  name: 'app',
  components: {
    PopulationChart,
    TopNav
  }
}
</script>

<style>
  html {
    background-color: #303030;
  }
</style>
