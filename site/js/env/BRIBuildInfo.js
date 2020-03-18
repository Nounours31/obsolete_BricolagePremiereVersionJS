'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-18 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1133';
    this._commitGIT = 'efb20a8f675b441d58234b87efdd3a0cd2834a88';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}