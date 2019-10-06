'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-06 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-476';
    this._commitGIT = '53599767c16e8299c645bc3f109e5b603f9777e7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}