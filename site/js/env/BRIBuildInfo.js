'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-21 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-1389';
    this._commitGIT = '97d69e911febb8985ac32f3c858fb7490264a4b4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}