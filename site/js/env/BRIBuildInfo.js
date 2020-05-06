'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-06 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1330';
    this._commitGIT = 'be431dec20a90f108a99721cfb08fb516a76f15a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}