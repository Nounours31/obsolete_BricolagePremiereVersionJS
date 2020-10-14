'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-14 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-1973';
    this._commitGIT = 'a4db0a21601d0cd0e5c263c52f71603edc7b5b7b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}