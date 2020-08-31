'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-31 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1795';
    this._commitGIT = 'e43f6a07385422e371c19bbfb2d22366f6a3cb49';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}