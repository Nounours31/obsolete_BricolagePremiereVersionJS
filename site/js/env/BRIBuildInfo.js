'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-30 08:00:09';
    this._versionBuild = 'jenkins-Bricolage-1667';
    this._commitGIT = 'f6048e6bfe83c90a985c4f6a86e88243fbc6a68c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}