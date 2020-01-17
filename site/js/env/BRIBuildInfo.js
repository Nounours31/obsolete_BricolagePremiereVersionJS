'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-17 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-889';
    this._commitGIT = '4efdf1c1944a18e809ad4ec32901e816451511f1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}