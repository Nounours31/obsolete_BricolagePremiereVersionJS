'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-10 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1470';
    this._commitGIT = '041c1e535d2593e5bbbe99858a150c77736536d8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}