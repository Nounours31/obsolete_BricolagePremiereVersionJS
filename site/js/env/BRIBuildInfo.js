'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-10 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-494';
    this._commitGIT = '5854a79ac4d00f208eba774f3bbf735ffc08ec19';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}