module.exports = {
  name: 'ember-cli-kamalaknn-components',
  included: function(app) {
    this.app = app;
    
    this.app.import('vendor/bootstrap/dist/css/bootstrap.css');
    this.app.import('vendor/bootstrap/dist/js/bootstrap.js');
  }
}
