'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-21 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1030';
    this._commitGIT = '6d77f7857a11ec6be1f39959dc94149ac315e187';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}