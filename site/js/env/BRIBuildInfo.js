'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-28 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-322';
    this._commitGIT = '0ea09879e52b7b466383b40c6d52b160119a59c9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}