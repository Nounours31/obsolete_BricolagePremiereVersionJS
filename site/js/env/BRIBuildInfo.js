'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-13 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1602';
    this._commitGIT = '1fe28f6e2fba2af9db098bc4b7110f1d41b5adfc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}