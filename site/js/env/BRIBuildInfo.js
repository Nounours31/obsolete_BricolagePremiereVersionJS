'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-14 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-508';
    this._commitGIT = 'cfe20c0c4a5210dc77e44c2e108cfb463559c3ea';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}