'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-28 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1056';
    this._commitGIT = 'be28a76872a8fd5321a7dd717ede29d5c6bdcccc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}