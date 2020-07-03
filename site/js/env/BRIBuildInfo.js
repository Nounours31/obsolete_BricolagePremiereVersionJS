'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-03 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1562';
    this._commitGIT = '444dd394f976e54c0f756afb66af0d3aaa142609';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}