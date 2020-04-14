'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-14 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-1242';
    this._commitGIT = '1c8eba6a23abf2c05a6f4bd51bcd2106e22dae48';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}