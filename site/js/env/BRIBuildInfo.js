'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-19 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1992';
    this._commitGIT = '6541725838258c182603dc56073cd6bdb65dd841';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}