'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-03 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-1561';
    this._commitGIT = 'c851aa0904af70f9f80e7f444dac10fc526db9f4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}