'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-16 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1736';
    this._commitGIT = '48144ca836020c3b2b3a956f90d1ed7bfaee0337';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}