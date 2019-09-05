'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-05 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-353';
    this._commitGIT = '17758d212c510193f39ea9bc0a50aeb4821e4626';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}