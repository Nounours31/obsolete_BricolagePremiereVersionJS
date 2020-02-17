'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-17 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1014';
    this._commitGIT = '376c883ae5f224b85b9a15f4c08543d9e350ce86';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}