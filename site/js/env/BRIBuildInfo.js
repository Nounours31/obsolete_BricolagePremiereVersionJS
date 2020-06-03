'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-03 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1439';
    this._commitGIT = '4039967c5f1f61b14811c6321a849a4115d88ae4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}