'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-16 16:00:11';
    this._versionBuild = 'jenkins-Bricolage-1613';
    this._commitGIT = '34c81791e3556137fd40e9e6bf3f63a19c091ba5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}