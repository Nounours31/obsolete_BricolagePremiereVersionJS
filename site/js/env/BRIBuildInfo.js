'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-13 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1848';
    this._commitGIT = '0e7ad8651d5124e3683cee04ffc68a2c09e670ee';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}