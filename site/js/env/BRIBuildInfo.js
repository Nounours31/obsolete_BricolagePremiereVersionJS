'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-28 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1058';
    this._commitGIT = '5516b39b67d20f2bc17436e8ebf0d96d18bd4313';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}