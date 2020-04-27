'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-27 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1292';
    this._commitGIT = '99ea636731dbae0c503e75a73f73e150bfd81196';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}