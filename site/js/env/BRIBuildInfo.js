'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-08 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-1218';
    this._commitGIT = 'a5a1c63e9bad7901b8142a3bc3c8396dc2535ec7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}