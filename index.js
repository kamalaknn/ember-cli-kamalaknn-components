module.exports = {
  name: 'ember-cli-kamalaknn-components',
  included: function(app) {
    this.app = app;
    
    this.app.import(this.app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css');
    this.app.import(this.app.bowerDirectory + '/bootstrap/js/modal.js');
    this.app.import(this.app.bowerDirectory + '/bootstrap/js/transition.js');
  }
}
