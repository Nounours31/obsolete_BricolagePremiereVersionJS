'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-20 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1509';
    this._commitGIT = 'ff23da9dd455a424ecc2d2123ee54cad4542945e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}