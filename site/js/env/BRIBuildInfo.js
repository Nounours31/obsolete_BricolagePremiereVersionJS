'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-09 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1710';
    this._commitGIT = '099ac519f4a742793d65f3f35356fb139d86788a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}