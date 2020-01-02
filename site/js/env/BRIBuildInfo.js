'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-02 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-827';
    this._commitGIT = 'd9256c835f33f9bfd2189d5aa4c67b041bedc2ce';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}