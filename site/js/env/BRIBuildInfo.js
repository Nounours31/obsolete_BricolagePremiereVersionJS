'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-02 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1558';
    this._commitGIT = 'f1ff964e3d69f8224bd6f48975d32fcae507f277';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}