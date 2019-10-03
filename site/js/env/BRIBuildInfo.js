'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-03 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-465';
    this._commitGIT = '73fcd4a829495e58febdef4f3f6d6cca5e8d7adb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}