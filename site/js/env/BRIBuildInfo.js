'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-23 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1889';
    this._commitGIT = '2be4507a8101d9dcd68a952e7734a10ea6fb33c9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}