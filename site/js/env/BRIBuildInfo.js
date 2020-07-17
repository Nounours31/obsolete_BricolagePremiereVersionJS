'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-17 12:00:11';
    this._versionBuild = 'jenkins-Bricolage-1616';
    this._commitGIT = 'b665db4447931fbe294cb7f3bc6c7b8d050386e9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}