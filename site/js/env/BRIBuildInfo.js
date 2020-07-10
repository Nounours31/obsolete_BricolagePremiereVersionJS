'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-10 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1588';
    this._commitGIT = 'bffce4dd7bfa3c35fb1bbdb341100db2f31d04be';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}