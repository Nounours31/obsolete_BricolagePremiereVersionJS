'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-15 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-1365';
    this._commitGIT = '8c2f227fdeb3f37d60c651e51990ba9c341a5260';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}