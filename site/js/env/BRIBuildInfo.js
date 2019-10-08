'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-08 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-483';
    this._commitGIT = 'a3397f768e96e233503b03d614a4628a68b57b8a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}