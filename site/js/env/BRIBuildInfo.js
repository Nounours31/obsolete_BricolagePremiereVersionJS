'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-27 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-2148';
    this._commitGIT = '2b983aacc8634780bb4705817187481ee33d61f4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}