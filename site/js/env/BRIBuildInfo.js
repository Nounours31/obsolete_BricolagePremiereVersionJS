'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-12 20:00:14';
    this._versionBuild = 'jenkins-Bricolage-258';
    this._commitGIT = 'dc5d28cfc1e9b7a3e494f4cb3654d3dfe6b2d355';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}