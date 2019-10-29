'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-29 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-567';
    this._commitGIT = 'f1bfdf9bfb40e7a798819b669753937da4c511d5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}