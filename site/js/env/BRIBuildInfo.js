'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-23 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-299';
    this._commitGIT = '968355585c4ecee65a02a451437b5d0ddf71b984';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}