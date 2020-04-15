'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-15 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1246';
    this._commitGIT = '15e4103d80a32a8a7fdc71ed51a3c1971e8e801c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}