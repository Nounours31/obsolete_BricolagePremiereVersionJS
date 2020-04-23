'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-23 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1275';
    this._commitGIT = '8f18cff41109a21b041c6b85bf1c07bb6d24e5d5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}