'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-16 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-397';
    this._commitGIT = '4e151f12260505179d45fd1d4d5a7f1f75b41cbf';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}