'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-04 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-714';
    this._commitGIT = 'cc6600c0f43baddac6cc61e75d2931bc9b294216';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}