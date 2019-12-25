'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-25 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-798';
    this._commitGIT = 'c133390135ae1f730c18741c5cca705fecfdee69';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}