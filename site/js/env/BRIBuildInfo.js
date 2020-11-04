'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-04 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-2056';
    this._commitGIT = '5c9391648b0c80355b15681632c7db96657939a7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}