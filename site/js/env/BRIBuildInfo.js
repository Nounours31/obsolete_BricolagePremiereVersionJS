'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-10 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1345';
    this._commitGIT = '07dfc5fb8cca585279a3be9976600c9d8aa3e5d8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}