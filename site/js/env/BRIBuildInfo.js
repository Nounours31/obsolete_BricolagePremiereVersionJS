'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-26 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-923';
    this._commitGIT = '6a9a3550a7ab5f1c9824b8753f85d72a83981acc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}