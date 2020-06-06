'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-06 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1452';
    this._commitGIT = 'dca7da89e29073374b7439fddfb72b20d3ca0faf';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}