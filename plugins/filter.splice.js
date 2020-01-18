import Vue from 'vue'

Vue.filter('spliceName', function(value) {
  return value.split('breeds/')[1].split('/')[0];
});