'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-10 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-617';
    this._commitGIT = 'f555211d386f96a7aeca1d64bb7255b23298a24d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}