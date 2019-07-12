'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 12:58:07';
    this._versionBuild = 'jenkins-Bricolage-127';
    this._commitGIT = '551427eedccae42c87707cd8efd8e2fd9a1135a0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}