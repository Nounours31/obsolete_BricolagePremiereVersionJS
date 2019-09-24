'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-24 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-429';
    this._commitGIT = 'a193ed73c996c1aa74dfa7dbdb821d252adc89b0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}