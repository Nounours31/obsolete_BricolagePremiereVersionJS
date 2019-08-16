'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-16 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-274';
    this._commitGIT = '143a499967fcfef9a1fa41a32c037eb6a8fa30df';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}