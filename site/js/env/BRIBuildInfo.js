'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-21 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1879';
    this._commitGIT = 'ec77059a33a19306990bbe1061a6d0eaaed1817e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}