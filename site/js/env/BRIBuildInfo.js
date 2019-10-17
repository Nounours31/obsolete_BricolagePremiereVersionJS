'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-17 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-519';
    this._commitGIT = '66b9e72d860025c56d4516847fa7e909d11e86eb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}