'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-05 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1448';
    this._commitGIT = 'ecca907eff91882f824774ecc5f4016472736b35';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}