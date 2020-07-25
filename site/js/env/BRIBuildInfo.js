'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-25 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1647';
    this._commitGIT = '96593239e235d2494a98d4f9ce9f80ca7ee834e9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}