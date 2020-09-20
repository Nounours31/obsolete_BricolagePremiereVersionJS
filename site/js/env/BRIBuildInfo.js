'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-20 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1875';
    this._commitGIT = '5a9210424d66aa894dc806725d8560ce49534989';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}