'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-31 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-332';
    this._commitGIT = '47ea37e2d7a35b4807ae4d69a87a179123bcf9a3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}