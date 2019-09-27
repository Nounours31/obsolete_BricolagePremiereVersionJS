'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-27 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-441';
    this._commitGIT = 'b61cef58d03d338475b71875ddc825f250872c60';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}