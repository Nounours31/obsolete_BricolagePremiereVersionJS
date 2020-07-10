'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-10 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-1589';
    this._commitGIT = 'a815e0a4fc84d738ddae6cc221519375d8a7245b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}