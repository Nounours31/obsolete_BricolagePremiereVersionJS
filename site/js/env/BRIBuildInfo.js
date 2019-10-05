'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-05 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-472';
    this._commitGIT = 'ecd793bcda50d2b6ae9aa6f4c447c7fdf2dfca6c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}