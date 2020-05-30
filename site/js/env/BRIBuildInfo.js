'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-30 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1424';
    this._commitGIT = 'e4d00fc69864e24fb95668051e5f09ebf6ae559d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}