'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-12 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-380';
    this._commitGIT = '05e912a074e300151a9bc6f77015de35bef27943';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}