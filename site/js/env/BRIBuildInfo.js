'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-15 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-394';
    this._commitGIT = '3f74e6d1db1005112e23de2005ddb5bf82d1daa5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}