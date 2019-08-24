'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-24 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-306';
    this._commitGIT = 'cc7176c02e99cad65046d79b9629c71321d89c1d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}