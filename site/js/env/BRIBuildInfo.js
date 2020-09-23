'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-23 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1887';
    this._commitGIT = '8d828714a24b0dadca27bb459bd62323d1cbe799';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}