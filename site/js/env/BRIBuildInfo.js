'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-06 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-2064';
    this._commitGIT = '896bfc7c9e84f4c200961767f7880d67f77ad840';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}