'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-24 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-793';
    this._commitGIT = 'f55189af9004fcbe7be28b70fe160c46f143c83a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}