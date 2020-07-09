'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-09 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1584';
    this._commitGIT = '04c3eee081cc2fd7d5726f31f9ba2eaaa66dba22';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}