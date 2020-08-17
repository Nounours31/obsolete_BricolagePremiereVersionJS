'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-17 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-1741';
    this._commitGIT = 'ecc70c3979c2714c6727685c60d65839fd5f788f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}