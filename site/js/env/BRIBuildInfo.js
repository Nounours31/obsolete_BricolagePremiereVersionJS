'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-15 20:00:13';
    this._versionBuild = 'jenkins-Bricolage-146';
    this._commitGIT = '0645e05fc257886ef624260925b63cdd282376d3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}