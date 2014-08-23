module.exports = {
  name: 'ember-cli-kamalaknn-components',
  included: function(app) {
    this.app = app;
    
    this.app.import({
      development: 'vendor/bootstrap/dist/css/bootstrap.css',
      production: 'vendor/bootstrap/dist/css/bootstrap.min.css'
    });
    this.app.import({
      development: 'vendor/bootstrap/dist/js/bootstrap.js',
      production: 'vendor/bootstrap/dist/js/bootstrap.min.js'
    });
  }
}