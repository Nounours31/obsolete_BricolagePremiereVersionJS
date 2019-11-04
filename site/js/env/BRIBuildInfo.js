'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-04 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-594';
    this._commitGIT = '9784a837bf62d0e17519c0b4f57a4f3fae2991f1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}