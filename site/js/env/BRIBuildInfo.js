'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-09 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-369';
    this._commitGIT = '3d9b4107c7f74d06cc9d28c2afcb16819173fb03';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}