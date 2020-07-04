'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-04 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1566';
    this._commitGIT = '562b5a45d3252f16e8fa2080dfbb1e1053a5522a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}