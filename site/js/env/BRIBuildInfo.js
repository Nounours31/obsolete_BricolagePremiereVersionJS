'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-14 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-510';
    this._commitGIT = 'a27f3911a6a1164f72e72b4a2f04dbeb94498a72';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}