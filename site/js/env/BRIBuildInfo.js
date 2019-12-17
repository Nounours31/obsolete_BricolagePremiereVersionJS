'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-17 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-765';
    this._commitGIT = '02e936640c9344b3558c8df271b462ee64c3ea92';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}