module.exports = {
  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  normalizeEntityName: function() {
    //dont require enitiy name
  },
  afterInstall: function(options) {
    this.addBowerPackageToProject('bootstrap');
  }
};
