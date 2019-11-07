'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-07 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-606';
    this._commitGIT = 'd7c182238ff47f06cf634f4c6509e57ac6fb6f42';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}