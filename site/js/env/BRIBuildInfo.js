'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-19 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1503';
    this._commitGIT = '7d47f7e3e2368c6157e21022be9e516a60b581c9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}