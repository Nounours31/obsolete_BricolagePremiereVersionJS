'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-12 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1354';
    this._commitGIT = '62ae2ba782a02f41b6fa32d2820f9e1979a68ebd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}