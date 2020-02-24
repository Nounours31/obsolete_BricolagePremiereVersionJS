'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-24 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1041';
    this._commitGIT = 'fed72fcb92006c5a5637cbdb6e295f4de3ed3605';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}