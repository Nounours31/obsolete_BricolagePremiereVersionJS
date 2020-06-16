'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-16 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1494';
    this._commitGIT = '6d7f8d60e82414b8cc7dbd7740bf6b7bbd387988';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}