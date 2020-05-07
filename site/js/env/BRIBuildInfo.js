'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-07 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1331';
    this._commitGIT = '909014710b3959ad79762bdf42110f988eaef079';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}