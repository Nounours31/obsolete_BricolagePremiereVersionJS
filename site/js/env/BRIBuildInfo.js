'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-10 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1955';
    this._commitGIT = '3a5e1e8f623e7b4bbcd49dd6cc73aa2365a7f21d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}