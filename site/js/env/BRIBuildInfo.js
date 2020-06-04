'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-04 20:00:10';
    this._versionBuild = 'jenkins-Bricolage-1446';
    this._commitGIT = 'be09def25d3896c0facf878f80099c78d61a2abe';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}