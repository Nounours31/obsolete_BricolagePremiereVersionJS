'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-06 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1083';
    this._commitGIT = 'efc4c254ee62ad1d1ad676ac03a3883f2c69067c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}