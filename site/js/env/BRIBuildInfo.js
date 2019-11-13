'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-13 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-630';
    this._commitGIT = '172a9a48f680194c376046c764cd0938a18bf5e2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}