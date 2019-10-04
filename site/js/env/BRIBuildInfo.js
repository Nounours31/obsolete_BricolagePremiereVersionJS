'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-04 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-467';
    this._commitGIT = 'e8112b268cea93c6d2eb7fe6bb37b2922fe36ecd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}