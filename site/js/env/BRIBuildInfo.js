'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-27 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1052';
    this._commitGIT = '5e8a32d892813375e35e3cde7d32c60a4576dd61';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}