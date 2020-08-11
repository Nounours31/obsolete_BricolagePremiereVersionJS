'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-11 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1716';
    this._commitGIT = '759084757d2bcdb3df0d8e9f4c262fa187a01c36';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}