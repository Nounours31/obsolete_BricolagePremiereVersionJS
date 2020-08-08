'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-08 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1704';
    this._commitGIT = 'ad6968331d103f39c090f8cec77d8f3f302e29ff';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}