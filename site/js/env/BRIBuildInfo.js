'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-29 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-325';
    this._commitGIT = '694856a3026e203440bc60e0af134df3f6cbac71';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}