'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-05 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-1081';
    this._commitGIT = 'b2f36462c4ed21956ed5523b062d4ea0a29d8cf8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}