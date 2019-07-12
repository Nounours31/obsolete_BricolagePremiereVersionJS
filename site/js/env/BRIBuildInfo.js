'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 12:53:07';
    this._versionBuild = 'jenkins-Bricolage-125';
    this._commitGIT = '23e56405f438604867ca6f83447a98c77a161d5c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}