'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-13 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-998';
    this._commitGIT = '7cf6c59b1bfec5005bc754c9d4ae222637711343';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}