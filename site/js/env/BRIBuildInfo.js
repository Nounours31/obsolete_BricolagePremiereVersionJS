'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-22 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-539';
    this._commitGIT = 'b503fdb043815a35ed995f8951ab52b7052213c3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}