'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-03 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-588';
    this._commitGIT = 'a21bbe44b826a8db79e14be12c707fa7618518d6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}