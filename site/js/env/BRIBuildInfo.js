'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 11:05:16';
    this._versionBuild = 'jenkins-Bricolage-98';
    this._commitGIT = '075175244fc4c03d9b7589da090d4b2c801e2e35';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}