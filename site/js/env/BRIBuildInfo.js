'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-03 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-834';
    this._commitGIT = 'a1dad1815e5018fc3c6ebace38400844f9ac18da';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}