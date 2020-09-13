'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-13 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1849';
    this._commitGIT = '3bcb0082e84b899ee19cba918a093d85d37b9a6f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}