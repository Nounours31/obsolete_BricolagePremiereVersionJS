'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-03 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-2173';
    this._commitGIT = '6e2893bf4c07061e3ae4b668a7eb2c4dc9f49cac';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}