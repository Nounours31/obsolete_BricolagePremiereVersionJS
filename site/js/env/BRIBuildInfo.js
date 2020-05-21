'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-21 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1390';
    this._commitGIT = 'e60b5a03c6778da897c7dc1d7c303303c83982ad';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}