'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-28 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1172';
    this._commitGIT = 'd880af69414392a4d53995a837aa0e78856a61dc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}