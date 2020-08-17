'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-17 12:00:12';
    this._versionBuild = 'jenkins-Bricolage-1740';
    this._commitGIT = 'f9dc4b149870dc0fb5d058277f8c6a543c67b415';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}