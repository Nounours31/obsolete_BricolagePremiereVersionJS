'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-18 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-403';
    this._commitGIT = '9af0a19a5893f51dc6af8e2918d0161fd58b9f2c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}