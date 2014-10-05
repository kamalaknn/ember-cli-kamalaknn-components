import Ember from 'ember';
import ModalLayoutTemplate from '../../templates/components/kk-modal';

export default Ember.Component.extend({
  classNameBindings: [':modal',':fade'],
  attributeBindings: ['id','tabindex','aria-hidden'],
  tabindex: '-1',
  'aria-hidden': true,
  role: 'dialog',
  layout: ModalLayoutTemplate
});
