'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-29 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1176';
    this._commitGIT = '26c8638905300862da2b3d3afdff8ab700a8641f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}