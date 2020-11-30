'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-30 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-2162';
    this._commitGIT = '4cde7afe0e717553717139e1f0a0614e1f320a2f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}