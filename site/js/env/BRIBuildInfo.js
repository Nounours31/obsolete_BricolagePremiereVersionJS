'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-24 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-917';
    this._commitGIT = 'f9c81e87f879ce6f25b274ceabbd6ff2c417ac9f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}