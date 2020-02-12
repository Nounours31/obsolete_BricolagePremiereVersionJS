'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-12 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-992';
    this._commitGIT = 'c7a531399f8e2fa32aae4a47300cfbfd833888b9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}