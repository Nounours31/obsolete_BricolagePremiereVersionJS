'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-04 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-347';
    this._commitGIT = '0023cfe900d0a736f985d2cb36a23f4f5a5a8d56';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}