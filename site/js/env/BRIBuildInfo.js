'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-18 20:00:10';
    this._versionBuild = 'jenkins-Bricolage-1746';
    this._commitGIT = 'ee916837adbc050814a2dc566058de912a3731f7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}