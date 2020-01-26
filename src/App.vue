<template>
  <div id="app">
    <Body />
  </div>
</template>

<script>
import Body from './components/Body';
import axios from 'axios';
var uuid = require('uuid/v4');

export default {
  name: 'app',
  components: {
    Body
  }
}
</script>

<style>
</style>
