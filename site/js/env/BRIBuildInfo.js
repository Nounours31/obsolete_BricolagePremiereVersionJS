'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-18 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1500';
    this._commitGIT = 'cfc8e1b60430d5b0c10fcfa6a0df12caa98197bf';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}