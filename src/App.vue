<template>
  <div id="app" v-bind:style="{ backgroundColor: '#303030'}">
    <TopNav />
    <div class="row">
      <div class="col-6">
        <PopulationChart />
      </div>
      <div class="col-6">
        <CommentForm v-on:add-comment="addComment$($event)" />
      </div>
    </div>
    <CommentList :comments="Comment" />
  </div>
</template>

<script>
// Color theme: https://stackoverflow.com/questions/36915508/what-are-the-material-design-dark-theme-colors

import PopulationChart from "./components/PopulationChart";
import TopNav from "./components/TopNav";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
var uuid = require("uuid/v4");

export default {
  name: "app",
  components: {
    PopulationChart,
    TopNav,
    CommentForm,
    CommentList
  },
  methods: {
    addComment$($event) {
      // eslint-disable-next-line no-console
      console.log($event);
      this.addComment($event);
    },
    ...mapActions(["fetchComments", "addComment"])
  },
  computed: {
    ...mapGetters(["Comment"])
  },

  created() {
    this.fetchComments();
  }
};
</script>

<style>
html {
  background-color: #303030;
}
</style>
