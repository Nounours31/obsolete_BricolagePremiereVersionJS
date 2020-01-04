'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-04 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-838';
    this._commitGIT = 'b1153c512d80501ea869cf40a6b3fce49398e9fe';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}