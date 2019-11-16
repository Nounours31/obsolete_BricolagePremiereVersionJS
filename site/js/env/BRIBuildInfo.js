'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-16 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-642';
    this._commitGIT = 'df7cd76e518955be9e1bc70817ec38731d378f0a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}