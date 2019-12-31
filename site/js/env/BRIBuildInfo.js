'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-31 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-820';
    this._commitGIT = 'b65015e647e1a646a6ed0b0b48fc542f80fb05ab';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}