'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-02 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-830';
    this._commitGIT = 'bbfad6d9769bd0b3635d20e363298e120d481560';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}