'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 11:23:06';
    this._versionBuild = 'jenkins-Bricolage-106';
    this._commitGIT = '649995f72ddd8f10c54b986075334eb0cd9f8ade';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}