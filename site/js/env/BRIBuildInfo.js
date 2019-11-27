'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-27 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-684';
    this._commitGIT = '195e10a0ea728fca908bc05ef5cb720ac508016d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}