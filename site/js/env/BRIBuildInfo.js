'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-17 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-766';
    this._commitGIT = 'aad645996fc2042a9f0ea57e413d48d66059dcac';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}