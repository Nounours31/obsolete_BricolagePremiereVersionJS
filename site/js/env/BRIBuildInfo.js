'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-16 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1862';
    this._commitGIT = '2a83a13d15d2b13b03401b7be1f7d57fb6755d44';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}