'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-18 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-1621';
    this._commitGIT = '757edd45dd7cc37dfefdc398e9c9ab78a31eb531';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}