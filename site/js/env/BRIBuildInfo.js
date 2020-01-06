'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-06 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-843';
    this._commitGIT = 'e2699cabaf7be37db44c54c1b809f667a152a085';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}