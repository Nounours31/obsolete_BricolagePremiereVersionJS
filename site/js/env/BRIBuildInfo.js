'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-03 16:00:12';
    this._versionBuild = 'jenkins-Bricolage-1441';
    this._commitGIT = '6dee7a9d982b14fb42dd0ce6e577269a5d31adbb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}