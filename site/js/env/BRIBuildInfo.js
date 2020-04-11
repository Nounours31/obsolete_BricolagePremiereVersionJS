'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-11 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-1229';
    this._commitGIT = 'e60314ed0128d23de4e2d214d24209364d5c7e85';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}