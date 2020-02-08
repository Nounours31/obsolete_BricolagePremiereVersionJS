'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-08 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-975';
    this._commitGIT = '5a2c8ec8ad2dc061a7a377bb6cd650afbc5c7354';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}