'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-16 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1009';
    this._commitGIT = '43a625c8f3a1a36e29bda2baa6146e64257f4952';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}