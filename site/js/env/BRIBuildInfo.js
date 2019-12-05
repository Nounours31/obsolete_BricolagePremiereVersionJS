'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-05 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-718';
    this._commitGIT = '6b08a1c0faa67c8f7a74dd5fc053ceb06efec3ca';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}