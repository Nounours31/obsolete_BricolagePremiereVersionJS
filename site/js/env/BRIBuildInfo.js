'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-07 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-480';
    this._commitGIT = '554b2fbf2f79855e54221554ef7a4214b6802640';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}