'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-03 12:00:12';
    this._versionBuild = 'jenkins-Bricolage-1560';
    this._commitGIT = '08c2e9b6594b3d279ca6bfea025bf5e2beced766';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}