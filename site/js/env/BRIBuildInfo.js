'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-04 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1321';
    this._commitGIT = '7833d287fd7f36d477a430368e97f11e1495b808';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}