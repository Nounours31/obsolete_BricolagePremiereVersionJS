'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-14 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1483';
    this._commitGIT = 'a524f1bcf7920ff0bfb38ff276f7af12e449e22d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}