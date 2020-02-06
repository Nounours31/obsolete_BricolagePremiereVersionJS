'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-06 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-970';
    this._commitGIT = '0b0b764d5d46308efa1bc6fb1243d334ba407927';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}