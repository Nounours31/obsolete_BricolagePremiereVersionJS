'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-21 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-538';
    this._commitGIT = 'ee07f341b8700598110c10b78f7cb571aed90820';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}