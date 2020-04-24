'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-24 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-1282';
    this._commitGIT = 'f37cbd2b37549a84eec6e0966f96ed3b4826b31c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}