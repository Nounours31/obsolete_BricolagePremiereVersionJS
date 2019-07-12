'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 12:48:07';
    this._versionBuild = 'jenkins-Bricolage-123';
    this._commitGIT = '1373dc2cffc22fb1e75cda60519fb644561d8bd2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}