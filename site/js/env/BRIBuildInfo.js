'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-19 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-897';
    this._commitGIT = '2df3a78eacd6807a047559fb03065b71214b4c00';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}