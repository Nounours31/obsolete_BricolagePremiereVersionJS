'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-30 20:00:11';
    this._versionBuild = 'jenkins-Bricolage-1670';
    this._commitGIT = 'a2bd7d2f6dc8d531e61a19cbf1d936b33782431e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}