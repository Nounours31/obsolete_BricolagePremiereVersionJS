'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-03 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-957';
    this._commitGIT = '7eb02704b55f321e0788c5bb27b97c14c4396a0b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}