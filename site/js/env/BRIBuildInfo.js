'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-28 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-2028';
    this._commitGIT = '20f7a3b9a652b5107b0e9d5ac46a6279aaf3ac11';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}