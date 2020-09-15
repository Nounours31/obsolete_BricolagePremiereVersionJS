'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-15 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1856';
    this._commitGIT = 'c4dfdc87ef4c14a44ac377321c147b59f8c0ab5e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}