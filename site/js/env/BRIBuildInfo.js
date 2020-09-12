'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-12 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1845';
    this._commitGIT = '4678dd5a1e2e39e92dc03a6cf686b2d176c79d72';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}