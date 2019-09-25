'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-25 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-433';
    this._commitGIT = '35c2aaea8ddbdd8c076e90c3fedc4f64653b4b8e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}