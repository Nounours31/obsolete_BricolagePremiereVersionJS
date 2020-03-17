'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-17 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1127';
    this._commitGIT = 'b184286a08901e811ef82976383882092bbd3a49';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}