'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-09 16:00:11';
    this._versionBuild = 'jenkins-Bricolage-1465';
    this._commitGIT = '46468741c7b15bd26fa9ede06e27c0a112fe3a1a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}