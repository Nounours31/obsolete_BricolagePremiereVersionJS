'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-02 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1194';
    this._commitGIT = '73a58608e0a74bb2e95bae18d7c2128d7d44e3e5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}