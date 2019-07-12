'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 12:53:48';
    this._versionBuild = 'jenkins-Bricolage-126';
    this._commitGIT = '4241277356022e14094345290c0c6576f353aef5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}