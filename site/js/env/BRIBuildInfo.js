'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-04 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1689';
    this._commitGIT = 'bac1936f117e91c586cc99863c84f6260df9ab62';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}