'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-18 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-282';
    this._commitGIT = 'cad1df2360b324e1e960baf7d5e345d7f830443f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}