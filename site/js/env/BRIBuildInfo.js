'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-24 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-305';
    this._commitGIT = '01b623b42e4b4a9f9bfa7fc2380b1d4fd21c5fee';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}