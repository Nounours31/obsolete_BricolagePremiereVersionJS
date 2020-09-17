'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-17 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1864';
    this._commitGIT = '17804e12ba2d10836ef360e0e819178d72b46ab0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}