'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-27 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1167';
    this._commitGIT = '2a7749b96b5c2063ee28ef190f9bef713d0aefbb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}