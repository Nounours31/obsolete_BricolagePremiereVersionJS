'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-21 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1027';
    this._commitGIT = '82eeb0031b2b42ebf8ef47618e909549bf6274ee';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}