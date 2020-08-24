'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-24 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1768';
    this._commitGIT = '3587e8a657a6df4f6d489060952a367d1ae41fef';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}