'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-18 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-281';
    this._commitGIT = '2d1e76b3bb659e7c33932f3ff88ca764595c61aa';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}