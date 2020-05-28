'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-28 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1416';
    this._commitGIT = '1fd594c03098a2f0b141bfc17eaaaefbd87808af';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}