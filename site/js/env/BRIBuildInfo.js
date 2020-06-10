'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-10 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1468';
    this._commitGIT = '12a0369a8e6be115d56c5c06488dfa7f836b3c97';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}