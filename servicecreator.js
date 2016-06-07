function createLanguagesService(execlib, ParentServicePack) {
  'use strict';
  var ParentService = ParentServicePack.Service,
    dataSuite = execlib.dataSuite;

  function factoryCreator(parentFactory) {
    return {
      'service': require('./users/serviceusercreator')(execlib, parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib, parentFactory.get('user')) 
    };
  }

  function LanguagesService(prophash) {
    ParentService.call(this, prophash);
  }
  
  ParentService.inherit(LanguagesService, factoryCreator, require('./storagedescriptor'));
  
  LanguagesService.prototype.__cleanUp = function() {
    ParentService.prototype.__cleanUp.call(this);
  };
  LanguagesService.prototype.createStorage = function(storagedescriptor) {
    return ParentService.prototype.createStorage.call(this, storagedescriptor);
  };
  return LanguagesService;
}

module.exports = createLanguagesService;
