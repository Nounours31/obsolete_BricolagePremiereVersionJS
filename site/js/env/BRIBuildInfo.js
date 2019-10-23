'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-23 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-545';
    this._commitGIT = '0b52ad5aaeb48688388c581ec685f59c61a6608b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}