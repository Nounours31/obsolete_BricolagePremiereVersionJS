'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-11 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-2086';
    this._commitGIT = '71fc81c694f1ce7ccd8b4152120d7c96f3adbc17';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}