'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-06 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1086';
    this._commitGIT = '80a102c4f20f6451339289c96d48565febdbf61c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}