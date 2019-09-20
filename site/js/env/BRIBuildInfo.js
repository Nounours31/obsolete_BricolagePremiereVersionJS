'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-20 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-411';
    this._commitGIT = 'af7d885d16715d01e9068ff26cec9756b04e73db';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}