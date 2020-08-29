'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-29 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1790';
    this._commitGIT = 'd1e7670ff1fbb4fe790aaf6cab174d971e0c4d76';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}