'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-19 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-283';
    this._commitGIT = '5f2482095a8165503faf4cdaf834ebdf695b087c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}