'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-26 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1654';
    this._commitGIT = '0a2655c0900533bd69732849989d5fe66d0851a5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}