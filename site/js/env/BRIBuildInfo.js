'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-31 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-576';
    this._commitGIT = '56729cc3a113d3f3aad7d8c29f42fbdb0361fe2d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}