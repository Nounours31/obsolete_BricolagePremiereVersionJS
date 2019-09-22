'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-22 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-419';
    this._commitGIT = '7eeea9848b3dbcf4c844e8bd61c3ed8719fead74';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}