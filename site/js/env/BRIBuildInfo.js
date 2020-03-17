'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-17 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1130';
    this._commitGIT = '1bbf7f1f1123a8880f450cf4b240c59888d50417';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}