'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-15 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-755';
    this._commitGIT = '39e0a93712222b8d91f05d282d514f640515ddd7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}