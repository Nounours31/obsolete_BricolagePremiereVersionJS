'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-28 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1907';
    this._commitGIT = 'e8dfe3345342c6c5988b91af15804a5a3acd7596';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}