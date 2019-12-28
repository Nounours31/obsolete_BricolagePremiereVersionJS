'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-28 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-807';
    this._commitGIT = 'caa3c4210fb25489879dc43c9e540faf85297470';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}