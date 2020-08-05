'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-05 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1691';
    this._commitGIT = '8686ab8850674c8aaf3dc78e9081eb1fe3955cfe';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}