'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-15 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-1977';
    this._commitGIT = '6911d400905f1127ba724e53b5098664164c451a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}