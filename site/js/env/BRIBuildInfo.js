'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-26 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-925';
    this._commitGIT = '67cb66ca354186b2a414daa8e4d915601217f153';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}