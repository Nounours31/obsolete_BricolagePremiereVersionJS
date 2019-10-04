'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-04 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-470';
    this._commitGIT = '5982247dfefc390d4179950b9fe77a69412462e0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}