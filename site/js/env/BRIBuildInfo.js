'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-07 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-479';
    this._commitGIT = '72a7e5e0b641893cfa2f7fb837702f5ac70c507f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}