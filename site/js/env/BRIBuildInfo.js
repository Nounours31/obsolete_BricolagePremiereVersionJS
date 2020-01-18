'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-18 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-892';
    this._commitGIT = '554bbb87e4530f11e57b461e160d381703901324';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}