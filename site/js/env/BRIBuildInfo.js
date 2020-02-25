'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-25 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1046';
    this._commitGIT = '6a02f13d8a6317a87e97e4536a84cd4d1e892c96';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}