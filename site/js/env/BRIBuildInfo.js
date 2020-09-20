'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-20 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1878';
    this._commitGIT = '92fa307b4d125a1df405d588c8fad0caacf00e5a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}