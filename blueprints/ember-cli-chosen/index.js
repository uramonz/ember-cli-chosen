module.exports = {
  normalizeEntityName: function() {},
  description: 'Include "Chosen" bower package',

  afterInstall: function(options) {
    return this.addBowerPackageToProject('chosen', 'https://github.com/harvesthq/chosen/releases/download/v1.5.1/chosen_v1.5.1.zip');
  }
};
