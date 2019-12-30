'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-30 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-815';
    this._commitGIT = '51f39002e70126a9a9326f13aa153c47b9b42510';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}