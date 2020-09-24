'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-24 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1891';
    this._commitGIT = '8e96334afc86e6b0fc6925a4e44e909829b6535e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}