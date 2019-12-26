'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-26 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-801';
    this._commitGIT = '1a4ed6b05843afed7a18dc8c62ceba8b0b1ee960';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}