<template>
  <div id="app">
    <Header />
    <Body />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
import Body from './components/Body.vue';
import { Prop } from 'vue-property-decorator';

@Component({
  components: {
    Header,
    Body
  },
})
export default class App extends Vue {
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
