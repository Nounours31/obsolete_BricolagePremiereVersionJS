'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-10 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-371';
    this._commitGIT = '90220f597e5952b259abe4fd477527e598c4009b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}