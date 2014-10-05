import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    someAction: function() {
      window.console.log('action handled properly within block');
    }
  }
});