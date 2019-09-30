'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-30 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-453';
    this._commitGIT = '4c03fa6a2544b145405bd3ca303011318ac0b152';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}