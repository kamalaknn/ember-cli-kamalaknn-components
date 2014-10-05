import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  attributeBindings: ['data-target'],
  
  showModal: function() {
    Ember.$(this.get('data-target')).modal('toggle');

    window.console.log('going to open modal');
  }.on('click')
});
