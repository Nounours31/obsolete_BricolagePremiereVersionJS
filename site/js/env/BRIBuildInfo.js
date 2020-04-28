'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-28 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1298';
    this._commitGIT = 'd85149d585a9f782cc64521f917d2bf0e5a70d2f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}