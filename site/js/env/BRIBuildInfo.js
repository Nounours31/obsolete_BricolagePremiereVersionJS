'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-25 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1895';
    this._commitGIT = '1afbf4c9475f9f8b86413e292e0581b5f373a6a0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}