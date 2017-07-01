var flarum = require('flarum-gulp');

flarum({
  modules: {
    'workbench/surfedge-event-tracking': [
      'src/**/*.js'
    ]
  }
});