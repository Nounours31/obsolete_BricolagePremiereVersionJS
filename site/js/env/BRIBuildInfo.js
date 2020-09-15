'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-15 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1858';
    this._commitGIT = 'bd7ba77bbedd8060646d851e5188aca3010bd382';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}